import theme_pattern from "../assets/theme_pattern.svg";
import mail_icon from "../assets/mail_icon.svg";
import location_icon from "../assets/location_icon.svg";
import call_icon from "../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a5c4e238-d7c1-4b3a-8077-e632744c659b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on.You can
            contact anytime.Right now i am looking for a job or internship
            opportunity to gain some knowledge from my Senior developers.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>ckotian117@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+917676573108</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Udupi,karnataka-INDIA</p>
            </div>
          </div>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/Chirag-S-Kotian"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/_chirag_S_kotian"
              target="_blank"
            >
              <i className="fab fa-instagram-square"></i>
            </a>
            <a href="https://github.com/Chirag-S-Kotian" target="_blank">
              <i className="fab fa-github-square"></i>
            </a>
            <a href="https://twitter.com/Chirag_S_kotian" target="_blank">
              <i className="fab fa-twitter-square"></i>
            </a>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Write Your Message here..</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message.."
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
