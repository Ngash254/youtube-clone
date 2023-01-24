import React, { useState } from "react";
import "./History.css";
import DeleteIcon from "@material-ui/icons/Delete";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import HistoryVideoCard from "../../Components/history/HistoryVideoCard";
import { Link } from "react-router-dom";

function History() {
    // eslint-disable-next-line
    const [HistoryVideos, setHistoryVideos] = useState([
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5a0XR9omhMebvFPuFmPFIu4-IyzN60DTZA&usqp=CAU",
            title: "Lil Tjay hit-show drives many outta their houses on a public holiday.",
            views: "10M views",
            timestamp: "2 months ago",
            channelName: "hiphop world",
            description:
                "Most of the people havent seen what they missed yet. Follow the link below to get more comments.https://www.google.com/imgres?imgurl=https%3A%2F%2Fhiphopcanada.com%2Fwp-content%2Fuploads%2F2019%2F12%2Flil-tjay-1000w-1.jpg&imgrefurl=https%3A%2F%2Fwww.hiphopcanada.com%2Flil-tjay-true-2myself-interview%2F&tbnid=AE4W1PYVLNLNXM&vet=12ahUKEwiurrapn-vuAhUI_RoKHe64BlsQMygjegUIARDiAQ..i&docid=5oZiNePlXL866M&w=1000&h=600&q=lil%20tjay%20images&safe=active&ved=2ahUKEwiurrapn-vuAhUI_RoKHe64BlsQMygjegUIARDiAQ",
            id: 1,
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5a0XR9omhMebvFPuFmPFIu4-IyzN60DTZA&usqp=CAU",
            title: "Lil Tjay hit-show drives many outta their houses on a public holiday.",
            views: "10M views",
            timestamp: "2 months ago",
            channelName: "hiphop world",
            description:
                "Most of the people havent seen what they missed yet. Follow the link below to get more comments.https://www.google.com/imgres?imgurl=https%3A%2F%2Fhiphopcanada.com%2Fwp-content%2Fuploads%2F2019%2F12%2Flil-tjay-1000w-1.jpg&imgrefurl=https%3A%2F%2Fwww.hiphopcanada.com%2Flil-tjay-true-2myself-interview%2F&tbnid=AE4W1PYVLNLNXM&vet=12ahUKEwiurrapn-vuAhUI_RoKHe64BlsQMygjegUIARDiAQ..i&docid=5oZiNePlXL866M&w=1000&h=600&q=lil%20tjay%20images&safe=active&ved=2ahUKEwiurrapn-vuAhUI_RoKHe64BlsQMygjegUIARDiAQ",
            id: 2,
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5a0XR9omhMebvFPuFmPFIu4-IyzN60DTZA&usqp=CAU",
            title: "Lil Tjay hit-show drives many outta their houses on a public holiday.",
            views: "10M views",
            timestamp: "2 months ago",
            channelName: "hiphop world",
            description:
                "Most of the people havent seen what they missed yet. Follow the link below to get more comments.https://www.google.com/imgres?imgurl=https%3A%2F%2Fhiphopcanada.com%2Fwp-content%2Fuploads%2F2019%2F12%2Flil-tjay-1000w-1.jpg&imgrefurl=https%3A%2F%2Fwww.hiphopcanada.com%2Flil-tjay-true-2myself-interview%2F&tbnid=AE4W1PYVLNLNXM&vet=12ahUKEwiurrapn-vuAhUI_RoKHe64BlsQMygjegUIARDiAQ..i&docid=5oZiNePlXL866M&w=1000&h=600&q=lil%20tjay%20images&safe=active&ved=2ahUKEwiurrapn-vuAhUI_RoKHe64BlsQMygjegUIARDiAQ",
            id: 3,
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5a0XR9omhMebvFPuFmPFIu4-IyzN60DTZA&usqp=CAU",
            title: "Lil Tjay hit-show drives many outta their houses on a public holiday.",
            views: "10M views",
            timestamp: "2 months ago",
            channelName: "hiphop world",
            description:
                "Most of the people havent seen what they missed yet. Follow the link below to get more comments.https://www.google.com/imgres?imgurl=https%3A%2F%2Fhiphopcanada.com%2Fwp-content%2Fuploads%2F2019%2F12%2Flil-tjay-1000w-1.jpg&imgrefurl=https%3A%2F%2Fwww.hiphopcanada.com%2Flil-tjay-true-2myself-interview%2F&tbnid=AE4W1PYVLNLNXM&vet=12ahUKEwiurrapn-vuAhUI_RoKHe64BlsQMygjegUIARDiAQ..i&docid=5oZiNePlXL866M&w=1000&h=600&q=lil%20tjay%20images&safe=active&ved=2ahUKEwiurrapn-vuAhUI_RoKHe64BlsQMygjegUIARDiAQ",
            id: 4,
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5a0XR9omhMebvFPuFmPFIu4-IyzN60DTZA&usqp=CAU",
            title: "Lil Tjay hit-show drives many outta their houses on a public holiday.",
            views: "10M views",
            timestamp: "2 months ago",
            channelName: "hiphop world",
            description:
                "Most of the people havent seen what they missed yet. Follow the link below to get more comments.https://www.google.com/imgres?imgurl=https%3A%2F%2Fhiphopcanada.com%2Fwp-content%2Fuploads%2F2019%2F12%2Flil-tjay-1000w-1.jpg&imgrefurl=https%3A%2F%2Fwww.hiphopcanada.com%2Flil-tjay-true-2myself-interview%2F&tbnid=AE4W1PYVLNLNXM&vet=12ahUKEwiurrapn-vuAhUI_RoKHe64BlsQMygjegUIARDiAQ..i&docid=5oZiNePlXL866M&w=1000&h=600&q=lil%20tjay%20images&safe=active&ved=2ahUKEwiurrapn-vuAhUI_RoKHe64BlsQMygjegUIARDiAQ",
            id: 5,
        },
    ]);
    return (
        <div className="history">
            <div className="primary__history">
                <div className="video__history">
                    <div className="title">
                        <h3>Watch history</h3>
                    </div>
                    <div className="sub-title">
                        <h3>Yesterday</h3>
                    </div>
                    <div className="actual__videos">
                        {HistoryVideos.map((video) => (
                            <Link
                                to="./video"
                                style={{ textDecoration: "none" }}
                            >
                                <HistoryVideoCard
                                    img={video.img}
                                    title={video.title}
                                    views={video.views}
                                    timestamp={video.timestamp}
                                    channelName={video.channelName}
                                    description={video.description}
                                    key={video.id}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="video__history__two">
                    <div className="title">
                        <h3>Watch history</h3>
                    </div>
                    <div className="sub-title">
                        <h3>Yesterday</h3>
                    </div>
                    <div className="actual__videos">
                        {HistoryVideos.map((video) => (
                            <Link
                                to="./video"
                                style={{ textDecoration: "none" }}
                            >
                                <HistoryVideoCard
                                    img={video.img}
                                    title={video.title}
                                    views={video.views}
                                    timestamp={video.timestamp}
                                    channelName={video.channelName}
                                    description={video.description}
                                    key={video.id}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="actions">
                    <div className="inner__actions__div">
                        <div className="search__history">
                            <SearchSharpIcon className="search__icon2" />
                            <input
                                type="text"
                                placeholder="Search watch history"
                            />
                        </div>
                        <h2 className="history__type__heading">History type</h2>
                        <div className="history__type">
                            <form action="">
                                <div className="watch__history__div">
                                    <label htmlFor="watch-history">
                                        Watch history
                                    </label>
                                    <input
                                        type="radio"
                                        id="history__type__one"
                                        name="history-select"
                                        value="watch-history"
                                        checked
                                    />
                                </div>

                                <br />
                                <div className="community__div">
                                    <label htmlFor="community">Community</label>
                                    <input
                                        type="radio"
                                        id="history__type__two"
                                        name="history-select"
                                        value="community"
                                    />
                                </div>
                            </form>
                        </div>
                        {/*<div className="history__type__one">
                            <h2 className="watch__history">Watch history</h2>
                        </div>
                        <div className="history__type__two">
                            <h2 className="community">Community</h2>
                        </div>*/}
                        <div className="action__clear">
                            <DeleteIcon className="delete__icon" />
                            <h2>CLEAR ALL WATCH HISTORY</h2>
                        </div>
                        <div className="action__pause">
                            <PauseCircleOutlineIcon className="pause__icon" />
                            <h2>PAUSE WATCH HISTORY</h2>
                        </div>
                        <div className="action__manage">
                            <SettingsIcon className="settings__icon" />
                            <h2>MANAGE ALL HISTORY</h2>
                        </div>
                        <div className="other__history__actions">
                            <h3>Watch and search history</h3>
                            <h3>Comments</h3>
                            <h3>Live chat</h3>
                        </div>
                    </div>
                </div>
                <div className="actions__two">
                    <div className="inner__actions__div">
                        <div className="search__history">
                            <SearchSharpIcon className="search__icon2" />
                            <input
                                type="text"
                                placeholder="Search watch history"
                            />
                        </div>
                        <h2 className="history__type__heading">History type</h2>
                        <div className="history__type">
                            <form action="">
                                <div className="watch__history__div">
                                    <label htmlFor="watch-history">
                                        Watch history
                                    </label>
                                    <input
                                        type="radio"
                                        id="history__type__one"
                                        name="history-select"
                                        value="watch-history"
                                        checked
                                    />
                                </div>

                                <br />
                                <div className="community__div">
                                    <label htmlFor="community">Community</label>
                                    <input
                                        type="radio"
                                        id="history__type__two"
                                        name="history-select"
                                        value="community"
                                    />
                                </div>
                            </form>
                        </div>
                        {/*<div className="history__type__one">
                            <h2 className="watch__history">Watch history</h2>
                        </div>
                        <div className="history__type__two">
                            <h2 className="community">Community</h2>
                        </div>*/}
                        <div className="action__clear">
                            <DeleteIcon className="delete__icon" />
                            <h2>CLEAR ALL WATCH HISTORY</h2>
                        </div>
                        <div className="action__pause">
                            <PauseCircleOutlineIcon className="pause__icon" />
                            <h2>PAUSE WATCH HISTORY</h2>
                        </div>
                        <div className="action__manage">
                            <SettingsIcon className="settings__icon" />
                            <h2>MANAGE ALL HISTORY</h2>
                        </div>
                        <div className="other__history__actions">
                            <h3>Watch and search history</h3>
                            <h3>Comments</h3>
                            <h3>Live chat</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;
