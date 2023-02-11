import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {

    const [error,setError] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;
        
        
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/");
            
        }
        catch(error){
            console.log(error);
            setError(true);
        }

    }

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Lama Chat</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    
                    <button>Login</button>

                </form>
                <p>Don't have an account? <Link to="/register">Register</Link> </p>
                {error && <span>Something went wrong</span>}
                
            </div>
        </div>
    )
}

export default Login;