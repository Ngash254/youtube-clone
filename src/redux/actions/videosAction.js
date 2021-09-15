import { HOME_VIDEOS_FAILED, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../actionTypes";
import request from "../../api";

export const getPopularVideos = () => async dispatch => {
    try {
        dispatch({
            type: HOME_VIDEOS_REQUEST
        })

        const { data }= await request("/videos", {
            params: {
                chart: "mostPopular",
                part: "snippet, contentDetails, statistics",
                regionCode: "US",
                maxResults: 20,
                pageToken: ""
            }
        })

        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken
            }
        })

    }
    catch(error){
        console.log(error)
        dispatch({
            type: HOME_VIDEOS_FAILED,
            payload: error.message
        })
    }
}