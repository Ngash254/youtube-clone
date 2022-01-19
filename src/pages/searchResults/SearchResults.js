import React, {useState, useEffect } from "react";
import "./SearchResults.css";
import TuneIcon from "@material-ui/icons/Tune";
import SearchResultsComponent from "../../Components/searchResults/SearchResultsComponent";
import {useDispatch} from "react-redux";
import {getVideosByUserSearchInput} from "../../redux/actions/videosAction";
import { useSelector } from "react-redux";

function SearchResults() {
    // const [SearchResultsDict, setSearchResultsDict] = useState([
    //     {
    //         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-TizEZ6i6WpxRZ68UJH0ygaPGyom_zjUdA&usqp=CAU",
    //         title: "The Beauty of writing javascript code.",
    //         views: "10M views",
    //         timestamp: "5 months ago",
    //         avatarImage:
    //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19QDnx_YmNeezO7-VTLMFH7i0VZXyQop9hg&usqp=CAU",
    //         channelName: "Javascript Community",
    //         description:
    //             "Javascript is not only the most popular language, but also one of the most eye-pleasing to write.",
    //         id: 1,
    //     },
    //     {
    //         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwS_BAzcd80L9kdSXfqhwe2KqDkZ09BKdnew&usqp=CAU",
    //         title: "Best code editor for writing JS.",
    //         views: "1k views",
    //         timestamp: "2 hours ago",
    //         avatarImage:
    //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-bHMdW7OobjbniVVTaeSOqTDAS13th4ZS3A&usqp=CAU",
    //         channelName: "Maniacs from JS",
    //         description:
    //             "As the most popular language out there, it thus has a super large community and henceforth one of the best code editors has been dedicated to entirely facilitate its writing.",
    //         id: 2,
    //     },
    //     {
    //         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOyy0sUSe9PMt9qAyK08eru2h32jpOncuAKQ&usqp=CAU",
    //         title: "Is Javascript the easiest language for beginners to learn?",
    //         views: "200 views",
    //         timestamp: "30 minutes ago",
    //         avatarImage:
    //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-bHMdW7OobjbniVVTaeSOqTDAS13th4ZS3A&usqp=CAU",
    //         channelName: "ScrapperBoy",
    //         description:
    //             "New research done to prove whether javascript is the best language to learn for beginners with no college degree or even any computer background.",
    //         id: 3,
    //     },
    //     {
    //         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9_T5fxVzfDHj3o3SDqCHdJqIn7-i_4rxRQ&usqp=CAU",
    //         title: "Learning Javascript in the easiest and fastest way possible.",
    //         views: "100k views",
    //         timestamp: "2 weeks ago",
    //         avatarImage:
    //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtf8bKnd_zZlhw7svx4u9h0IY_XBKZmPHS4Q&usqp=CAU",
    //         channelName: "The Johnsons'",
    //         description:
    //             "A few of the ways to learn javascript in just a few weeks. Move from zero to hero in 2months!",
    //         id: 4,
    //     },
    //     {
    //         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmP6626lo9OIUhH-ITLi7CmeLqz3WZx1EIyQ&usqp=CAU",
    //         title: "Why ReactJs is a must know framework.",
    //         views: "2M views",
    //         timestamp: "2 months ago",
    //         avatarImage:
    //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjayicMD_JETHWdE10wwOpzcRzIDxO84ql4w&usqp=CAU",
    //         channelName: "ThErEaCtWoRlD",
    //         description:
    //             "React is one of the most markettable frameworks out there. Most upcoming programmers and startups are adopting it in their systems. Learn why that is.",
    //         id: 5,
    //     },
    //     {
    //         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAekfdl4RzE3aoxkFSI5K9Jsf8Fn5KHOCDA&usqp=CAU",
    //         title: "Best channels and e-books to improve on your javascript knowledge.",
    //         views: "170k views",
    //         timestamp: "2 hours ago",
    //         avatarImage:
    //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-bHMdW7OobjbniVVTaeSOqTDAS13th4ZS3A&usqp=CAU",
    //         channelName: "CleverProgrammer",
    //         description:
    //             "Suggestions of the best channels to gain credible skills.",
    //         id: 6,
    //     },
    // ]);

    const dispatch = useDispatch()

    //get the array of videos from the store;
    const {videos, loading} = useSelector(state => state.searchResults);

    useEffect(() => {
        dispatch(getVideosByUserSearchInput("hello"))
    }, [dispatch]);

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
