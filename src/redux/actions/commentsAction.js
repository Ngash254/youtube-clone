import request from "../../api"
import { COMMENT_REPLIES_FAILED, COMMENT_REPLIES_REQUEST, COMMENT_REPLIES_SUCCESS, COMMENT_THREAD_FAILED, COMMENT_THREAD_REQUEST, COMMENT_THREAD_SUCCESS, INSERT_COMMENT_FAILED, INSERT_COMMENT_SUCCESS } from "../actionTypes"

export const getCommentThreads = id => async (dispatch, getState) => {
    try {
        dispatch({
            type: COMMENT_THREAD_REQUEST,
        })

        const { data } = await request("/commentThreads", {
            params: {
                part: "snippet",
                videoId: id,
                textFormat: "plainText",
                pageToken: getState().comments.nextPageToken,
                maxResults: 12
            }
        })

        dispatch({
            type: COMMENT_THREAD_SUCCESS,
            payload: {
                comments: data.items,
                nextPageToken: data.nextPageToken
            }
        })

    } catch (error) {
        dispatch({
            type: COMMENT_THREAD_FAILED,
            payload: error.message
        })
    }
}

// action creator for replies to comments

export const getCommentReplies = id => async (dispatch) => {
    try {
        dispatch({
            type: COMMENT_REPLIES_REQUEST,
        })

        const { data } = await request("/comments", {
            params: {
                part: "snippet",
                parentId: id,
                textFormat: "plainText"
            }
        })

        dispatch({
            type: COMMENT_REPLIES_SUCCESS,
            payload: data.items,
        })
        console.log(data)

    } catch (error) {
        dispatch({
            type: COMMENT_REPLIES_FAILED,
            payload: error.message
        })
    }
}

export const insertComment = (id, text) => async (dispatch, getState) => {
    try {
        const userData = {
            snippet : {
                videoId: id,
                topLevelComment: {
                    snippet: {
                        textOriginal: text
                    }
                }
            }
        }

        await request.post("/commentThreads", userData, {
            params: {
                part: "snippet",
            },
            headers: {
                Authorization: `Bearer ${getState().auth.accessToken}`
            }
        })

        dispatch({
            type: INSERT_COMMENT_SUCCESS,
        })

        //after the comment has been added, refresh the commentThread in a setTimeout
        setTimeout(() => dispatch(getCommentThreads(id)), 3000)


    } catch (error) {
        console.log(error)
        dispatch({
            type: INSERT_COMMENT_FAILED,
            payload: error.message
        })
    }
}
