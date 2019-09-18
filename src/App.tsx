import React, { FunctionComponent, useState, useEffect } from "react";
import "./App.css";

import { UserPosition, Contact, ContactTag } from "./UserCard";
import { UserList } from "./UserList";
import { UserFilter, UserFilterQuery } from "./UserFilter";
import { UserActions } from "./UserActions";
import { SortingDirection, UserSorting } from "./UserSorting";

const contacts: Contact[] = [
  {
    id: 1,
    name: "Szymon Piwowarczyk",
    position: UserPosition.FRONTEND,
    favourite: true
  },
  {
    id: 2,
    name: "Patsy Burton",
    position: UserPosition.TESTER
  },
  {
    id: 3,
    name: "grgrs",
    position: UserPosition.BACKEND,
    tags: [ContactTag.MANAGER]
  }
];

const sortByName = (direction: SortingDirection): ((a: Contact, b: Contact) => number) =>
  direction === SortingDirection.ASCENDING
    ? (a, b) => (a.name > b.name ? 1 : -1)
    : (a, b) => (a.name < b.name ? 1 : -1);

const App: FunctionComponent<{}> = () => {
  const [sorting, setSorting] = useState<SortingDirection>(SortingDirection.ASCENDING);
  const [filter, setFilter] = useState<UserFilterQuery>("");
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);

  const contactFilter = (contact: Contact, filter: UserFilterQuery): boolean => {
    return filter
      ? JSON.stringify(contact)
          .toLowerCase()
          .includes(filter.toLowerCase())
      : true;
  };

  useEffect(() => {
    setFilteredContacts(contacts.filter(contact => contactFilter(contact, filter)).sort(sortByName(sorting)));
  }, [sorting, filter]);

  const onSearch = (input: UserFilterQuery) => {
    setFilter(input);
  };

  const onSort = (direction: SortingDirection) => {
    setSorting(direction);
    setFilteredContacts(filteredContacts.sort(sortByName(sorting)));
  };

  return (
    <div>
      <UserActions>
        <UserFilter onSearch={onSearch} />
        <UserSorting onSort={onSort} />
      </UserActions>
      <div>
        <h1>Contacts</h1>
        <UserList contacts={filteredContacts} />
      </div>
      <div>
        <h1>Favourites</h1>
        <UserList contacts={filteredContacts.filter(contact => contact.favourite)} />
      </div>
    </div>
  );
};

export default App;
