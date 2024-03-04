import { NavLink, Navigate } from "react-router-dom";
import { ConnectedProps, connect } from "react-redux";
import { TAppDispatch, TAppStore } from "@/store";
import { setUserData } from "@/store/userSlice";
import { TStoreUser } from "@/types/types";
import { useLogin } from "@/hooks/auth/useLogin";

import s from "./Login.module.css";

const Login = ({ id, setUserData }: TLoginProps) => {
    const { submit, user, onChange, isLoading, error } = useLogin({ setUserData })

    if(id !== null)
        return <Navigate to="/catalog" replace />

    return (
        <div className={s.loginHolder}>
            <form className={s.form} onSubmit={submit}>
                <h2>Bookstore</h2>
                <h3>Вход</h3>

                <input type="text"
                    id="username"
                    name="username"
                    autoComplete="off"
                    placeholder="Имя пользователя"
                    className={s.input}
                    defaultValue={user.username}
                    onChange={onChange}
                    required />

                <input type="password"
                    id="password"
                    name="password"
                    autoComplete="off"
                    placeholder="Пароль"
                    className={s.input}
                    defaultValue={user.password}
                    onChange={onChange}
                    required />

                <input type="submit" value="Вход" className={s.submit} disabled={isLoading} />

                {isLoading && <span className={s.loading} >выполняется вход</span>}
                {error.length > 0 && <span className={s.err}>{error}</span>}

                <NavLink to="/register">Регистрация</NavLink>
            </form>
        </div>
    )
}

const mapStateToProps = (state: TAppStore) => ({
    id: state.user.id
})

const mapDispatchToProps = (dispatch: TAppDispatch) => ({
    setUserData: (data: TStoreUser) => dispatch(setUserData(data))
})

const connector = connect(mapStateToProps, mapDispatchToProps)
type TLoginProps = ConnectedProps<typeof connector>

export default connector(Login)
