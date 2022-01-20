import React, {useState, useEffect} from "react";
import "./SearchResults.css";
import TuneIcon from "@material-ui/icons/Tune";
import SearchResultsComponent from "../../Components/searchResults/SearchResultsComponent";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from 'react-infinite-scroll-component';
import { getVideosByUserSearchInput } from "../../redux/actions/videosAction";

function SearchResults() {
    const [userInput, setUserInput] = useState("");
    const dispatch = useDispatch();

    //get the array of videos from the store;
    const {videos} = useSelector(state => state.searchResults);

    //grab the search input as was
    useEffect(() => {
        const userInputElement = document.getElementById("user-input");
        setUserInput(
            userInputElement 
                ? userInputElement.value.length === 0 ? "" 
                : userInputElement.value 
            : "");
    }, [userInput]);

    const fetchMoreSearchResults = () => {
        //dispatch the getsearch results action creator
        dispatch(getVideosByUserSearchInput(userInput));
    }

    return (
        <div className="searchResults" id="search-results-page">
            <div className="searchResults__top">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>

            <div className="searchResults__bottom">
                <InfiniteScroll
                    dataLength={videos ? videos.length : 12}
                    next={fetchMoreSearchResults}
                    hasMore={true}
                    loader={<h4>Fetching videos...</h4>}
                    scrollableTarget="search-results-page"
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    {videos?.map((result) => (
                        
                        <SearchResultsComponent
                            video={result}
                            key={result.id}
                        />
                        
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default SearchResults;
