import { COMMENT_REPLIES_FAILED, COMMENT_REPLIES_REQUEST, COMMENT_REPLIES_SUCCESS, COMMENT_THREAD_FAILED, COMMENT_THREAD_REQUEST, COMMENT_THREAD_SUCCESS } from "../actionTypes";

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
                commentsArray: 
                    state.commentsArray
                        ? [...state.commentsArray, ...payload]
                        : payload
                ,
            }  
        case COMMENT_THREAD_FAILED:
            return {
                ...state,
                loading: false,
                error: payload,
                commentsArray: null
            }
        default: 
            return state
    }
}

export const commentRepliesReducer = (
    state={
        loading: false,
        replies: []
    },
    action
) => {
    const {type, payload} = action;

    switch(type) {
        case COMMENT_REPLIES_REQUEST: 
            return {
                ...state,
                loading: true,
            };

        case COMMENT_REPLIES_SUCCESS:
            return {
                ...state,
                loading: false,
                replies: payload.items,
            }

        case COMMENT_REPLIES_FAILED:
            return {
                ...state,
                loading: false,
                replies: null
            }
        default: 
            return state;
    }
}

