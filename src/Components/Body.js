import React from "react";
import "./body.css";
import dropdown from "../asstes/dropdown.png";
import people from "../asstes/people.png";
import pin from "../asstes/pin.png";
import edit from "../asstes/edit.png";
import Content from "./Content";
import loc from "../asstes/loc-text.png";
import back from "../asstes/back.svg";
import join from "../asstes/join.png";

function Body() {
  return (
    <div className="fullbody">
      <div className="smallh">
        <div className="back">
          <img src={back} alt="" />
        </div>
        <div className="join">
          <img src={join} alt="" />
        </div>
      </div>
      <div className="body">
        <div className="bhead">
          <div className="btn1cont">
            <div className="bbtnactive bbtn">All Posts(32)</div>
            <div className="bbtn">Artilce</div>
            <div className="bbtn">Event</div>
            <div className="bbtn">Education</div>
            <div className="bbtn">Job</div>
          </div>
          <div className="btn2cont">
            <div className="rb1">
              <div className="accounttext">Write a post</div>
              <div className="dropdown">
                <img src={dropdown} alt="" />
              </div>
            </div>
            <div className="rb2">
              <div className="people">
                <img src={people} alt="" />
              </div>
              <div className="join">Join Group</div>
            </div>
          </div>
        </div>
        <div className="bheadsm">
          <div className="posts">Posts(368)</div>
          <div className="filtercont">
            <div className="filter">Filter: All</div>
            <div className="dropdown">
              <img src={dropdown} alt="" />
            </div>
          </div>
        </div>
        <div className="bodycont">
          <div className="left">
            <Content />
          </div>
          <div className="right">
            <div className="location">
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "4px" }} className="pin">
                  <img src={pin} alt="" />
                </div>
                <input type="text" placeholder="Noida, India" />
              </div>
              <div className="edit">
                <img src={edit} alt="" />
              </div>
            </div>
            <div className="loctext">
              <img src={loc} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
