import React, { FunctionComponent, useState } from "react";

export enum SortingDirection {
  ASCENDING,
  DESCENDING
}

interface UserSortingProperties {
  onSort: (direction: SortingDirection) => void;
}

export const UserSorting: FunctionComponent<UserSortingProperties> = ({ onSort }) => {
  const [sorting, setSorting] = useState<SortingDirection>(SortingDirection.ASCENDING);
  const toggleSorting = () => {
    setSorting(sorting === SortingDirection.ASCENDING ? SortingDirection.DESCENDING : SortingDirection.ASCENDING);
    onSort(sorting);
  };

  return (
    <div className="userSorting" onClick={toggleSorting}>
      <button>{sorting === SortingDirection.ASCENDING ? "Ascending" : "Descending"}</button>
    </div>
  );
};
