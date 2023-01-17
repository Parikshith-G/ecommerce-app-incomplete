import React, { Fragment } from "react";
import './userchat.css'
const UserChatComponent=()=>{

    return(
        <React.Fragment>

            <input type="checkbox" id="check"/>
            <label htmlFor="check"  className="chat-btn">
                <i class="bi bi-chat-dots comment"></i>
                <i class="bi bi-x-circle close"></i>
                <span className="position-absolute top-0 start-3 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
            </label>

            <div className="chat-wrapper">
                  <div className="chat-header">
                    <h6>Let's Chat - Online</h6>
                </div>
      
                <div className="chat-form">
                    <div className="chat-msg">
                        {
                            Array.from({length:20}).map((_,id)=>{
                                return(
                                <Fragment key={Math.random().toString()}>

                                    <p ><b>you wrote:</b>Beans is good beans is the best.</p>

                                    <p className="bg-primary p-3 ms-4 text-light rounded-pill"><b>Support wrote :</b> yeah beans is the best</p>
                                
                                </Fragment>
                                );
                            })
                        }
                       
                    </div>
                <textarea 
                    id="client-msg"
                    className="form-control"
                    placeholder="Text message here....">
                </textarea>
                <button className="btn btn-success btn-block">Submit</button>
                </div>
         </div>
        </React.Fragment>
    );
}

export default UserChatComponent;