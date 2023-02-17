import React from "react";
import twitterIcon from "./assets/twitter-icon.png"
import githubIcon from "./assets/github-icon.png"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="icons">
                <a href="https://twitter.com/_4kshay_" target={"_blank"}><img src={twitterIcon} alt="Twitter icon"/></a>
                <a href="https://github.com/Akshay-Tarde/" target={"_blank"}><img src={githubIcon} alt="GitHub icon"/></a>
            </div>
        </footer>
    )
}