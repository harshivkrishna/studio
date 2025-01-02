import React from "react";
import "./Services.css";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [refWeddings, inViewWeddings] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Increased distance from scroll (20% of card visibility triggers animation)
  });
  const [refPortraits, inViewPortraits] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [refFashion, inViewFashion] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [refEditorial, inViewEditorial] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="services-section">
      <div className="services-overlay"></div>
      <h2 className="services-heading">Our Services</h2>
      <h3 className="services-subheading">We Provide Best Professional Services</h3>
      <div className="services-cards">
        <div
          ref={refWeddings}
          className={`service-card ${inViewWeddings ? "reveal-slide" : ""}`}
          style={{ transitionDelay: "0s" }}
        >
          <img src="/assests/service-1.jpg" alt="Weddings" />
          <h4>Weddings</h4>
        </div>
        <div
          ref={refPortraits}
          className={`service-card ${inViewPortraits ? "reveal-slide" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <img src="/assests/service-2.jpg" alt="Portraits" />
          <h4>Portraits</h4>
        </div>
        <div
          ref={refFashion}
          className={`service-card ${inViewFashion ? "reveal-slide" : ""}`}
          style={{ transitionDelay: "0.4s" }}
        >
          <img src="/assests/service-3.jpg" alt="Fashion" />
          <h4>Fashion</h4>
        </div>
        <div
          ref={refEditorial}
          className={`service-card ${inViewEditorial ? "reveal-slide" : ""}`}
          style={{ transitionDelay: "0.6s" }}
        >
          <img src="/assests/service-4.jpg" alt="Editorial" />
          <h4>Editorial</h4>
        </div>
      </div>
    </section>
  );
};

export default Services;
