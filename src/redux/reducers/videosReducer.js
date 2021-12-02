import { 
    HOME_VIDEOS_FAILED, 
    HOME_VIDEOS_REQUEST, 
    HOME_VIDEOS_SUCCESS, 
    SELECTED_VIDEO_FAILED, 
    SELECTED_VIDEO_REQUEST, 
    SELECTED_VIDEO_SUCCESS, 
    SIMILAR_VIDEOS_REQUEST, 
    SIMILAR_VIDEOS_SUCCESS, 
    SIMILAR_VIDEOS_FAILED } from "../actionTypes";

const prevState = {
    videos: [],
    nextPageToken: "",
    loading: false,
    activeVideoCategory: "All"
}

export const homeVideosReducer = (state={prevState}, action) => {
    const {type, payload} = action;

    switch(type) {
        case HOME_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case HOME_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: payload.videos,
                loading: false,
                nextPageToken: payload.nextPageToken,
                activeVideoCategory: payload.category
            }
            case HOME_VIDEOS_FAILED:
                return {
                    ...state,
                    loading: false,
                    error: payload
                }
        default: 
            return state;
    }
}

// reducer for a selected video
export const selectedVideoReducer = (state={
    loading: false,
    video: null
}, action) => {
    const {payload, type} = action;

    switch(type) {
        case SELECTED_VIDEO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SELECTED_VIDEO_SUCCESS:
            return {
                ...state,
                loading: false,
                video: payload
            }

        case SELECTED_VIDEO_FAILED:
            return {
                ...state,
                loading: false,
                video: null,
                error: payload.message
            }
        default:
            return state
    }
}

// similar videos reducer
export const similarVideosReducer = (state={
        loading: false,
        videos: [],
    }, action) => {
        const {payload, type} = action;

    switch(type) {
        case SIMILAR_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SIMILAR_VIDEOS_SUCCESS:
            return {
                ...state,
                loading: false,
                videos: payload
            }

        case SIMILAR_VIDEOS_FAILED:
            return {
                ...state,
                loading: false,
                error: payload.message
            }
        default:
            return state
    }
}
