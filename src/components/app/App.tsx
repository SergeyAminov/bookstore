import { Outlet } from "react-router-dom"
import Nav from "../nav/Nav";

import s from "./App.module.css";
import { Footer } from "../footer/Footer";

export const App = () => {
    return (
        <>
            <Nav />
            <div className={s.pageHolder}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
