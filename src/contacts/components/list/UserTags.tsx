import React, { FunctionComponent } from "react";
import { connect } from "react-redux";

import { HighlightText } from "../../../shared/components/HighlightText";
import { State } from "../../../store";
import { UserFilterQuery } from "../actions/UserFilter";
import { ContactTag } from "./UserCard";
import "./UserTags.css";

interface UserTagsProperties {
  tags: ContactTag[];
  hidden: boolean;
  filterQuery: UserFilterQuery;
}

const mapStateToProps = ({ contactsReducer }: State) => {
  const { filterQuery } = contactsReducer;
  return {
    filterQuery
  };
};

const mapDispatchToProps = {};

export const UserTagsComponent: FunctionComponent<UserTagsProperties> = ({ tags, hidden, filterQuery }) => {
  return (
    <ul className={"userTags" + (hidden ? " hidden" : "")}>
      {tags.map(tag => (
        <li key={tag}>
          <HighlightText text={tag} highlighted={filterQuery} />
        </li>
      ))}
    </ul>
  );
};

export const UserTags = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTagsComponent);
