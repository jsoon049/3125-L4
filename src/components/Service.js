import React from "react";
import { ServiceCard } from "./ServiceCard.js";
import "./Service.css";

export const Service = () => {
  var service = [
    {
      name: "Chiropractics",
      price: 5.99,
      description:
        "Chiropractors specialize in treating dysfunctions in your muscles, soft tissues, joints, bones or the nervous system. When you come in for chiropractic treatments you will receive a hands-on approach to healthcare that is drug free, highly effective and safe.",
    },
    {
      name: "Massage Therapy",
      price: 1.15,
      description:
        "Massage therapy is the manual mobilization/manipulation of soft tissue (Muscles, tendons, Ligaments, or fascia) for the purpose of improving health. It has therapeutic effects on the musculoskeletal system, the circulatory system, and the nervous system.",
    },
    {
      name: "Physiotherapy",
      price: 8.99,
      description:
        "Physiotherapists are highly trained and skilled at assessing mechanical and neurological injuries, and identifying the root cause of a person’s pain and dysfunction. They employ treatment options for each patient such as Manual Therapy and Injury Education.",
    },
    {
      name: "Acupuncture",
      price: 1.45,
      description:
        "Medical Acupuncture is the stimulation of particular anatomical points along the body with solid sterile needles to create a neuromuscular response from the body. The degree and types of responses vary depending on the series of points stimulated during the treatment session.",
    },
    {
      name: "Custom Knee Bracing",
      price: 4.49,
      description:
        "Our therapists are trained to recommend and fit the proper custom knee brace for your specific injury or post-operative needs. Our therapists will use specialized instruments to take precise measurements of your leg to ensure the best fit possible.",
    },
    {
      name: "Custom Orthotics",
      price: 3.67,
      description:
        "Custom Orthotics are custom shoe insoles tailored to a person’s specific needs, dysfunctions, or activity-specific requirements. They are used to reduce force on weight bearing joints; to correct for joint mal-alignment issues; or to improve support and comfort when standing, walking or running.",
    },
  ];

  return (
    <div className="service" id="service">
      <h1>What We Offer</h1>
      <div className="service-wrapper">
        {service.map((item, i) => (
          <ul key={i} className="service-ul">
            <ServiceCard service={item} />
          </ul>
        ))}
      </div>
    </div>
  );
};
