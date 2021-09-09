
import firebase from "firebase/compat/app";
import auth from "../../firebase";
import { 
    LOAD_PROFILE, 
    LOGIN_FAILED, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS 
} from "../actionTypes";


export const loginFn = () => async dispatch => {
    try {
        dispatch({
            type: LOGIN_REQUEST
        })
        
        const provider = new firebase.auth.GoogleAuthProvider();
        const res = await auth.signInWithPopup(provider);

        const accessToken = res.credential.accessToken;
        const userData = {
            name: res.additionalUserInfo.profile.name,
            photoUrl: res.additionalUserInfo.profile.picture
        }

        sessionStorage.setItem("yt-accessToken", accessToken);
        sessionStorage.setItem("yt-userData", JSON.stringify(userData));

        dispatch({
            type: LOGIN_SUCCESS,
            payload: accessToken
        })

        dispatch({
            type: LOAD_PROFILE,
            payload: userData
        })
    }
    catch (error) {
        console.log(error.message);
        dispatch({
            type: LOGIN_FAILED,
            payload: error.message
        })
    }
};

