import React, { FunctionComponent, useState } from "react";
import { connect } from "react-redux";
import { ActionCreator } from "redux";

import { State } from "../../../store";
import { contactSelected, ContactSelectedAction } from "../../store/actions";
import { ContactsState } from "../../store/state";
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
  selectedContact: ContactsState["selectedContact"];
  contactSelected: ActionCreator<ContactSelectedAction>;
}

const mapStateToProps = ({ contactsReducer }: State) => {
  const { selectedContact } = contactsReducer;
  return {
    selectedContact
  };
};

const mapDispatchToProps = {
  contactSelected
};

const UserCardComponent: FunctionComponent<UserCardProperties> = ({ contact, selectedContact, contactSelected }) => {
  const [isHovered, setHovered] = useState<boolean>(false);
  const [keepExpanded, setKeepExpanded] = useState<boolean>(false);
  const toggleKeepExpanded = () => setKeepExpanded(!keepExpanded);

  const onClick = () => {
    toggleKeepExpanded();
    contactSelected(contact);
  };

  return (
    <div
      className={"userCard" + (selectedContact === contact ? " selected" : "")}
      onClick={onClick}
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

export const UserCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCardComponent);
