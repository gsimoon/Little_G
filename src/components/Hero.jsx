import logo from "../images/logo.png"
import Icons from "../icons/Icons";
import { useState } from "react";

const booking_url = 'https://booking.resdiary.com/widget/Standard/LittleGPizzeria/10956'

const Hero = ({ scrollTo, info }) => {
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
            <h1>Little g Pizzeria</h1>
            <span>
              Brisbane's Best Pizza
              <br></br>
              Enjoy the perfect crust in a relaxed, welcoming atmosphere. From fan-favorite fried chicken to monthly specials and a curated wine and cocktail list, there's something delicious for every taste.
              <br></br>
              Located just around the corner from The Gabba on Logan Road, our venue is minimalist chic, our food is unpretentiously delicious and we are open 7 nights a week for your to enjoy.
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
