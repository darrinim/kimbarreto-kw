import React, { useState, useRef } from "react";
import "./Accordion.css";

const Accordion = (props) => {

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "");
    console.log('this is content scrollheight', content.current.scrollHeight);
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
);
  }
  const content = useRef(null);


  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        <i class="fas fa-chevron-right accordion__icon"
        ></i>
      </button>
      <div
        className="accordion__content"
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
