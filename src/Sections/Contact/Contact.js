import React from "react";
import "./Contact.css";
import MagicBento from "../../Components/MagicBento/MagicBento";
import InfiniteScroll from "../../Components/InfiniteScroll/InfiniteScroll";

const items = [
  {
    content: (
      <div>
        <p>
          Email -{" "}
          <a
            target="_blank"
            href="mailto:https://github.com/harshitchopra7"
            rel="noreferrer"
            style={{ textDecoration: "underline" }}
            type="email"
          >
            chopraharshit0909@gmail.com
          </a>
        </p>
      </div>
    ),
  },
  {
    content: (
      <div>
        <p>
          Linkedin -{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/harshit-chopra7/"
            rel="noreferrer"
            style={{ textDecoration: "underline" }}
          >
            https://www.linkedin.com/in/harshit-chopra7/
          </a>
        </p>
      </div>
    ),
  },
  {
    content: (
      <div>
        <p>
          Github -{" "}
          <a
            target="_blank"
            href="https://github.com/harshitchopra7"
            rel="noreferrer"
            style={{ textDecoration: "underline" }}
          >
            https://github.com/harshitchopra7
          </a>
        </p>
      </div>
    ),
  },
];

function Contact() {
  return (
    <div
      className="contact-container"
      id="contact"
      style={{ zIndex: "9 !important", background: "black" }}
    >
      <p>Contact</p>

      <div style={{ paddingTop: "50px" }}>
        <div
          style={{
            height: "500px",
            position: "relative",
            zIndex: "1 !important",
          }}
        >
          <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={0.5}
            autoplayDirection="down"
            pauseOnHover={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
