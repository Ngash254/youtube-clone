import { CHANNEL_DETAILS_FAILED, CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS } from "../actionTypes"
import request from "../../api";

export const getChannelDetails = id => async dispatch => {
    try {
        dispatch({
            type: CHANNEL_DETAILS_REQUEST,
        })

        const { data } = await request("/channels", {
            params: {
                part: "statistics, snippet",
                id
            }
        })

        dispatch({
            type: CHANNEL_DETAILS_SUCCESS,
            payload: data.items[0]
        })


    } catch (error) {
        dispatch({
            type: CHANNEL_DETAILS_FAILED,
            payload: error.message
        })
    }
}
