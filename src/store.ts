import { createStore, combineReducers } from "redux";

import { ContactsState } from "./contacts/store/state";
import { contactsReducer } from "./contacts/store/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: Function;
  }
}

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
