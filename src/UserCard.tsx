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
  tags?: ContactTag[];
  favourite?: boolean;
}

interface UserCardProperties {
  contact: Contact;
}

export const UserCard: FunctionComponent<UserCardProperties> = ({ contact }) => {
  const [isHovered, setHovered] = useState<boolean>(false);

  return (
    <div className="userCard" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <span className="photo"></span>
      <div className="details">
        <span className="name">{contact.name}</span>
        <span className="position">{contact.position}</span>
        {contact.tags ? <UserTags hidden={!isHovered} tags={contact.tags} /> : ""}
      </div>
    </div>
  );
};
