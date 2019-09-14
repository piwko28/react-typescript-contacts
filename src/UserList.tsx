import React, { FunctionComponent } from "react";

import { Contact, UserCard } from "./UserCard";

interface UserListProperties {
  contacts: Contact[];
}

export const UserList: FunctionComponent<UserListProperties> = ({ contacts }) => {
  return (
    <div className="contacts">
      {contacts.map(contact => (
        <UserCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
