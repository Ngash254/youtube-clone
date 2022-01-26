import React, { useEffect } from "react";
import "./Trending.css";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SportsIcon from "@material-ui/icons/Sports";
import TrendingVideoCard from "../../Components/explore/TrendingVideoCard";
import { getVideosByUserSearchInput } from "../../redux/actions/videosAction";
import { useDispatch, useSelector } from "react-redux";

function Trending() {

    const dispatch = useDispatch();

    //on first load, populate the store with videos about music
    useEffect(() => {
        dispatch(getVideosByUserSearchInput("Music"));
    }, []);

    const fetchMusicVideos = () => {
        dispatch(getVideosByUserSearchInput("Music"));
    }

    const fetchGamingVideos = () => {
        dispatch(getVideosByUserSearchInput("Gaming"))
    }

    const fetchSportsVideos = () => {
        dispatch(getVideosByUserSearchInput("Sports"))
    }

    const {videos: trendingVideos} = useSelector(state => state.searchResults);

    return (
        <div className="trending">
            
            <div className="trending__content__icons">
                <div className="t__icon__div" onClick={fetchMusicVideos}>
                    <LibraryMusicIcon className="t-icon music" />

                    <div className="icon__title">Music</div>
                </div>
                <div className="t__icon__div" onClick={fetchGamingVideos}>
                    <SportsEsportsIcon className="t-icon gaming" />

                    <div className="icon__title">Gaming</div>
                </div>
                <div className="t__icon__div" onClick={fetchSportsVideos}>
                    <SportsIcon className="t-icon sports" />

                    <div className="icon__title">Sports</div>
                </div>
            </div>

            <div className="trending__content__videos">
                <h3>Trending videos</h3>
                {trendingVideos?.map((item, idx) => (
                    <TrendingVideoCard
                            video={item}
                            key={idx}
                    />
                ))}
            </div>
            

        </div>
    );
}

export default Trending;
