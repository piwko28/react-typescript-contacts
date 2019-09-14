import React, { FunctionComponent, useState } from "react";
import "./App.css";

import { UserPosition, Contact, ContactTag } from "./UserCard";
import { UserList } from "./UserList";
import { UserFilter, UserFilterQuery } from "./UserFilter";
import { UserActions } from "./UserActions";

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
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>(contacts);

  const onSearch = (input: UserFilterQuery) => {
    setFilteredContacts(
      contacts.filter(contact =>
        JSON.stringify(contact)
          .toLowerCase()
          .includes(input.toLowerCase())
      )
    );
  };

  return (
    <div>
      <UserActions>
        <UserFilter onSearch={onSearch} />
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
