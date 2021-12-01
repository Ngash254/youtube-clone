import { CHANNEL_DETAILS_FAILED, CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS } from "../actionTypes";

const initialState = {
    loading: false,
    channel: null
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
