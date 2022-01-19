import React, { useEffect } from "react";
import "./SearchResults.css";
import TuneIcon from "@material-ui/icons/Tune";
import SearchResultsComponent from "../../Components/searchResults/SearchResultsComponent";
import {useDispatch} from "react-redux";
import {getVideosByUserSearchInput} from "../../redux/actions/videosAction";
import { useSelector } from "react-redux";

function SearchResults() {

    const dispatch = useDispatch()

    //get the array of videos from the store;
    const {videos, loading} = useSelector(state => state.searchResults);

    return (
        <div className="searchResults">
            <div className="searchResults__top">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>

            <div className="searchResults__bottom">
                {!loading && videos?.map((result) => (
                    
                    <SearchResultsComponent
                        video={result}
                        key={result.id}
                    />
                    
                ))}
            </div>
        </div>
    );
}

export default SearchResults;
