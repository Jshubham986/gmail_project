import React, { useState } from "react";
import "./CSS/Compose.css";
import RemoveIcon from "@material-ui/icons/Remove";
import HeightIcon from "@material-ui/icons/Height";
import CloseIcon from "@material-ui/icons/Close";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import LinkIcon from "@material-ui/icons/Link";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import PhotoIcon from "@material-ui/icons/Photo";
import PhonelinkLockIcon from "@material-ui/icons/PhonelinkLock";
import CreateIcon from "@material-ui/icons/Create";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { closeSendMesage } from "../Store/mailslice";
import db from '../firebase'
import firebase from "firebase/compat/app";


// const db = firebase.firestore()
function Compose() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const formsubmit = (e) => {
    e.preventDefault();
    if (to === "") {
      return alert("To is required");
    }
    if (subject === "") {
      return alert("Subject is required");
    }
    if (message === "") {
      return alert("Message is required");
    }
    // db.collection("Emails").add({
    //   to: to,
    //   subject: subject,
    //   message: message,
    //   createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    // })

    // setTo("");
    // setSubject("");
    // setMessage("");
    // alert("Email Send Successfully");
    // dispatch(closeSendMesage());

    db.collection("Emails")
  .add({
    to: to,
    subject: subject,
    message: message,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  })
  .then(() => {
    // Success
    console.log("Email added successfully");
    setTo("");
    setSubject("");
    setMessage("");
    alert("Email Sent Successfully");
    dispatch(closeSendMesage());
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
    alert("Error sending email. Please try again.");
  });
  };

  return (
    <div className="compose">
      <div className="compose_header">
        <div className="compose_header_left">
          <span>New Message</span>
        </div>
        <div className="compose_header_right">
          <RemoveIcon />
          <HeightIcon />
          <CloseIcon onClick={() => dispatch(closeSendMesage())} />
        </div>
      </div>
      <form onSubmit={formsubmit}>
        <div className="compose_body">
          <div className="compose_bodyForm">
            <input
              type="text"
              placeholder="Recipients"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />

            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <textarea
              rows={20}
              onChange={(e) => setMessage(e.target.value)}
            >
              {message}
            </textarea>
          </div>
        </div>

        <div className="compose_footer">
          <div className="compose_footer_left">
            <button type="submit">
              Send<ArrowDropDownIcon />
            </button>
          </div>

          <div className="compose_footer_right">
            <FormatColorTextIcon />
            <AttachFileIcon />
            <LinkIcon />
            <InsertEmoticonIcon />
            <NoteAddIcon />
            <PhotoIcon />
            <PhonelinkLockIcon />
            <CreateIcon />
            <MoreVertIcon />
            <DeleteIcon />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Compose;
