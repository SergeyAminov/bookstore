import { ConnectedProps, connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { TAppStore } from "@/store";
import s from "./Profile.module.css";

const Profile = ({ user }: TNavProps) => {

    if(user.id === null)
        return <Navigate to="/login" replace />
    
    return (
        <div className={s.profile}>
            <span>Имя: {user.name ? user.name : ''}</span>
            <span>Фамилия: {user.surname ? user.surname : ''}</span>
            <span>Имя пользователя: {user.username}</span>
            <span>Почта: {user.email ? user.email : ''}</span>
        </div>
    )
}

const mapStateToProps = (state: TAppStore) => ({
    user: state.user
})

const connector = connect(mapStateToProps)
type TNavProps = ConnectedProps<typeof connector>

export default connector(Profile)
