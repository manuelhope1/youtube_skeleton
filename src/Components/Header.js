import React, { useState } from "react";
import logo from "../Assets/images/logo1.png";
import profilepic from "../Assets/images/propic.jpeg";
import {
  FaBars,
  FaMicrophone,
  FaRegBell,
  FaSearch,
  FaVideo,
} from "react-icons/fa";

const Header = (props) => {
  const [borColor, setborColor] = useState(
    "1px solid rgba(255, 255, 255, 0.379)"
  );
  const [searchshow, setSearchShow] = useState("none");
  const changeInputColors = () => {
    setborColor("1px solid  rgba(0, 125, 215, 0.987)");
    setSearchShow("flex");
  };
  const resetInputColors = () => {
    setborColor("1px solid rgba(255, 255, 255, 0.379)");
    setSearchShow("none");
  };
  const toggleVisibility = () => {
    props.setShowSmall(!props.showsmall);
    props.setShowBig(!props.showbig);
  };
  return (
    <div className="nav-holder">
      <div className="logo-box">
        <div className="left-con-head">
          <span className="menuicon flex-jcen-acen" onClick={toggleVisibility}>
            <FaBars className="icon1" />
          </span>
        </div>

        <a className="logobox" href="/#">
          <img src={logo} alt="logo" className="logo" />
        </a>
      </div>
      <div className="search-con">
        <div>
          {" "}
          <div className="search-box1" style={{ border: borColor }}>
            <div className="hid-search" style={{ display: searchshow }}>
              <div className="flex-jcen-acen">
                <FaSearch style={{ fontSize: "13px" }} />
              </div>
            </div>
            <input
              className="search-input"
              onFocus={changeInputColors}
              onBlur={resetInputColors}
              placeholder="Search"></input>
          </div>
          <div className="search-log-box" style={{ display: searchshow }}>
            <a href="/#">
              <FaSearch className="serach-log-box-icon" />
              <span>mrbeast</span>
            </a>
            <a href="/#">
              <FaSearch className="serach-log-box-icon" />
              <span>michael jackson</span>
            </a>
            <a href="/#">
              <FaSearch className="serach-log-box-icon" />
              <span>manchester united</span>
            </a>
            <a href="/#">
              <FaSearch className="serach-log-box-icon" />
              <span>messi</span>
            </a>
            <a href="/#">
              <FaSearch className="serach-log-box-icon" />
              <span>inter miami</span>
            </a>
            <a href="/#">
              <FaSearch className="serach-log-box-icon" />
              <span>liverpool</span>
            </a>
            <a href="/#">
              <FaSearch className="serach-log-box-icon" />
              <span>barcelona</span>
            </a>
            <span className="s-rep">Report search predictions</span>
          </div>
        </div>
        <a className="search-right" href="/#">
          <div className=" flex-jcen-acen">
            <FaSearch className="seari icon1" />
            <span className="seinfo">Search</span>
          </div>
        </a>
        <div>
          <a href="/#" className="mic-box flex-jcen-acen">
            <FaMicrophone className="icon1" />
          </a>
          <span className="micinfo">Search with your voice</span>
        </div>
      </div>
      <div className="user-box">
        <div>
          <a href="/#" className="createicon flex-jcen-acen">
            <FaVideo className="icon1" />
          </a>
          <span className="createinfo">Create</span>
        </div>
        <div>
          <a href="/#" className=" menuicon flex-jcen-acen">
            <FaRegBell className="icon1" />
          </a>
          <span className="notiinfo">Notifications</span>
        </div>

        <a href="/#">
          {" "}
          <img src={profilepic} alt="pro-pic" className="userpic" />
        </a>
      </div>
    </div>
  );
};

export default Header;
