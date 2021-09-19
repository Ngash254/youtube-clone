import React, { useEffect, useState } from "react";
import "./RecommendedVideos.css";
import VideoCard from "../../Components/home/VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../../redux/actions/videosAction";

function RecommendedVideos() {
    const [videosArr, setVideosArr] = useState([]);
    //dispatch the getpopularvideos actions
    const dispatch = useDispatch()

    const {videos}  = useSelector(state => state.homeVideos);

    useEffect(() => {
        dispatch(getPopularVideos())            // this action creator gets dispatched each time the dom renders
    }, [dispatch])

    useEffect(() => {
        setVideosArr(videos);
    }, [videos]);

    return (
        <div className="recommendedVideos">
            <div className="videoCards">
                
                {videosArr.map((item) => (
                    <Link to="/video" style={{ textDecoration: "none" }}>
                    
                        <VideoCard
                            video={item}
                            key={item.id}
                        />
                    
                        
                    </Link>
                ))}
                
            </div>
        </div>
    );
}

export default RecommendedVideos;
