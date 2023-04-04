import React from 'react';
import heroChatImg from '../../../assets/img/tab-2.svg';
import heroDashboardImg from '../../../assets/img/chart-2.svg';
import heroUserProfileImg from '../../../assets/img/Frame 165.svg';
import heroGraphImg from '../../../assets/img/chart-4.svg';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import herodashboard from '../../../assets/img/landing-image-1.png';

const Hero = () => {
  const rotateProps = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
    config: { duration: 5000 },
    reset: true,
    loop: true,
  });

  const bounceProps = useSpring({
    from: { transform: 'translateY(-20px)' },
    to: { transform: 'translateY(20px)' },
    config: { duration: 2000 },
    reset: true,
    reverse: true,
    loop: true,
  });

  return (
    <section className="hero-section">
      <animated.img
        style={rotateProps}
        src={heroDashboardImg}
        alt=""
        className="heroDashboardImg"
      />
      <animated.img
        style={rotateProps}
        src={heroChatImg}
        alt=""
        className="heroChatImg"
      />
      <header className="hero-heading" style={bounceProps}>
        <h1>The best performance management system</h1>
        <h3>
          We assist businesses scale positive, and increase employee engagement,
          output, and retention.
        </h3>
      </header>
      <div className="hero-links-container">
        <Link className="get-started-link">Get started</Link>
        <Link className="login-link">Request a demo</Link>
      </div>
      <animated.img
        style={rotateProps}
        src={heroUserProfileImg}
        alt=""
        className="heroUserProfileImg"
      />
      <animated.img
        style={rotateProps}
        src={heroGraphImg}
        alt=""
        className="heroGraphImg"
      />
      <img src={herodashboard} alt="" className="hero-dashboard-img" />
    </section>
  );
};

export default Hero;
