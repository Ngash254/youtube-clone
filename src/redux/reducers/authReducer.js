import { 
    LOAD_PROFILE, 
    LOGIN_FAILED, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS 
} from "../actionTypes";


const initialState = {
    accessToken: sessionStorage.getItem("yt-accessToken") ? sessionStorage.getItem("yt-accessToken") : null ,
    userProfile: sessionStorage.getItem("yt-userData") ? JSON.parse(sessionStorage.getItem("yt-userData")) : null ,
    loading: false,
    error: null
}

//reducer function takes in an initial state and action args.
export const authReducer = (state = {initialState}, action) => {

    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                accessToken: action.payload,
                loading: false
            }
        case LOAD_PROFILE:
            return {
                ...state,
                userProfile: action.payload,
            }
        case LOGIN_FAILED: 
            return {
                ...state,
                accessToken: null,
                userProfile: null,
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}