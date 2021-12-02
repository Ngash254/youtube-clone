import request from "../../api"
import { COMMENT_THREAD_FAILED, COMMENT_THREAD_REQUEST, COMMENT_THREAD_SUCCESS } from "../actionTypes"

export const getCommentThreads = id => async (dispatch) => {
    try {
        dispatch({
            type: COMMENT_THREAD_REQUEST,
        })

        const { data } = await request("/commentThreads", {
            params: {
                part: "snippet",
                videoId: id
            }
        })

        dispatch({
            type: COMMENT_THREAD_SUCCESS,
            payload: data.items,
        })


    } catch (error) {
        dispatch({
            type: COMMENT_THREAD_FAILED,
            payload: error.message
        })
    }
}