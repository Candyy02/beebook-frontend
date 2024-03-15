import React from "react";
import '../styles/Banner.css';
const Banner = () => {
    return (
        <div className="banner">
            <img className="banner-image img-fluid" alt="Banner" src="/images/image-21.png" />
            <div className="banner-text">
                <div className="banner-text--title">Kỷ luật tự giác</div>
                <p className="banner-text--subtitle">Năm phát hành: 2023</p>
                <button className="banner-text--button">
                    <a href="chi-tiet">Chi tiết</a>
                </button>
            </div>
            <div className="banner-right">
                <div className="ellipse" /> 
                <div className="ellipse-1" />
                <div className="ellipse-2" />
                <div className="ellipse-3" />
                <div className="ellipse-4" />
                <div className="ellipse-5" />
            </div>
        </div>
    );
};

export default Banner;