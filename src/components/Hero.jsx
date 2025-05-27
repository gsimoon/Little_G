import logo from "../images/logo.png"
import Icons from "../icons/Icons";
import React, { useState } from "react";

const Hero = ({ scrollTo, info }) => {
  const business = info.length === 0 ? '' : info.filter(item => item.object === `Business`)[0].content
  const home_content = info.length === 0 ? '' : info.filter(item => item.object === `Home Content`)[0].content
  const booking_url = info.length === 0 ? '' : info.filter(item => item.object === `Booking Link`)[0].content

  const paragraphs = home_content.split('\n')


  const handleClick = (item) => {
    scrollTo(item);
    setIsMenuOpen(false)
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <section className="hero">
      <header className="hero_header">
        <div className="header_menu">
          <ul className="main_nav">
            <li><span onClick={() => handleClick('about')}>ABOUT US</span></li>
            <li><span onClick={() => handleClick('menu')}>MENU</span></li>
            <img src={logo} alt="" className="logo" />
            <li><span onClick={() => window.open(booking_url, "_blank", "noreferrer")}>BOOKINGS</span></li>
            <li><span onClick={() => handleClick('contact')}>CONTACT</span></li>
          </ul>
          <div className="menu_toogle" onClick={toggleMenu}>
            <Icons icon={'menu'} width="35" height="35" fill="#000000" />
          </div>
        </div>
      </header>
      <div className="hero_content" onClick={() => setIsMenuOpen(false)}>
        <div className="content_bgd"></div>
        <div className="content_description">
          <div className="description_text">
            <h1>{business}</h1>
            <span>
              {paragraphs.map((item, i) => (
                <React.Fragment key={i}>
                  {item}
                  <br />
                </React.Fragment>
              ))}
            </span>
          </div>
        </div>
      </div>
      <div className={isMenuOpen ? 'open' : `close`}>
        <ul className="main_mobile_nav">
          <li><span onClick={() => handleClick('about')}>ABOUT US</span></li>
          <li><span onClick={() => handleClick('menu')}>MENU</span></li>
          <li><span onClick={() => {
            window.open(booking_url, "_blank", "noreferrer")
            setIsMenuOpen(false)
          }}>BOOKINGS</span></li>
          <li><span onClick={() => handleClick('contact')}>CONTACT</span></li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
