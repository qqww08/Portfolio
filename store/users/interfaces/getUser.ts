import { actionTypes } from "../actions/getUser";
// Action interfaces
export interface GetUser {
  type: actionTypes.GET_USER;
}
export interface GetUserSuccess {
  type: actionTypes.GET_USER_SUCCESS;
  data: object;
}
export interface GetUserFail {
  type: actionTypes.GET_USER_FAIL;
  error: Error;
}
