import { GetApp } from "@material-ui/icons";
import React from "react";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title cap">About Me</h2>
            <span className="section__subtitle cap">My introduction</span>
            <div className="about__container container">
                <div className="about__data">
                    <p className="about__desc">
                        I am a highly skilled and dedicated Web Developer with 2
                        years of experience, proficient in various web
                        technologies such as React.js, Bootstrap, Tailwand css,
                        jQuery, Redux, Node.js, and Express.js. I have a strong
                        passion for web development and take great pleasure in
                        delivering high-quality work. With a focus on continuous
                        learning and staying updated with industry trends, I
                        bring robust and user-friendly web applications to life.
                        I am committed to achieving optimal performance and
                        meticulous attention to detail, working collaboratively
                        to contribute to project success. As a driven and
                        innovative professional, I am always ready to tackle new
                        challenges and create impactful solutions.
                    </p>
                    <div className="about__info">
                        <div className="info-item">
                            <span className="info-title">02</span>
                            <span className="info-name">
                                Years <br /> experience
                            </span>
                        </div>
                        <div className="info-item">
                            <span className="info-title">8</span>
                            <span className="info-name">
                                Completed <br /> projects
                            </span>
                        </div>
                        <div className="info-item">
                            <span className="info-title">3</span>
                            <span className="info-name">
                                Companies <br /> worked
                            </span>
                        </div>
                    </div>
                    <div className="about__buttons">
                        <a
                            download=""
                            href="./assets/Laila ouhamou.pdf"
                            className="button button--flex"
                        >
                            Download CV <GetApp className="button__icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
