import logo from "../images/logo_white.png"
import Icons from "../icons/Icons";

const Contact = ({ scrollTo, info }) => {
    
    const booking_url = info.length === 0 ? '' : info.filter(item => item.object === `Booking Link`)[0].content
    const maps_link = info.length === 0 ? '' : info.filter(item => item.object === `Address Link`)[0].content
    const instagram_link = info.length === 0 ? '' : info.filter(item => item.object === `Instagram Link`)[0].content
    const instagram_profile = info.length === 0 ? '' : info.filter(item => item.object === `Instagram Profile`)[0].content
    const phone_number = info.length === 0 ? '' : info.filter(item => item.object === `Phone`)[0].content
    const address = info.length === 0 ? '' : info.filter(item => item.object === `Address`)[0].content
    const hours = info.length === 0 ? '' : info.filter(item => item.object === `Hours`)[0].content 

    const paragraphs = hours.split('\n')    

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
                        <span onClick={() => window.open(maps_link, "_blank", "noreferrer")}>{address}</span>
                    </div>
                    <div className="address_phone">
                        <span>Phone: {phone_number}</span>
                    </div>
                </div>
                <div className="info_hours">
                    <div className="hours_list">
                        <span>Hours</span>
                        <ul>
                            { paragraphs.map((item, i) => <li key={i}>{item}</li>) }
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