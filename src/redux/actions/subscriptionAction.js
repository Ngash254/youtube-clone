import { 
    SUBSCRIPTION_VIDEOS_FAILED,
    SUBSCRIPTION_VIDEOS_REQUEST,
    SUBSCRIPTION_VIDEOS_SUCCESS,
} from "../actionTypes";
import request from "../../api";

export const get_subscription_videos = (channelIdX) => async dispatch => {
    try {
        dispatch({
            type: SUBSCRIPTION_VIDEOS_REQUEST
        })

        const {data} = await request("/subscriptions", {
            params: {
                part: "snippet, contentDetails",
                maxResults: 20,
                channelId: channelIdX       //supposed to be tech with tim channel 
            }
        })

        dispatch({
            type: SUBSCRIPTION_VIDEOS_SUCCESS,
            payload: data.items
        })
    }

    catch (error) {
        console.log(error.message)
        dispatch({
            type: SUBSCRIPTION_VIDEOS_FAILED,
            payload: error.message
        })
    }
}