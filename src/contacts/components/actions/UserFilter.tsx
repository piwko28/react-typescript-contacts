import React, { FunctionComponent, KeyboardEvent } from "react";
import { connect } from "react-redux";
import { ActionCreator } from "redux";

import { contactsFilterQueryInput, ContactsFilterQueryInputAction } from "../../store/actions";
import "./UserFilter.css";

export type UserFilterQuery = string;

interface UserFilterProperties {
  onSearch: (input: UserFilterQuery) => void;
  contactsFilterQueryInput: ActionCreator<ContactsFilterQueryInputAction>;
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  contactsFilterQueryInput
};

export const UserFilterComponent: FunctionComponent<UserFilterProperties> = ({
  onSearch,
  contactsFilterQueryInput
}) => {
  const search = (event: KeyboardEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    contactsFilterQueryInput(value);
    onSearch(value);
  };

  return (
    <label className="userFilter">
      <span>Filter:</span>
      <input onKeyUp={search} />
    </label>
  );
};

export const UserFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserFilterComponent);
