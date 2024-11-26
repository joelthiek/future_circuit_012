import React from "react";
import "./TemplateCard.css";

const TemplateCard = ({ card, handleSelect,templateName }) => {
  return (
    <div className="templatecardMain" onClick={()=> handleSelect(templateName)}>
      <img className="templateCardImg" src={card} alt="resumecard" />
      <div className="templateCardOverlay"></div>
      <button className="selectButton">Select</button>
    </div>
  );
};

export default TemplateCard;
