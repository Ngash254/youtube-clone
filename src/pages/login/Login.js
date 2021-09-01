import React from 'react';
import "./Login.css";

const Login = () => {
    return (
        <div className="Login">
            <div className="login__main">
                <div className="img__div">
                    <img className="login__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3GrZtppm70a8zwq4O5ZuDGR92pWNcVjP7hA&usqp=CAU" alt="yt-logo"></img>
                </div>
                
                
                <div className="p__divv">
                <p className="login__p">Youtube clone built using youtube API</p>
                
                </div>

                <div>
                
                <button className="login__button">Login with google</button>
                </div>
                
                
            </div>
        </div>
    )
}

export default Login;
