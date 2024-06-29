import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Gilbert was a game-changer for our web development projects. His keen eye for detail and ability to create dynamic, scalable web applications truly set him apart. A true professional, he exceeded our expectations, and we look forward to future collaborations!",
    },
    {
      img: profilePic2,
      review:
        "We had the pleasure of working with Gilbert on our full-stack development project, and his expertise in both front-end and back-end development was invaluable. His meticulous approach to coding and problem-solving ensured the success of our project. We are grateful for his contribution and look forward to future collaborations!",
    },
    {
      img: profilePic3,
      review:
        "Gilbert's front-end development skills brought a whole new dimension to our web applications. His creative and visually engaging designs not only made the applications user-friendly but also captivated our users. We highly recommend Gilbert for anyone seeking a developer with a unique blend of technical and creative skills.",
    },
    {
      img: profilePic4,
      review:
        "Gilbert has been a revelation in full-stack web development. His expertise in technologies like Next.js, React, Django, Node, and PHP is unmatched, bringing a blend of precision and innovation to our projects. A strategic partner in every sense, I highly recommend Gilbert for anyone seeking impactful web development results.",
    },
  ];
  

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span className="text">{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
