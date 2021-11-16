import { HOME_VIDEOS_FAILED, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, SELECTED_VIDEO_FAILED, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS } from "../actionTypes";

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
    loading: true,
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

