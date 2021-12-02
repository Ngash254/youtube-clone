import React, { useEffect, useState } from "react";
import "./RecommendedVideos.css";
import VideoCard from "../../Components/home/VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../../redux/actions/videosAction";

function RecommendedVideos() {
    //dispatch the getpopularvideos actions
    const dispatch = useDispatch()

    const {videos, loading}  = useSelector(state => state.homeVideos);

    useEffect(() => {
        dispatch(getPopularVideos())            // this action creator gets dispatched each time the dom renders
    }, [dispatch])

    return (
        <div className="recommendedVideos">
            <div className={loading ? "overlay" : ""}>
                <div className="videoCards">
                    
                        {videos?.map((item) => (
                            
                            
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
