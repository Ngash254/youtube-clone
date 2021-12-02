import { COMMENT_THREAD_FAILED, COMMENT_THREAD_REQUEST, COMMENT_THREAD_SUCCESS } from "../actionTypes";

const initialState = {
    loading: false,
    commentsArray: null,
}

export const commentsReducer = (state={initialState}, action) => {
    const { payload, type } = action;

    switch(type) {
        case COMMENT_THREAD_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case COMMENT_THREAD_SUCCESS:
            return {
                ...state,
                loading: false,
                commentsArray: payload,
            }  
        case COMMENT_THREAD_FAILED:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default: 
            return state
    }
}
