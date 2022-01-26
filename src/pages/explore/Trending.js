import React, { useEffect } from "react";
import "./Trending.css";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SportsIcon from "@material-ui/icons/Sports";
import TrendingVideoCard from "../../Components/explore/TrendingVideoCard";
import { getVideosByUserSearchInput } from "../../redux/actions/videosAction";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

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

    const {videos: trendingVideos, keyword: value} = useSelector(state => state.searchResults);

    const fetchMoreVideos = () => {
        dispatch(getVideosByUserSearchInput(value ? value : "Music"))
    }


    return (
        <div className="trending" id="explore-page">
            
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
                <InfiniteScroll
                    dataLength={trendingVideos ? trendingVideos.length : 8}
                    next={fetchMoreVideos}
                    hasMore={true}
                    loader={<h4 style={{display: "block"}}>Fetching videos...</h4>}
                    style={{display: "flex", justifyContent: "start"}}
                    scrollableTarget="explore-page"
                >
                    {trendingVideos?.map((item, idx) => (
                        <TrendingVideoCard
                                video={item}
                                key={idx}
                        />
                    ))}
                </InfiniteScroll>
            </div>
            

        </div>
    );
}

export default Trending;
