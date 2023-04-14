import React from "react";

const Notification = ({ message, type }) => {
  if (message === null) {
    return;
  }
  return (
    <div className={type === "success" ? "success" : "error"}>{message}</div>
  );
};

export default Notification;
