import React from 'react';
import './About.css';
import { motion } from "framer-motion";
import 'boxicons';
const About = () => {
    return (
        <section id="about" className="about">
            <div
                className="container about-div flex justify-center p-3 align-middle"
                as={motion.div}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
            >
                <div className="row">
                    {/* Content Section */}
                    <motion.div
                        className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
                        initial={{ opacity: 0, y: -100 }}  // Start from the right
                        whileInView={{ opacity: 1, y: 0 }}  // Animate to normal position
                        transition={{ duration: 2,delay:2.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-title text-left bg-red-500 mb-8">
                        <h2>About Us</h2>
                        <p>Who we are</p>
                        </div>
                        <p className="fst-italic">
                        At Mighty Plethora, we capture your most cherished moments with perfection! Experience the art of photography through our lens. Whether you're looking for stunning portraits or unforgettable event shots, we&apos;ve got something special for every occasion.
                             <br /> <span className="service-title">Enjoy our services </span>
                        </p>
                        <ul>
                            <li>
                                <i className="bx bx-check-circle"></i> Professional photo sessions for individuals and groups
                            </li>
                            <li>
                                <i className="bx bx-check-circle"></i> Cozy studio environment for a relaxed experience
                            </li>
                            <li>
                                <i className="bx bx-check-circle"></i> Quick and high-quality photo delivery
                            </li>
                        </ul>
                        <p>
                        We're open 7 days a week, from 9 AM to 9 PM, to capture your memories whenever you need. Plus, with ample parking space, your visit is convenient. Come and preserve your precious moments with us today!
                        </p>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        className="col-lg-6 order-1 order-lg-2 about-img-wrapper"
                        initial={{ opacity: 0, x: -100 }}  // Start from the left
                        whileInView={{ opacity: 1, x: 0 }}  // Animate to normal position
                        transition={{ duration: 2.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="about-img">
                            <img className='-z-10' src="../../public/assets/about-1.jpg" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
