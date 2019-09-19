import { Reducer } from "redux";

import { ContactsActions } from "./actions";
import { ContactSelectedActionType } from "./actionTypes";
import { ContactsState, contactsInitialState } from "./state";

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
