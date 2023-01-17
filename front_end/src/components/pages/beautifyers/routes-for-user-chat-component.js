import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import UserChatComponent from "./userchat/user-chat-component";
const RoutesForUserChatComponent=()=>{

    return(
        <Fragment>
            <UserChatComponent/>
            <Outlet/>
        </Fragment>
    );

};

export default RoutesForUserChatComponent;