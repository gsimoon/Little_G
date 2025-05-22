import logo from "../images/logo_white.png"

const maps_link = 'https://maps.app.goo.gl/Y2nq5pbEjnoDumkW8'

const Contact = () => (
    <section className='contact'>
        <div className="contact_info">
            <div className="info_address">
                <div className="address_logo">
                    <img src={logo} alt="" />
                </div>
                <div className="address_link">
                    <span onClick={() => window.open(maps_link, "_blank", "noreferrer")}>64 Logan Road, Wooloongabba 4102</span>
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
            <div className="info_menu">c</div>
        </div>
    </section>
); 

export default Contact;