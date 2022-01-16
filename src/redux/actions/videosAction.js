import { HOME_VIDEOS_FAILED, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, SELECTED_VIDEO_FAILED, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS, SIMILAR_VIDEOS_FAILED, SIMILAR_VIDEOS_REQUEST, SIMILAR_VIDEOS_SUCCESS } from "../actionTypes";
import request from "../../api";

export const getPopularVideos = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: HOME_VIDEOS_REQUEST
        })

        const { data }= await request("/videos", {
            params: {
                chart: "mostPopular",
                part: "snippet, contentDetails, statistics",
                regionCode: "GB",
                maxResults: 20,
                pageToken: getState().homeVideos.nextPageToken,
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
        dispatch({
            type: HOME_VIDEOS_FAILED,
            payload: error.message
        })
    }
}

// action creator for acquiring videos by their categories 

export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
    try {
        dispatch({
            type: HOME_VIDEOS_REQUEST
        })

        const { data }= await request("/search", {
            params: {
                part: "snippet",
                maxResults: 20,
                pageToken: getState().homeVideos.nextPageToken,
                q:keyword,
                type: "video"
            }
        })

        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: keyword
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


//action creator for the specific video selected by a user 

export const getVideoById = id => async dispatch => {
    try {
        dispatch({
            type: SELECTED_VIDEO_REQUEST
        })

        const { data } = await request("/videos", {
            params: {
                part: "snippet, statistics",
                id: id
            }
        })

        dispatch({
            type: SELECTED_VIDEO_SUCCESS,
            payload: data.items[0],
        })

    } catch (error) {
        dispatch({
            type: SELECTED_VIDEO_FAILED,
            payload: error.message
        })
    }
}

// similar videos action creator;
export const getSimilarVideos = id => async dispatch => {
    try {
        dispatch({
            type: SIMILAR_VIDEOS_REQUEST,
        })

        const { data } = await request("/search", {
            params: {
                part: "snippet",
                relatedToVideoId: id,
                type: "video",
                maxResults: 20,
            }
        })

        dispatch({
            type: SIMILAR_VIDEOS_SUCCESS,
            payload: data.items,
        })
    }
    catch (error) {
        console.log(error.message)
        dispatch({
            type: SIMILAR_VIDEOS_FAILED,
            payload: error.message,
        })
    }
}
