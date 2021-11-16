import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { channelReducer } from "./reducers/channelReducer";
import { homeVideosReducer, selectedVideoReducer } from "./reducers/videosReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideosReducer,
    selectedVideo: selectedVideoReducer,
    channelDetails: channelReducer,
})

const store = createStore(
    rootReducer,
    {},  
    composeWithDevTools(applyMiddleware(thunk))
);



export default store;