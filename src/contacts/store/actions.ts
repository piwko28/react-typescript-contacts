import { ActionCreator, Action } from "redux";

import { Contact } from "../components/list/UserCard";
import { ContactSelectedActionType, ContactsActionType, ContactsFilterQueryInputActionType } from "./actionTypes";
import { UserFilterQuery } from "../components/actions/UserFilter";

export interface ContactSelectedAction extends Action<ContactsActionType> {
  contact: Contact;
}

export const contactSelected: ActionCreator<ContactSelectedAction> = (contact: Contact) => ({
  type: ContactSelectedActionType,
  contact
});

export interface ContactsFilterQueryInputAction extends Action<ContactsActionType> {
  filterQuery: UserFilterQuery;
}

export const contactsFilterQueryInput: ActionCreator<ContactsFilterQueryInputAction> = (
  filterQuery: UserFilterQuery
) => ({
  type: ContactsFilterQueryInputActionType,
  filterQuery
});

export type ContactsActions = ContactSelectedAction & ContactsFilterQueryInputAction;
