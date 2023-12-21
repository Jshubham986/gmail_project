import React from "react";
import "./CSS/Emailist.css";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMessage } from "../Store/mailslice";


function Emailbody({ name, subject, message, time }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const setMail = () => {
    dispatch(openMessage({
      name, subject, message, time
    }))
    navigate("/mail")
  }
  return (
    <div className="emailbody" onClick={setMail}>
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
