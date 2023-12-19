import React from "react";
import "./CSS/Emailist.css";

import InboxIcon from "@material-ui/icons/Inbox";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
function Emailtype() {
  return (
    <div className="emailtype">
      <div className="emailtype_options emailtype_options--active">
        <InboxIcon />
        <p>Primary</p>
      </div>
      <div className="emailtype_options">
        <PeopleAltIcon />
        <p>Social</p>
      </div>
      <div className="emailtype_options">
        <LocalOfferIcon />
        <p>Promosion</p>
      </div>
    </div>
  );
}

export default Emailtype;
