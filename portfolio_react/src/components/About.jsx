import theme_pattern from "../assets/theme_pattern.svg";
import about_profile from "../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="image for about section" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_profile} alt="profile image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Full Stack Developer with handfull experience
              in multiple projects.Throughout my career, i have had the
              privilege of collaborating with prestigious
              organizations,contributing to thier success and growth.
            </p>
            <p>
              My passion for Full Stack Development is not only reflected in my
              project experience but also in the enthusiasm and dedication i
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>TAILWIND CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>BOOTSTRAP</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>REACT JS</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>NODE JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>EXPRESS JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>MONGOOSE</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>MONGO DB</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>THUNDER CLIENT</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>POSTMAN</p>
              <hr style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
