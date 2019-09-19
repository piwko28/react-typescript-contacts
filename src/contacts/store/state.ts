import { Contact } from "../components/list/UserCard";

export interface ContactsState {
  selectedContact: Contact | null;
}

export const contactsInitialState: ContactsState = { selectedContact: null };
