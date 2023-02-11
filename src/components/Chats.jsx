import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";

const Chats = () => {

    const [chats,setChats] = useState();

    const {currentUser} = useContext(AuthContext);

    return (
        <div className="chats">
            <div className="userChat">
               <img src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                <div className="userChatInfo">
                    <span>demo user</span> 
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default Chats;