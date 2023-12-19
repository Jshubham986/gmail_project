import React from "react";
import "./CSS/Emailist.css";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";

function Emailbody({ name, subject, message, time }) {
  return (
    <div className="emailbody">
      <div className="emailbody_left">
        <CheckBoxOutlineBlankIcon />
        <StarBorderIcon />
        <LabelOutlinedIcon />
        <h4>{name}</h4>
      </div>

      <div className="emailbody_middle">
        <div className="emailbody_middle_msg">
          <p>
            <b>{subject} </b> {message}
          </p>
        </div>
      </div>

      <div className="emailbody_right">
        <p>{time}</p>
      </div>
    </div>
  );
}

export default Emailbody;
