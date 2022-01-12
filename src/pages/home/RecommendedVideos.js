import React, { useEffect } from "react";
import "./RecommendedVideos.css";
import VideoCard from "../../Components/home/VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos, getVideosByCategory } from "../../redux/actions/videosAction";
import InfiniteScroll from "react-infinite-scroll-component";


function RecommendedVideos() {

    const {videos, activeVideoCategory}  = useSelector(state => state.homeVideos);

    // dispatch the getpopularvideos actions
    const dispatch = useDispatch()

    useEffect(() => {
        // this action creator gets dispatched each time the dom renders
        dispatch(getPopularVideos())            
    }, [dispatch])

    const loadMoreVideos = () => {
        activeVideoCategory === "All" 
            ? dispatch(getPopularVideos())
            : dispatch(getVideosByCategory(activeVideoCategory))
    }


    return (
        <div className="recommendedVideos">
            {/*<div className={loading ? "overlay" : ""}>*/}
                <div className="videoCards">
                    <InfiniteScroll
                        dataLength={videos ? videos.length : 20}
                        next={loadMoreVideos}
                        hasMore={true}
                        loader={<h4 style={{padding: "20px"}}>Loading...</h4>}
                        scrollableTarget="home__videos"
                    >
                        {/*some youtube videos dont have an id or a video id and this causes the app to fail
                        so I filter the array so as to render only items with either an id or a videoId */}
                        {videos?.map((item) => (
                                <VideoCard
                                    video={item}
                                    key={item.id}
                                />
                        ))}
                    </InfiniteScroll>
                </div>
            {/*</div>*/}
        </div>
    );
}

export default RecommendedVideos;
