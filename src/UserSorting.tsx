import React, { FunctionComponent, useState } from "react";

export enum SortingDirection {
  ASCENDING = "asc",
  DESCENDING = "desc"
}

interface UserSortingProperties {
  onSort: (direction: SortingDirection) => void;
}

export const UserSorting: FunctionComponent<UserSortingProperties> = ({ onSort }) => {
  const [sorting, setSorting] = useState<SortingDirection>(SortingDirection.ASCENDING);
  const toggleSorting = () => {
    const newSorting =
      sorting === SortingDirection.ASCENDING ? SortingDirection.DESCENDING : SortingDirection.ASCENDING;
    setSorting(newSorting);
    onSort(newSorting);
  };

  return (
    <label className="userSorting">
      <span>Sorting:</span>
      <button onClick={toggleSorting}>{sorting === SortingDirection.ASCENDING ? "Ascending" : "Descending"}</button>
    </label>
  );
};
