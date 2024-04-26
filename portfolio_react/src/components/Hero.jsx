import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "../assets/Profile.jpeg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile} alt="" />
      <h1>
        <span>I'm Chirag S Kotian,</span> Full Stack Developer(MERN) based in
        INDIA.{" "}
      </h1>
      <p>
        I am Full stack developer from Karnataka, INDIA with some practical
        exeperience in multiple full stack projects.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
