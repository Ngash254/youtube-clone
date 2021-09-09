import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginFn } from '../../redux/actions/authAction';
import "./Login.css";

const Login = () => {
    const dispatch = useDispatch();
    

    function handleLoginFn() {
        dispatch(loginFn());
    }

    /*
        I am commenting out the following code because for some reason
        the history hook wont work. will get back to this some time later 
    
        const accessToken = useSelector(state => state.auth.accessToken);

        const history = useHistory();

        useEffect(() => {
            if(accessToken) {
                console.log(accessToken);
                history.push("/");
            }
        }, [accessToken, history]);
    */


    
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
                
                <button 
                    className="login__button"
                    onClick={handleLoginFn}
                >
                    Login with google
                </button>
                </div>
                
                
            </div>
        </div>
    )
}

export default Login;
