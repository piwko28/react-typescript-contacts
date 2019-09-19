import { Contact } from "../components/list/UserCard";
import { UserFilterQuery } from "../components/actions/UserFilter";

export interface ContactsState {
  selectedContact: Contact | null;
  filterQuery: UserFilterQuery;
}

export const contactsInitialState: ContactsState = { selectedContact: null, filterQuery: "" };
