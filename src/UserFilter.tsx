import React, { FunctionComponent, KeyboardEvent, useState } from "react";
import "./UserFilter.css";

export type UserFilterQuery = string;

interface UserFilterProperties {
  onSearch: (input: UserFilterQuery) => void;
}

export const UserFilter: FunctionComponent<UserFilterProperties> = ({ onSearch }) => {
  const [filterQuery, setFilterQuery] = useState<UserFilterQuery>("");

  const search = (event: KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setFilterQuery(target.value);
    onSearch(filterQuery);
  };

  return (
    <label className="userFilter">
      <span>Filter:</span>
      <input onKeyUp={search} />
    </label>
  );
};
