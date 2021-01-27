import { combineReducers } from "redux";
import getUser, { initialState as user } from "~/store/users/reducers/getUser";
import getGlobal, { initialState as global } from "~/store/global/reducers";
export const initialState = { getUser: user, getGlobal: global };

export default combineReducers({ getUser, getGlobal });
