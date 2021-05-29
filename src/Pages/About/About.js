import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LanguageIcon from "@material-ui/icons/Language";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import Tooltip from "@material-ui/core/Tooltip";
import "./About.css";

const About = () => {
  return (
    <div className='about'>
      <img
        src='https://andrewkumar-portfolio.netlify.app/static/media/profile.96c6fd81.jpg'
        alt='me'
      />
      <div className='social'>
        <Tooltip title='Facebook' placement='right-start'>
          <a
            href='https://www.facebook.com/kutekumarphotography'
            target='_blank'>
            <FacebookIcon style={{ fontSize: "3rem" }} />
          </a>
        </Tooltip>
        <Tooltip title='Instagram' placement='right-start'>
          <a href='https://instagram.com/kosmic_kumar' target='_blank'>
            <InstagramIcon style={{ fontSize: "3rem" }} />
          </a>
        </Tooltip>
        <Tooltip title='Youtube' placement='right-start'>
          <a href='https://www.youtube.com/c/KumarKoirala' target='_blank'>
            <YouTubeIcon style={{ fontSize: "3rem" }} />
          </a>
        </Tooltip>
        <Tooltip title='LinkIn' placement='right-start'>
          <a href='https://www.linkedin.com/in/kumar-koirala' target='_blank'>
            <LinkedInIcon style={{ fontSize: "3rem" }} />
          </a>
        </Tooltip>
        <Tooltip title='Website' placement='right-start'>
          <a href='https://andrewkumar-portfolio.netlify.app/' target='_blank'>
            <LanguageIcon style={{ fontSize: "3rem" }} />
          </a>
        </Tooltip>
        <Tooltip title='Art Station' placement='right-start'>
          <a href='https://www.artstation.com/andrewkumar' target='_blank'>
            <ArtTrackIcon style={{ fontSize: "3rem" }} />
          </a>
        </Tooltip>
      </div>
      <div className='description'>
        <p>
          Hi there! My name is Kumar Koirala. I am a Web Developer, Designer,
          Programmer, 3D Generalist, Motion Graphic Designer. My passion is
          coding , problem solving and creating something cool and fun. I love
          music and travelling alot.
        </p>
      </div>
    </div>
  );
};

export default About;
