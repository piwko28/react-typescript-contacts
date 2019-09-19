import React, { FunctionComponent, useState } from "react";
import { connect } from "react-redux";
import { ActionCreator } from "redux";

import { HighlightText } from "../../../shared/components/HighlightText";
import { State } from "../../../store";
import { contactSelected, ContactSelectedAction } from "../../store/actions";
import { ContactsState } from "../../store/state";
import { UserFilterQuery } from "../actions/UserFilter";
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
  filterQuery: UserFilterQuery;
}

const mapStateToProps = ({ contactsReducer }: State) => {
  const { selectedContact, filterQuery } = contactsReducer;
  return {
    selectedContact,
    filterQuery
  };
};

const mapDispatchToProps = {
  contactSelected
};

const UserCardComponent: FunctionComponent<UserCardProperties> = ({
  contact,
  selectedContact,
  contactSelected,
  filterQuery
}) => {
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
        <span className="name">
          <HighlightText text={contact.name} highlighted={filterQuery} />
        </span>
        <span className="position">
          <HighlightText text={contact.position} highlighted={filterQuery} />
        </span>
        {contact.tags ? <UserTags hidden={!isHovered && !keepExpanded} tags={contact.tags} /> : ""}
      </div>
    </div>
  );
};

export const UserCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCardComponent);
