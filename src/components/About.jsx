import React from "react";

const About = ({ info }) => {
    const about = info.length === 0 ? '' : info.filter(item => item.object === `About`)[0].content
    const paragraphs = about.split('\n')

    return (
        <section id='about' className='about'>
            <div className="about_description">
                <div className="description_header">ABOUT US</div>
                <div className="description_text">
                    {paragraphs.map((item, i) => (
                        <React.Fragment key={i}>
                            {item}
                            <br />
                        </React.Fragment>
                    ))}
                </div>
            </div>
            {/* <div className="about_reviews">
        </div> */}
        </section>
    )
}

export default About;