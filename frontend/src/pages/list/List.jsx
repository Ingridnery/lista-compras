import styles from "./style.module.scss";
import UserIcon from "../../components/user-icon/UserIcon";
import InviteIcon from "../../components/invite-icon/InviteIcon";

export default function List(){

    return(
        <div className="container">
            <UserIcon username="Adilson"/>
            <UserIcon username="Guilherme"/>
            <UserIcon username="Elisa"/>
            <InviteIcon/>
        </div>
    )
}