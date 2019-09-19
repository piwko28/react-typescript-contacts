import { createStore, Action, ActionCreator, Reducer, combineReducers } from "redux";
import { Contact } from "./UserCard";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: Function;
  }
}

export interface ContactsState {
  selectedContact: Contact | null;
}

type ContactsActionType = string;

export interface ContactSelectedAction extends Action<ContactsActionType> {
  contact: Contact;
}

export const ContactSelectedActionType: ContactsActionType = "CONTACT_SELECTED";

export const contactSelected: ActionCreator<ContactSelectedAction> = (contact: Contact) => ({
  type: ContactSelectedActionType,
  contact
});

export const contactsInitialState: ContactsState = { selectedContact: null };

type ContactsActions = ContactSelectedAction;

export const contactsReducer: Reducer<ContactsState, ContactsActions> = (state = contactsInitialState, action) => {
  switch (action.type) {
    case ContactSelectedActionType:
      return {
        ...state,
        selectedContact: state.selectedContact !== action.contact ? action.contact : null
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  contactsReducer
});

export interface State {
  contactsReducer: ContactsState;
}

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
