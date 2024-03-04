import { NavLink, Navigate } from "react-router-dom";
import { ConnectedProps, connect } from "react-redux";
import { TStoreUser } from "@/types/types";
import { setUserData } from "@/store/userSlice";
import { TAppDispatch, TAppStore } from "@/store";
import { useRegister } from "@/hooks/auth/useRegister";

import s from "../login/Login.module.css";

const Register = ({ id, setUserData }: TRegisterProps) => {
    const { submit, user, onChange, isLoading, error } = useRegister({ setUserData })

    if (id !== null)
        return <Navigate to="/catalog" replace />

    return (
        <div className={s.loginHolder}>
            <form className={s.form} onSubmit={submit}>
                <h2>Bookstore</h2>
                <h3>Регистрация</h3>

                <input type="text"
                    id="name"
                    name="name"
                    autoComplete="off"
                    placeholder="Имя"
                    className={s.input}
                    defaultValue={user.name}
                    onChange={onChange} />

                <input type="text"
                    id="surname"
                    name="surname"
                    autoComplete="off"
                    placeholder="Фамилия"
                    className={s.input}
                    defaultValue={user.surname}
                    onChange={onChange} />

                <input type="text"
                    id="username"
                    name="username"
                    autoComplete="off"
                    placeholder="Имя пользователя"
                    className={s.input}
                    defaultValue={user.username}
                    onChange={onChange}
                    required />

                <input type="email"
                    id="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Эл. почта"
                    className={s.input}
                    defaultValue={user.email}
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

                <input type="submit" value="Зарегистрироваться" className={s.submit} disabled={isLoading} />

                {isLoading && <span>отправка запроса</span>}
                {error.length > 0 && <span className={s.err}>{error}</span>}

                <NavLink to="/login">Вход</NavLink>
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
type TRegisterProps = ConnectedProps<typeof connector>

export default connector(Register)
