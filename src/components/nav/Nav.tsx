import { NavLink } from "react-router-dom";

import s from "./Nav.module.css";

export const Nav = () => {
    return (
        <div className={s.nav}>
            <NavLink to="/catalog">Каталог</NavLink>
            <NavLink to="/about">О нас</NavLink>
            <span className={s.divider} />
            <NavLink to="/cart">Корзина</NavLink>
            <NavLink to="/login">Вход</NavLink>
        </div>
    )
}