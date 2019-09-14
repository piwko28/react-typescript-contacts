import React, { FunctionComponent } from "react";
import "./UserCard.css";

enum UserPosition {
  FRONTEND = "Front-end Developer",
  BACKEND = "Back-end Devevloper",
  TESTER = "Quality Assurance"
}

interface Contact {
  name: string;
  position: UserPosition;
}

export const UserCard: FunctionComponent<{}> = () => {
  const contact: Contact = {
    name: "Szymon Piwowarczyk",
    position: UserPosition.FRONTEND
  };
  return (
    <div className="userCard">
      <span className="photo"></span>
      <div className="details">
        <span className="name">{contact.name}</span>
        <span className="position">{contact.position}</span>
      </div>
    </div>
  );
};
