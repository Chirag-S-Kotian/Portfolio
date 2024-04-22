import profile_img from '../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Chirag S Kotian,</span> Full Stack Developer(MERN) based in INDIA. </h1>
        <p>I am Full stack developer from Karnataka, INDIA with some practical exeperience in multiple full stack projects.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero