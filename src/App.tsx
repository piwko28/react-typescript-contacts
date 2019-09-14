import React, { FunctionComponent } from "react";

import { UserPosition, Contact, ContactTag } from "./UserCard";
import { UserList } from "./UserList";

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
  return (
    <div>
      <div>
        <h1>Contacts</h1>
        <UserList contacts={contacts} />
      </div>
      <div>
        <h1>Favourites</h1>
        <UserList contacts={contacts.filter(contact => contact.favourite)} />
      </div>
    </div>
  );
};

export default App;
