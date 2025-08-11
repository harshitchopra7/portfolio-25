import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExperience.css";
import { experiences, skills } from "../../constants.js";

function WorkExperience() {
  return (
    <div className="work-experience-section" id="experience">
      <h3 className="subhead-text">Work Experience.</h3>
      <div className="work-experience-description">
        <p>
          From scaling features at Swiggy to leading innovations at Skillsoft —
          here’s a snapshot of my journey so far:
        </p>
      </div>

      <div className="timeline-container">
        <VerticalTimeline lineColor="#404040">
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className="timeline-icon">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="timeline-icon-img"
                  />
                </div>
              }
              contentStyle={{
                borderBottom: "8px solid " + experience.iconBg,
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="experience-title">{experience.title}</h3>
                <p className="experience-company">{experience.company_name}</p>
              </div>

              <ul className="experience-points">
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="experience-point"
                    dangerouslySetInnerHTML={{ __html: point }}
                  ></li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default WorkExperience;
