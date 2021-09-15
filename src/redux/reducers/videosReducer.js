import { HOME_VIDEOS_FAILED, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../actionTypes";

const prevState = {
    videos: [],
    nextPageToken: "",
    loading: false
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
                nextPageToken: payload.nextPageToken
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