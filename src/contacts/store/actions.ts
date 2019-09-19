import { ActionCreator, Action } from "redux";

import { Contact } from "../components/list/UserCard";
import { ContactSelectedActionType, ContactsActionType } from "./actionTypes";

export interface ContactSelectedAction extends Action<ContactsActionType> {
  contact: Contact;
}

export const contactSelected: ActionCreator<ContactSelectedAction> = (contact: Contact) => ({
  type: ContactSelectedActionType,
  contact
});

export type ContactsActions = ContactSelectedAction;
