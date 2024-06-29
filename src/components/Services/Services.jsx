import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane className="lineheight">
          <div className="piece">
            {" "}
            <span style={{ fontWeight: "bolder", color: "goldenrod" }}>
              Full-Stack Web Development:
            </span>{" "}
            Crafting Dynamic Web Applications 🌐💻✨ Utilizing the power of Next.js, React, Django, Node, and PHP, I build robust and scalable web solutions. 🚀 I'm adept at turning concepts into fully-functional and visually appealing websites. 🌟
          </div>
          <br />
          <div className="piece abs3">
            <span style={{ fontWeight: "bolder", color: "goldenrod" }}>
              Front-End Development:
            </span>{" "}
            Creating Engaging User Experiences 🎨✨ I specialize in creating responsive, intuitive, and visually captivating front-ends using React and Next.js, ensuring seamless interaction and engagement. 🚀
          </div>
          <br />
          <div className="piece abs2">
            <span style={{ fontWeight: "bolder", color: "goldenrod" }}>
              Back-End Development:
            </span>{" "}
            Building Efficient Server-Side Solutions 🛠️✨ From designing databases to implementing server-side logic with Django and Node.js, I ensure that the back-end of applications is efficient, secure, and scalable. 🌐
          </div>
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Full-Stack Development"}
            detail={
              "Next.js, React, Django, Node, PHP, API Integration"
            }
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Front-End Development"}
            detail={
              "React, Next.js, Responsive Design, UX/UI"
            }
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Back-End Development"}
            detail={
              "Django, Node.js, Database Management, Security"
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
