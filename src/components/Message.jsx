import React from "react";

const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img
                    src = "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img
                    src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt = ""
    />
            </div>
        </div>
    )
}

export default Message;