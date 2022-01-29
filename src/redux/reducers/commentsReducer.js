import { COMMENT_REPLIES_FAILED, COMMENT_REPLIES_REQUEST, COMMENT_REPLIES_SUCCESS, COMMENT_THREAD_FAILED, COMMENT_THREAD_REQUEST, COMMENT_THREAD_SUCCESS } from "../actionTypes";

const initialState = {
    loading: false,
    commentsArray: [],
    nextPageToken: "",
    videoId: "state-videoId"
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
                /*
                    first check the array length.
                    If it is zero, just insert the payload.videos
                    else check if the comments are related to the specific video being played
                    at the moment. if not replace the whole threads array with the payload ones.
                */
                    state.commentsArray
                        ? state.videoId === payload.videoId
                            ? [...state.commentsArray, ...payload.comments]
                            : payload.comments
                        : payload.comments
                ,
                nextPageToken: payload.nextPageToken
            }  
        case COMMENT_THREAD_FAILED:
            return {
                ...state,
                loading: false,
                error: payload,
                commentsArray: []
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

