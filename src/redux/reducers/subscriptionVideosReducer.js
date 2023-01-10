import { 
    SUBSCRIPTION_VIDEOS_FAILED,
    SUBSCRIPTION_VIDEOS_REQUEST, SUBSCRIPTION_VIDEOS_SUCCESS
} from "../actionTypes";

const initialState = {
    loading: false,
    videoItems: [],
    error: ""
}

export const subscriptionVideosReducer = (state={initialState}, action) => {
    const {type, payload} = action

    switch (type) {
        case SUBSCRIPTION_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SUBSCRIPTION_VIDEOS_SUCCESS:
            return {
                ...state,
                loading: false,
                videoItems: payload
            }
        case SUBSCRIPTION_VIDEOS_FAILED:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}