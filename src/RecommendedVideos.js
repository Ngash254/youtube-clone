import React, { useState } from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function RecommendedVideos() {
    const [cards, setCards] = useState([
        {
            img:
                "https://www.almanaltraining.ae/wp-content/uploads/2018/11/python-programming-language-training-in-abu-dhabi.png",
            avatarImage:
                "https://tse2.mm.bing.net/th?id=OIP.qHO_DagepnsjOuFUU0rAhAHaE8&pid=Api&P=0&w=312&h=209",
            title: "Simple projects to do over the weekend for beginner level.",
            channel: "TechWithTim",
            views: "130K",
            timestamp: "1 week ago",
            id: 1,
        },
        {
            img:
                "https://tse2.mm.bing.net/th?id=OIP.Smv6zLkITrqf1kfnb-yD4wHaEK&pid=Api&P=0&w=268&h=151",
            avatarImage:
                "https://tse2.mm.bing.net/th?id=OIP.Smv6zLkITrqf1kfnb-yD4wHaEK&pid=Api&P=0&w=268&h=151",
            title: "Python strengths and how to maximize each of them.",
            channel: "LearnCodeAcademy",
            views: "13K",
            timestamp: "1 month ago",
            id: 2,
        },
        {
            img:
                "https://tse3.mm.bing.net/th?id=OIP.7ymWkA2xQqVaH1_FyjJ2HgHaE7&pid=Api&P=0&w=272&h=182",
            avatarImage:
                "https://tse3.mm.bing.net/th?id=OIP.QCQ6HUpXYpLaARix0pSKNwHaFj&pid=Api&P=0&w=223&h=168",
            title: "Technology stuff changing the world immensely.",
            channel: "NASA Descendants",
            views: "1M",
            timestamp: "2 hours ago",
            id: 3,
        },
        {
            img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyaLM4FR7Ar7z5iqkoTotICKRfiqOwzluVyA&usqp=CAU",
            avatarImage:
                "https://tse2.mm.bing.net/th?id=OIP.0A_ZnQ1liKQQ1f1wTvOP6wHaE8&pid=Api&P=0&w=254&h=170",
            title: "Best setups for work at home desk.",
            channel: "RandomQl",
            views: "200",
            timestamp: "10 mins ago",
            id: 4,
        },
        {
            img:
                "https://th.bing.com/th/id/OIP.lODsmAHKNbkfAtNzsgxZ7QHaEK?pid=Api&rs=1",
            avatarImage:
                "https://tse2.mm.bing.net/th?id=OIP.Smv6zLkITrqf1kfnb-yD4wHaEK&pid=Api&P=0&w=268&h=151",
            title: "Simple projects to do over the weekend for beginner level.",
            channel: "TechWithTim",
            views: "130K",
            timestamp: "1 week ago",
            id: 5,
        },
        {
            img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrE8uuyxMMELMHZKn9YGEreb1OQVeo57b1g&usqp=CAU",
            avatarImage:
                "https://tse2.mm.bing.net/th?id=OIP.0A_ZnQ1liKQQ1f1wTvOP6wHaE8&pid=Api&P=0&w=254&h=170",
            title: "Best setups for work at home desk.",
            channel: "RandomQl",
            views: "200",
            timestamp: "10 mins ago",
            id: 6,
        },
        {
            img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5KR5sKCReT4R7O-ie5VBNO7RH6E88m3ubQ&usqp=CAU",
            avatarImage:
                "https://tse1.mm.bing.net/th?id=OIP.1TImSJW-SDQHsRapqDJf5QHaEK&pid=Api&P=0&w=293&h=166",
            title: "Python strengths and how to maximize each of them.",
            channel: "LearnCodeAcademy",
            views: "13K",
            timestamp: "1 month ago",
            id: 7,
        },
        {
            img:
                "https://tse2.mm.bing.net/th?id=OIP.qHO_DagepnsjOuFUU0rAhAHaE8&pid=Api&P=0&w=312&h=209",
            avatarImage:
                "https://tse2.mm.bing.net/th?id=OIP.qHO_DagepnsjOuFUU0rAhAHaE8&pid=Api&P=0&w=312&h=209",
            title: "Python strengths and how to maximize each of them.",
            channel: "LearnCodeAcademy",
            views: "13K",
            timestamp: "1 month ago",
            id: 8,
        },
        {
            img:
                "https://th.bing.com/th/id/OIP.BD1sDyHc-A1tM41jeCBn6wHaEK?w=281&h=180&c=7&o=5&pid=1.7",
            avatarImage:
                "https://tse1.mm.bing.net/th?id=OIP.1TImSJW-SDQHsRapqDJf5QHaEK&pid=Api&P=0&w=293&h=166",
            title: "Python strengths and how to maximize each of them.",
            channel: "LearnCodeAcademy",
            views: "13K",
            timestamp: "1 month ago",
            id: 9,
        },
        {
            img:
                "https://tse3.mm.bing.net/th?id=OIP.i1AODAgmHYhGUSdfH7IR9AHaEK&pid=Api&P=0&w=275&h=155",
            avatarImage:
                "https://tse3.mm.bing.net/th?id=OIP.i1AODAgmHYhGUSdfH7IR9AHaEK&pid=Api&P=0&w=275&h=155",
            title: "Python strengths and how to maximize each of them.",
            channel: "LearnCodeAcademy",
            views: "13K",
            timestamp: "1 month ago",
            id: 10,
        },
        {
            img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cryn55JAI83hCA8Ds-c7a53b4bBPVtwgTA&usqp=CAU",
            avatarImage:
                "https://tse1.mm.bing.net/th?id=OIP.1TImSJW-SDQHsRapqDJf5QHaEK&pid=Api&P=0&w=293&h=166",
            title: "Python strengths and how to maximize each of them.",
            channel: "LearnCodeAcademy",
            views: "13K",
            timestamp: "1 month ago",
            id: 11,
        },
        {
            img:
                "https://tse2.mm.bing.net/th?id=OIP.Smv6zLkITrqf1kfnb-yD4wHaEK&pid=Api&P=0&w=268&h=151",
            avatarImage:
                "https://tse2.mm.bing.net/th?id=OIP.Smv6zLkITrqf1kfnb-yD4wHaEK&pid=Api&P=0&w=268&h=151",
            title: "Python strengths and how to maximize each of them.",
            channel: "LearnCodeAcademy",
            views: "13K",
            timestamp: "1 month ago",
            id: 12,
        },
        {
            img:
                "https://d.ibtimes.co.uk/en/full/1561799/national-geographic-nature-photographer-year.jpg?w=400",
            avatarImage:
                "https://tse3.mm.bing.net/th?id=OIP.9XG_sZwIj4jnXq7-1mC_4AHaE8&pid=Api&P=0&w=247&h=166",
            title: "Savage Kingdom - Episode 1002",
            channel: "NatGeo",
            views: "13M",
            timestamp: "1 week ago",
            id: 13,
        },
        {
            img:
                "https://tse2.mm.bing.net/th?id=OIP.bQax-0sqvRxjFBq1ivqRqQHaE8&pid=Api&P=0&w=263&h=176",
            avatarImage:
                "https://tse3.mm.bing.net/th?id=OIP.9XG_sZwIj4jnXq7-1mC_4AHaE8&pid=Api&P=0&w=247&h=166",
            title: "Survival for the fittest- Episode 631.",
            channel: "NatGeo",
            views: "1.5M",
            timestamp: "8 hours ago",
            id: 14,
        },
        {
            img:
                "https://tse2.mm.bing.net/th?id=OIP.iOhrS2-DG_aX3TLdXUGJOQHaEk&pid=Api&P=0&w=254&h=158",
            avatarImage:
                "https://tse3.mm.bing.net/th?id=OIP.9XG_sZwIj4jnXq7-1mC_4AHaE8&pid=Api&P=0&w=247&h=166",
            title: "The world's fastest cat and its greatest enemies",
            channel: "NatGeo",
            views: "100M",
            timestamp: "1 year ago",
            id: 15,
        },
        {
            img:
                "https://tse4.mm.bing.net/th?id=OIP.nU8t4WsxxEboyp523eTUsQHaEK&pid=Api&P=0&w=278&h=157",
            avatarImage:
                "https://tse3.mm.bing.net/th?id=OIP.9XG_sZwIj4jnXq7-1mC_4AHaE8&pid=Api&P=0&w=247&h=166",
            title: "50th Anniversary celebrations in peru preparation.",
            channel: "NatGeo",
            views: "700K",
            timestamp: "3 hours ago",
            id: 16,
        },
        {
            img:
                "https://tse3.mm.bing.net/th?id=OIP.YJqDpMsnprgfkDzlzXiTrwHaEV&pid=Api&P=0&w=287&h=169",
            avatarImage:
                "https://tse1.mm.bing.net/th?id=OIP.ZsOoUIB6cAHsnGbXhXfrywHaEo&pid=Api&P=0&w=273&h=171",
            title: "World cup 2022 preperations.",
            channel: "FIFA",
            views: "500K",
            timestamp: "3 days ago",
            id: 17,
        },
        {
            img:
                "https://tse4.mm.bing.net/th?id=OIP.pINdZWn42_1DnB5xMDAS-AHaEK&pid=Api&P=0&w=273&h=154",
            avatarImage:
                "https://tse3.mm.bing.net/th?id=OIP.8c8KBmZdFWnhnDn5LjeFcAHaED&pid=Api&P=0&w=309&h=169",
            title: "How to maximize on the wilcard chips for 2020/2021 season",
            channel: "eplFantasy",
            views: "2K",
            timestamp: "1 hour ago",
            id: 18,
        },
        {
            img:
                "https://tse4.mm.bing.net/th?id=OIP.P7kdUY4S47-IWbky168kDAHaEK&pid=Api&P=0&w=319&h=180",
            avatarImage:
                "https://tse4.mm.bing.net/th?id=OIP.1mXbec7by0KwJ-8iM8N2jAHaEK&pid=Api&P=0&w=338&h=191",
            title: "The best League in the world.",
            channel: "EPL",
            views: "21M",
            timestamp: "3 weeks ago",
            id: 19,
        },
        {
            img:
                "https://tse1.mm.bing.net/th?id=OIP.zeTkF7-bvtm_W_Ft4nTjrgHaEq&pid=Api&P=0&w=291&h=184",
            avatarImage:
                "http://d279m997dpfwgl.cloudfront.net/wp/2018/06/0615_world-cup.jpg",
            title: "Women football making even bigger steps forward.",
            channel: "WorldOfSoccer",
            views: "100K",
            timestamp: "2 weeks ago",
            id: 20,
        },
    ]);

    return (
        <div className="recommendedVideos">
            <div className="videoCards">
                {cards.map((card) => (
                    <Link to="/video" style={{ textDecoration: "none" }}>
                        <VideoCard
                            img={card.img}
                            avatarImage={card.avatarImage}
                            title={card.title}
                            channel={card.channel}
                            views={card.views}
                            timestamp={card.timestamp}
                            key={card.id}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default RecommendedVideos;
