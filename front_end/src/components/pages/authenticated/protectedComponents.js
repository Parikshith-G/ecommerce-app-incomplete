import { Outlet,Navigate } from "react-router-dom";
import UserChatComponent from "../beautifyers/userchat/user-chat-component";
import { Fragment } from "react";
const ProtectedComponents=(admin)=>{

    
    if(admin){
        let adminauth=true;
        if(adminauth===true){
            return adminauth ? <Outlet/> : <Navigate to='/login'></Navigate>
        }
    }
    else{
        let userauth=true;
        if(userauth===true){
            return userauth ? 
                (
                    <Fragment>
                        <UserChatComponent/>
                        <Outlet/>
                    </Fragment>
                )
                :
                (
                    <Navigate 
                    to ='/login'/>
                )
        }

    }


    


}

export default ProtectedComponents;