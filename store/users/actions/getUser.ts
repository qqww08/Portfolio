import * as actionIs from "../interfaces/getUser";
export enum actionTypes {
  GET_USER = "GET_USER",
  GET_USER_SUCCESS = "GET_USER_SUCCESS",
  GET_USER_FAIL = "GET_USER_FAIL",
}
export type Action =
  | actionIs.GetUser
  | actionIs.GetUserSuccess
  | actionIs.GetUserFail;
export function getUser(): actionIs.GetUser {
  return { type: actionTypes.GET_USER };
}
export function getUserSuccess(data): actionIs.GetUserSuccess {
  return {
    type: actionTypes.GET_USER_SUCCESS,
    data,
  };
}
export function getUserFail(error: Error): actionIs.GetUserFail {
  return {
    type: actionTypes.GET_USER_FAIL,
    error,
  };
}
