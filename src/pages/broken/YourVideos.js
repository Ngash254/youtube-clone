import React from "react";
import "./YourVideos.css";
import { Link } from "react-router-dom";
import video from "./Videos/video-2.mp4";

function YourVideos() {
    return (
        <div className="yourVideos">
            <div className="main__container">
                <div className="cont__title">
                    <h1>Sorry! This page is out of service...</h1>
                </div>
                <div className="cont__paragraph">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Eveniet repudiandae id a quia aut. Numquam!
                    </p>
                </div>

                <div className="cont__video">
                    <div className="video-div">
                        <video height="304" width="560" autoPlay muted loop>
                            <source src={video} type="video/mp4" />
                            Your browser does not support video
                        </video>
                    </div>
                </div>

                <div className="home__button__div">
                    <Link
                        to="/"
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        <button className="home__button">
                            Back to home page
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default YourVideos;
