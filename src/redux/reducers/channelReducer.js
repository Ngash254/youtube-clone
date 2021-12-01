import { CHANNEL_DETAILS_FAILED, CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, SET_SUBSCRIPTION_STATUS } from "../actionTypes";

const initialState = {
    loading: false,
    channel: null,
    subscriptionStatus: false
}

export const channelReducer = (state={initialState}, action) => {
    const { payload, type } = action;
    switch(type) {
        case CHANNEL_DETAILS_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case CHANNEL_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                channel: payload,
            }
        case SET_SUBSCRIPTION_STATUS:
            return {
                ...state,
                subscriptionStatus: payload,
            }        
        case CHANNEL_DETAILS_FAILED:
            return {
                ...state,
                loading: false,
                channel: null,
                error: payload
            }
        default: 
            return state
    }
}
