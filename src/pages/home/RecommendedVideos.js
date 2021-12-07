import React, { useEffect } from "react";
import "./RecommendedVideos.css";
import VideoCard from "../../Components/home/VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../../redux/actions/videosAction";

function RecommendedVideos() {
    //dispatch the getpopularvideos actions
    const dispatch = useDispatch()

    const {videos, loading}  = useSelector(state => state.homeVideos);
    console.log(videos)

    useEffect(() => {
        dispatch(getPopularVideos())            // this action creator gets dispatched each time the dom renders
    }, [dispatch])

    return (
        <div className="recommendedVideos">
            <div className={loading ? "overlay" : ""}>
                <div className="videoCards">
                    {/*some youtube videos dont have an id or a video id and this causes the app to fail
                    so I filter the array so as to render only items with either an id or a videoId */}
                        {videos?.filter(item => typeof (item.id) === "string").map((item) => (
                            
                                
                                <VideoCard
                                    video={item}
                                    key={item.id}
                                />
                            
                        ))}
                    
                </div>
            </div>
        </div>
    );
}

export default RecommendedVideos;
