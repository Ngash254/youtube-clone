import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { channelReducer } from "./reducers/channelReducer";
import { commentsReducer } from "./reducers/commentsReducer";
import { homeVideosReducer, selectedVideoReducer } from "./reducers/videosReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideosReducer,
    selectedVideo: selectedVideoReducer,
    channelDetails: channelReducer,
    comments: commentsReducer,
})

const store = createStore(
    rootReducer,
    {},  
    composeWithDevTools(applyMiddleware(thunk))
);



export default store;