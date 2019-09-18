import React, { FunctionComponent, useState } from "react";
import "./UserCard.css";

import { UserTags } from "./UserTags";

export enum UserPosition {
  FRONTEND = "Front-end Developer",
  BACKEND = "Back-end Devevloper",
  TESTER = "Quality Assurance"
}

export enum ContactTag {
  TECH_LEAD = "Technical Tead",
  DEVELOPER = "Developer",
  MANAGER = "Manager"
}

export interface Contact {
  id: number;
  name: string;
  position: UserPosition;
  photoUrl: string;
  tags?: ContactTag[];
  favourite?: boolean;
}

interface UserCardProperties {
  contact: Contact;
}

export const UserCard: FunctionComponent<UserCardProperties> = ({ contact }) => {
  const [isHovered, setHovered] = useState<boolean>(false);
  const [keepExpanded, setKeepExpanded] = useState<boolean>(false);
  const toggleKeepExpanded = () => setKeepExpanded(!keepExpanded);

  return (
    <div
      className="userCard"
      onClick={toggleKeepExpanded}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className="photo" src={contact.photoUrl} alt="thumbnail" />
      <div className="details">
        <span className="name">{contact.name}</span>
        <span className="position">{contact.position}</span>
        {contact.tags ? <UserTags hidden={!isHovered && !keepExpanded} tags={contact.tags} /> : ""}
      </div>
    </div>
  );
};
