import React, { FunctionComponent, KeyboardEvent, useState } from "react";
import "./UserFilter.css";

export type UserFilterQuery = string;

interface UserFilterProperties {
  onSearch: (input: UserFilterQuery) => void;
}

export const UserFilter: FunctionComponent<UserFilterProperties> = ({ onSearch }) => {
  const search = (event: KeyboardEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    onSearch(value);
  };

  return (
    <label className="userFilter">
      <span>Filter:</span>
      <input onKeyUp={search} />
    </label>
  );
};
