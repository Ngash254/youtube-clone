import React, { useState } from "react";
import "./Trending.css";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SportsIcon from "@material-ui/icons/Sports";
import { Link } from "react-router-dom";
import TrendingVideoCard from "./TrendingVideoCard";

function Trending() {
    const [trendingVCards, setTrendingVCard] = useState([
        {
            img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5a0XR9omhMebvFPuFmPFIu4-IyzN60DTZA&usqp=CAU",
            title:
                "Lil Tjay hit-show drives many outta their houses on a public holiday.",
            views: "10M views",
            timestamp: "2 months ago",
            channelName: "hiphop world",
            description:
                "Most of the people havent seen what they missed yet. Follow the link below to get more comments.https://www.google.com/imgres?imgurl=https%3A%2F%2Fhiphopcanada.com%2Fwp-content%2Fuploads%2F2019%2F12%2Flil-tjay-1000w-1.jpg&imgrefurl=https%3A%2F%2Fwww.hiphopcanada.com%2Flil-tjay-true-2myself-interview%2F&tbnid=AE4W1PYVLNLNXM&vet=12ahUKEwiurrapn-vuAhUI_RoKHe64BlsQMygjegUIARDiAQ..i&docid=5oZiNePlXL866M&w=1000&h=600&q=lil%20tjay%20images&safe=active&ved=2ahUKEwiurrapn-vuAhUI_RoKHe64BlsQMygjegUIARDiAQ",
            id: 1,
        },
        {
            img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUC4mpKV3bZz7RBpO8zzdI9kkBlhyoQKyk8g&usqp=CAU",
            title:
                "Manchester City is having one of the best runs in their history.",
            views: "22K views",
            timestamp: "2 days ago",
            channelName: "ThePLmaniac",
            description:
                "What city has become under pep has not been recorded in their books before. Follow the link below to get more comments.https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.guim.co.uk%2Fimg%2Fmedia%2F19baa4c7500bdd490b6cd5d22f0de591b731cb10%2F0_402_4015_2409%2Fmaster%2F4015.jpg%3Fwidth%3D1200%26height%3D1200%26quality%3D85%26auto%3Dformat%26fit%3Dcrop%26s%3D1c05f8a72ef39e22521a86f975a15bfb&imgrefurl=https%3A%2F%2Fwww.theguardian.com%2Ffootball%2F2021%2Ffeb%2F13%2Fmanchester-city-tottenham-premier-league-match-report&tbnid=l-MOy5Em9gX_CM&vet=12ahUKEwj4o660s-vuAhUEdBoKHYzPB7kQMygAegUIARDeAQ..i&docid=czoot31Np66AbM&w=1200&h=1200&q=manchester%20city&safe=active&ved=2ahUKEwj4o660s-vuAhUEdBoKHYzPB7kQMygAegUIARDeAQ",
            id: 2,
        },
        {
            img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzps7a6V2rWp8Z7jpf-TuNDXuRFCh6KcST4g&usqp=CAU",
            title:
                "Lil Nas X responds to haters trolling him due to recent boobie posts.",
            views: "1M views",
            timestamp: "1 week ago",
            channelName: "@Rumour center",
            description:
                "There was some crazy ass incident with on of the famous lils in hiphop. Follow the link below to get more comments.🖐️https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.okayplayer.com%2Fwp-content%2Fuploads%2F2020%2F02%2Flil-nas-x-is-a-zombie-in-new-rodeo-video-featuring-nas-1.jpg&imgrefurl=https%3A%2F%2Fwww.okayplayer.com%2Fmusic%2Flil-nas-x-rodeo-video-featuring-nas.html&tbnid=K8yEIc2pATRicM&vet=10CBcQMyhvahcKEwiQ7JyOj-vuAhUAAAAAHQAAAAAQAg..i&docid=8TBz-vQR1CSj_M&w=1924&h=1142&q=lil%20nas%20x%20images&safe=active&ved=0CBcQMyhvahcKEwiQ7JyOj-vuAhUAAAAAHQAAAAAQAg",
            id: 3,
        },
        {
            img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUC4mpKV3bZz7RBpO8zzdI9kkBlhyoQKyk8g&usqp=CAU",
            title:
                "Manchester City is having one of the best runs in their history.",
            views: "22K views",
            timestamp: "2 days ago",
            channelName: "ThePLmaniac",
            description:
                "What city has become under pep has not been recorded in their books before. Follow the link below to get more comments.https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.guim.co.uk%2Fimg%2Fmedia%2F19baa4c7500bdd490b6cd5d22f0de591b731cb10%2F0_402_4015_2409%2Fmaster%2F4015.jpg%3Fwidth%3D1200%26height%3D1200%26quality%3D85%26auto%3Dformat%26fit%3Dcrop%26s%3D1c05f8a72ef39e22521a86f975a15bfb&imgrefurl=https%3A%2F%2Fwww.theguardian.com%2Ffootball%2F2021%2Ffeb%2F13%2Fmanchester-city-tottenham-premier-league-match-report&tbnid=l-MOy5Em9gX_CM&vet=12ahUKEwj4o660s-vuAhUEdBoKHYzPB7kQMygAegUIARDeAQ..i&docid=czoot31Np66AbM&w=1200&h=1200&q=manchester%20city&safe=active&ved=2ahUKEwj4o660s-vuAhUEdBoKHYzPB7kQMygAegUIARDeAQ",
            id: 4,
        },
        {
            img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lgQEe-Gq-DNTnrpzN7AGpEWRC2_AQfwaRA&usqp=CAU",
            title: "Nikki minaj after revealing her baby's gender.",
            views: "12M views",
            timestamp: "6 months ago",
            channelName: "Black entertainment Telly",
            description:
                "Follow the link below to get more comments.https://www.google.com/imgres?imgurl=https%3A%2F%2Fhiphopcanada.com%2Fwp-content%2Fuploads%2F2019%2F12%2Flil-tjay-1000w-1.jpg&imgrefurl=https%3A%2F%2Fwww.hiphopcanada.com%2Flil-tjay-true-2myself-interview%2F&tbnid=AE4W1PYVLNLNXM&vet=12ahUKEwiurrapn-vuAhUI_RoKHe64BlsQMygjegUIARDiAQ..i&docid=5oZiNePlXL866M&w=1000&h=600&q=lil%20tjay%20images&safe=active&ved=2ahUKEwiurrapn-vuAhUI_RoKHe64BlsQMygjegUIARDiAQ",
            id: 5,
        },
    ]);

    return (
        <div className="trending">
            <div className="primary2">
                <div className="trending__content">
                    <div className="trending__content__icons">
                        <div className="t__icon__div">
                            <LibraryMusicIcon className="t-icon music" />

                            <div className="icon__title">Music</div>
                        </div>
                        <div className="t__icon__div">
                            <SportsEsportsIcon className="t-icon gaming" />

                            <div className="icon__title">Gaming</div>
                        </div>
                        <div className="t__icon__div">
                            <SportsIcon className="t-icon sports" />

                            <div className="icon__title">Sports</div>
                        </div>
                    </div>
                    <div className="trending__content__videos">
                        <h3>Trending videos</h3>
                        {trendingVCards.map((tCard) => (
                            <Link
                                to="/video"
                                style={{ textDecoration: "none" }}
                            >
                                <TrendingVideoCard
                                    img={tCard.img}
                                    title={tCard.title}
                                    views={tCard.views}
                                    timestamp={tCard.timestamp}
                                    channelName={tCard.channelName}
                                    description={tCard.description}
                                    key={tCard.id}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trending;
