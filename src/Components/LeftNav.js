import React from "react";
import {
    FaChevronDown,
    FaCut,
    FaDeviantart,
    FaFire,
    FaGamepad,
    FaHistory,
    FaHome,
    FaItunesNote,
    FaPhotoVideo,
    FaRegCaretSquareRight,
    FaRegClock,
    FaRegImages,
    FaTrophy,
} from "react-icons/fa";
import s1 from "../Assets/images/s1.webp"
import s2 from "../Assets/images/s2.jpeg"
import s3 from "../Assets/images/s3.jpeg"
import s4 from "../Assets/images/s4.png"
const LeftNav = (props) => {
    const showsmall = props.showsmall;
    const showbig = props.showbig;
    return (
        <>
            <div className='left-con' style={{ display: showsmall ? 'block' : 'none' }}>
                <div><a className='left-nav-i-box' href="/#"> <FaHome className="icon1" /><span>Home</span> </a></div>
                <div> <a className='left-nav-i-box' href="/#"> <FaDeviantart className="icon1" /><span>Shorts</span> </a></div>
                <div><a className='left-nav-i-box' href="/#"> <FaPhotoVideo className="icon1" /><span>Subscriptions</span> </a></div>
                <div><a className='left-nav-i-box' href="/#"> <FaRegImages className="icon1" /><span>Library</span> </a></div>
            </div>
            <div className="left-con-sec" style={{ display: showbig ? 'block' : 'none' }}>
                <div className="left-con-sec-inner1">
                    <div >
                        <a href="/#">
                            <FaHome className="left-con-sec-icon" />
                        </a>
                        <span>Home</span>
                    </div>
                    <div >
                        <a href="/#">
                            <FaDeviantart className="left-con-sec-icon" />
                        </a>
                        <span>Shorts</span>
                    </div>
                    <div >
                        <a href="/#">
                            <FaPhotoVideo className="left-con-sec-icon" />
                        </a>
                        <span>Subscriptions</span>
                    </div>
                </div>
                <div className="left-con-sec-inner2 left-con-sec-inner2 ">
                    <div >
                        <a href="/#">
                            <FaRegImages className="left-con-sec-icon" />
                        </a>
                        <span>Library</span>
                    </div>
                    <div >
                        <a href="/#">
                            <FaHistory className="left-con-sec-icon" />
                        </a>
                        <span>History</span>
                    </div>
                    <div >
                        <a href="/#">
                            <FaRegCaretSquareRight className="left-con-sec-icon" />
                        </a>
                        <span>Your Vidoes</span>
                    </div>
                    <div >
                        <a href="/#">
                            <FaRegClock className="left-con-sec-icon" />
                        </a>
                        <span>Watch Later</span>
                    </div>
                    <div >
                        <a href="/#">
                            <FaCut className="left-con-sec-icon" />
                        </a>
                        <span>Your Clips</span>
                    </div> <div >
                        <a href="/#">
                            <FaChevronDown className="left-con-sec-icon" />
                        </a>
                        <span>Show More</span>
                    </div>
                </div>
                <div className="left-con-sec-inner2 ">
                    <span className="left-con-info">Subscriptions</span>
                    <div style={{ marginTop: "10px" }}>
                        <img src={s1} alt="sub-pic" className="subpics" />
                        <span>Photography</span>
                    </div>
                    <div>
                        <img src={s2} alt="sub-pic" className="subpics" />
                        <span>Maserati</span>
                    </div>
                    <div>
                        <img src={s3} alt="sub-pic" className="subpics" />
                        <span>Ben 10</span>
                    </div>
                    <div>
                        <img src={s4} alt="sub-pic" className="subpics" />
                        <span> Coding</span>
                    </div>
                </div>
                <div className="left-con-sec-inner2 left-con-sec-inner2 ">
                    <span className="left-con-info">Explore</span>
                    <div style={{ marginTop: "10px" }}>
                        <a href="/#">
                            <FaFire className="left-con-sec-icon" />
                        </a>
                        <span>Trending</span>
                    </div>
                    <div >
                        <a href="/#">
                            <FaItunesNote className="left-con-sec-icon" />
                        </a>
                        <span>Music</span>
                    </div>
                    <div >
                        <a href="/#">
                            <FaGamepad className="left-con-sec-icon" />
                        </a>
                        <span>Gaming</span>
                    </div>
                    <div >
                        <a href="/#">
                            <FaTrophy className="left-con-sec-icon" />
                        </a>
                        <span>Sports</span>
                    </div>
                </div>

            </div>
        </>
    );
};

export default LeftNav;
