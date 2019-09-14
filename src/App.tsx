import React, { FunctionComponent, useState } from "react";
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

const App: FunctionComponent<{}> = () => {
  const [sorting, setSorting] = useState<SortingDirection>(SortingDirection.ASCENDING);
  const sortByName = (a: Contact, b: Contact): number =>
    sorting === SortingDirection.ASCENDING ? (a.name > b.name ? 1 : -1) : a.name < b.name ? 1 : -1;
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>(contacts.sort(sortByName));

  const onSearch = (input: UserFilterQuery) => {
    setFilteredContacts(
      contacts
        .filter(contact =>
          JSON.stringify(contact)
            .toLowerCase()
            .includes(input.toLowerCase())
        )
        .sort(sortByName)
    );
  };

  const onSort = (direction: SortingDirection) => {
    setSorting(direction);
    setFilteredContacts(filteredContacts.sort(sortByName));
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
