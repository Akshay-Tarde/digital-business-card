import React from "react";
import profile from "./assets/akshay.jpg";
import emailIcon from "./assets/email-icon.png";

export default function Info() {
    return (
        <section className="info">
            <img src={profile} alt="Image of Akshay" className="profile" />
            <h1 className="fullname">Akshay Tarde</h1>
            <h3 className="subtitle">Frontend Developer</h3>
            <a className="btn" href="mailto: akshaymtarde@gmail.com">
                <img src={emailIcon} alt="Email Icon"/>
                Email
            </a>
        </section>
    )
}