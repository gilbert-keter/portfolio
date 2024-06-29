import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane className="lineheight">
          My voyage in full-stack web development has been a thrilling journey marked by impactful collaborations with esteemed organizations. I've steered my skills towards noteworthy projects, such as contributing to innovative web applications using Next.js, React, Django, Node, and PHP. My freelancing ventures on platforms like Upwork have provided me with diverse experiences, refining my expertise in both front-end and back-end development. Notably, I actively participate in hackathons and coding challenges, pushing the boundaries of what's possible. These experiences have enriched my portfolio, arming me with the tools needed to excel in various realms of web development. Let's chat about how I can infuse this expertise into your project! 🚀🏢🌐
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img
              style={{
                width: "100px",
                height: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              src={Amazon}
              alt=""
            />
          </div>{" "}
          <div className="w-secCircle">
            <img
              style={{
                width: "100px",
                height: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              src={Shopify}
              alt=""
            />
          </div>
          <div className="w-secCircle">
            <img
              style={{
                width: "100px",
                height: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              src={Facebook}
              alt=""
            />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
