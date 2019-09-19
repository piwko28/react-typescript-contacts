import { Reducer } from "redux";

import { ContactsActions } from "./actions";
import { ContactSelectedActionType, ContactsFilterQueryInputActionType } from "./actionTypes";
import { ContactsState, contactsInitialState } from "./state";

export const contactsReducer: Reducer<ContactsState, ContactsActions> = (state = contactsInitialState, action) => {
  switch (action.type) {
    case ContactSelectedActionType:
      return {
        ...state,
        selectedContact: state.selectedContact !== action.contact ? action.contact : null
      };
    case ContactsFilterQueryInputActionType:
      return {
        ...state,
        filterQuery: action.filterQuery
      };
    default:
      return state;
  }
};
