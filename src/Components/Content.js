import React, { useState } from "react";
import "./content.css";
import img0 from "../asstes/img0.png";
import img1 from "../asstes/img1.png";
import img2 from "../asstes/img2.png";
import p0 from "../asstes/p0.png";
import p1 from "../asstes/p1.png";
import p2 from "../asstes/p2.png";
import p3 from "../asstes/p3.png";
import Education from "../asstes/Education.png";
import Article from "../asstes/Article.png";
import Meetup from "../asstes/Meetup.png";
import eye from "../asstes/eye.svg";
import share from "../asstes/share.png";
import ahmedabad from "../asstes/ahmedabad.png";
import Job from "../asstes/Job.png";
import Ino from "../asstes/Ino.png";

function Content() {
    const [clicked, setClicked] = useState(true);
    const handleClick = () =>{
        setClicked(prev=>!prev);
    }
  return (
    <div className="content">
      <div className="cholder">
        <div className="cimg">
          <img src={img0} alt="" />
        </div>
        <div className="ctext">
          <div className="ctype">
            <div className="type-img">
              <img src={Article} alt="" />
            </div>
            <div className="cbody">
              <h1>
                What if famous brands had regular fonts? Meet RegulaBrands!
              </h1>
              <div className="dotscont">
                <div className="dots">...</div>
              </div>
            </div>
            <p>
              I've worked in UX for the better part of a decade. From now on, I
              plan to rei...
            </p>
            <div className="profilecont">
              <div className="profile">
                <div className="pimg">
                  <img src={p0} alt="" />
                </div>
                <div className="name">Sarthak Kamra</div>
              </div>
              <div className="views">
                <div className="eyeimg">
                  <img src={eye} alt="" />
                </div>
                <div className="eyetext">1.4k views</div>
              </div>
              <div className="shareimg">
                <img src={share} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cholder">
        <div className="cimg">
          <img src={img1} alt="" />
        </div>
        <div className="ctext">
        <div className="ctype" >
            <div className="type-img" style={{width:'105px'}}>
              <img src={Education} alt="" />
            </div>
            <div className="cbody">
              <h1>
                Tax Benifits for Investment under National Pension Scheme
                launched by Government
              </h1>
              <div className="dotscont">
                <div className="dots">...</div>
              </div>
            </div>
            <p>
              I've worked in UX for the better part of a decade. From now on, I
              plan to rei...
            </p>
            <div className="profilecont">
              <div className="profile">
                <div className="pimg">
                  <img src={p1} alt="" />
                </div>
                <div className="name">Sarah West</div>
              </div>
              <div className="views">
                <div className="eyeimg">
                  <img src={eye} alt="" />
                </div>
                <div className="eyetext">1.4k views</div>
              </div>
              <div className="shareimg">
                <img src={share} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cholder">
        <div className={clicked?"menu view":"menu"}>
            <div>Edit</div>
            <div>Report</div>
            <div>Option</div>
        </div>
        <div className="cimg">
          <img src={img2} alt="" />
        </div>
        <div className="ctext">
        <div className="ctype" >
            <div className="type-img" style={{width:'85px'}}>
              <img src={Meetup} alt="" />
            </div>
            <div className="cbody">
              <h1 style={{height:'29px'}}>Finance & Investment Elite Social Mixer @Lujiaui</h1>
              <div className={clicked?"dotscont active":"dotscont"} onClick={handleClick}>
                <div className="dots">...</div>
              </div>
            </div>
            <div className="ahemcont">
                <img src={ahmedabad} alt="" />
            </div>
            <div className="ahembtn">
                Visit Website
            </div>
            <div className="profilecont">
              <div className="profile">
                <div className="pimg">
                  <img src={p2} alt="" />
                </div>
                <div className="name">Ronal Jones</div>
              </div>
              <div className="views">
                <div className="eyeimg">
                  <img src={eye} alt="" />
                </div>
                <div className="eyetext">1.4k views</div>
              </div>
              <div className="shareimg">
                <img src={share} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cholder">
        <div className="ctext">
          <div className="ctype" >
            <div className="type-img" style={{width:'53px'}}>
              <img src={Job} alt="" />
            </div>
            <div className="cbody">
              <h1 style={{height:'29px'}}>Software Developer</h1>
              <div className="dotscont">
                <div className="dots">...</div>
              </div>
            </div>
            <div className="ahemcont">
                <img src={Ino} style={{width:'399px'}} alt="" />
            </div>
            <div className="ahembtn" style={{color:'#02B875'}}>
                Apply on Timesjobs
            </div>
            <div className="profilecont">
              <div className="profile">
                <div className="pimg">
                  <img src={p3} alt="" />
                </div>
                <div className="name">Joseph Gray</div>
              </div>
              <div className="views">
                <div className="eyeimg">
                  <img src={eye} alt="" />
                </div>
                <div className="eyetext">1.4k views</div>
              </div>
              <div className="shareimg">
                <img src={share} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
