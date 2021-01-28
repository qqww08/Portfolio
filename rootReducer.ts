import { combineReducers } from "redux";

import getGlobal, { initialState as global } from "~/store/global/reducers";

export const initialState = {
  getGlobal: global,
};

export default combineReducers({ getGlobal });
