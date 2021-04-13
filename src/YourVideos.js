import React from "react";
import "./YourVideos.css";
import { Link } from "react-router-dom";

function YourVideos() {
    return (
        <div className="yourVideos">
            <div className="main__container">
                <h1>Sorry! This page is out of service...</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eveniet perspiciatis ullam harum repudiandae id a quia aut
                    eum hic nihil obcaecati tenetur iste, pariatur minus dolore
                    qui et similique. Numquam!
                </p>
                <div className="video-div">
                    <video height="304" width="560" controls>
                        <source
                            src="https://www.youtube.com/watch?v=ynUHE4OFg9E"
                            type="video/mp4"
                        />
                        Your browser does not support video
                    </video>
                </div>
                <button>
                    <Link
                        to="/"
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        Back to home page
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default YourVideos;
