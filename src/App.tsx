import React, { FunctionComponent, useState, useEffect } from "react";
import "./App.css";

import { UserPosition, Contact, ContactTag } from "./UserCard";
import { UserList } from "./UserList";
import { UserFilter, UserFilterQuery } from "./UserFilter";
import { UserActions } from "./UserActions";
import { SortingDirection, UserSorting } from "./UserSorting";

interface RandomContact {
  name: {
    first: string;
    last: string;
  };
  dob: {
    age: number;
  };
  picture: {
    thumbnail: string;
  };
}

const sortByName = (direction: SortingDirection): ((a: Contact, b: Contact) => number) =>
  direction === SortingDirection.ASCENDING
    ? (a, b) => (a.name > b.name ? 1 : -1)
    : (a, b) => (a.name < b.name ? 1 : -1);

const App: FunctionComponent<{}> = () => {
  const [sorting, setSorting] = useState<SortingDirection>(SortingDirection.ASCENDING);
  const [filter, setFilter] = useState<UserFilterQuery>("");
  const [contacts, setContacts] = useState<Contact[]>([]);
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
  }, [contacts, sorting, filter]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20&seed=r")
      .then(response => response.json())
      .then(data => {
        setContacts(
          data.results.map(
            (contact: RandomContact, id: number): Contact => ({
              id,
              name: `${contact.name.first} ${contact.name.last}`,
              position: UserPosition.FRONTEND,
              photoUrl: contact.picture.thumbnail,
              tags:
                contact.dob.age < 35
                  ? [ContactTag.DEVELOPER]
                  : contact.dob.age > 35
                  ? [ContactTag.TECH_LEAD]
                  : contact.dob.age > 36
                  ? [ContactTag.MANAGER]
                  : [],
              favourite: contact.dob.age < 40
            })
          )
        );
      });
  }, []);

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
