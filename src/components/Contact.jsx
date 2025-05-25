import logo from "../images/logo_white.png"
import Icons from "../icons/Icons";

const maps_link = 'https://maps.app.goo.gl/Y2nq5pbEjnoDumkW8'
const instagram_link = 'https://www.instagram.com/little.g.pizza/'
const instagram_profile = '@little.g.pizza'
const booking_url = 'https://booking.resdiary.com/widget/Standard/LittleGPizzeria/10956'

const Contact = ({ scrollTo }) => {
    const handleClick = (item) => {
        scrollTo(item);
    };

    return (
        <section id='contact' className='contact'>
            <div className="contact_info">
                <div className="info_address">
                    <div className="address_logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="address_link">
                        <span onClick={() => window.open(maps_link, "_blank", "noreferrer")}>64 Logan Road, Wooloongabba 4102</span>
                    </div>
                    <div className="address_phone">
                        <span>Phone: 0738467713</span>
                    </div>
                </div>
                <div className="info_hours">
                    <div className="hours_list">
                        <span>Hours</span>
                        <ul>
                            <li>Tuesday: 5:30pm - 8:30pm</li>
                            <li>Wednesday: 5:30pm - 8:30pm</li>
                            <li>Thursday: 5:30pm - 8:30pm</li>
                            <li>Friday: 5:30pm - 8:30pm</li>
                            <li>Saturday: 5:30pm - 8:30pm</li>
                            <li>Sunday: 5:30pm - 8:30pm</li>
                            <li>Monday: Closed</li>
                        </ul>
                    </div>
                </div>
                <div className="info_menu">
                    <div className="menu_pages">
                        <ul>
                            <li><span onClick={() => handleClick('about')}>ABOUT US</span></li>
                            <li><span onClick={() => handleClick('menu')}>MENU</span></li>
                            <li><span onClick={() => handleClick('contact')}>CONTACT</span></li>
                        </ul>
                    </div>
                    <div className="menu_socialmedia">
                        <div className="socialmedia_section" onClick={() => window.open(instagram_link, "_blank", "noreferrer")}>
                            <div className="section_logo">
                                <Icons icon={'instagram'} width="35" height="35" fill="#eee4e4" />
                            </div>
                            <div className="section_profile">{instagram_profile}</div>
                        </div>
                        <div className="book_now">
                            <button onClick={() => window.open(booking_url, "_blank", "noreferrer")}>BOOK NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;