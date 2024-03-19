// Notifications 🔴
// Codédex

import React from "react";

export default function Notification(props) {
  let classString = "";
  if (props.isRead == false) {
    classString = "not-read";
  }
  return <div className={classString}>{props.message}</div>;
}
