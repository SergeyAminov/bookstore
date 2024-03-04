import { NavLink } from "react-router-dom";
import { unsetUserData } from "@/store/userSlice";
import { TAppDispatch, TAppStore } from "@/store";
import { ConnectedProps, connect } from "react-redux";

import s from "./Nav.module.css";

export const Nav = ({ id, unsetUserData }: TNavProps) => {
    return (
        <div className={s.nav}>
            <NavLink to="/catalog">Каталог</NavLink>
            <NavLink to="/about">О нас</NavLink>
            <span className={s.divider} />
            <NavLink to="/cart">Корзина</NavLink>

            {id !== null && <button className={s.logout} onClick={unsetUserData}>Выход</button>}
            {
                id === null &&
                <>
                    <NavLink to="/login">Вход</NavLink>
                    <NavLink to="/register">Регистрация</NavLink>
                </>
            }
        </div>
    )
}

const mapStateToProps = (state: TAppStore) => ({
    id: state.user.id
})

const mapDispatchToProps = (dispatch: TAppDispatch) => ({
    unsetUserData: () => dispatch(unsetUserData())
})

const connector = connect(mapStateToProps, mapDispatchToProps)
type TNavProps = ConnectedProps<typeof connector>

export default connector(Nav)
