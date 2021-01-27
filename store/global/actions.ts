import * as actionIs from "./interfaces";

export enum actionTypes {
  GET_ME = "GET_ME",
}
export type Action = actionIs.GetMe;

// 내 정보
export function getMe(me): actionIs.GetMe {
  return {
    type: actionTypes.GET_ME,
    me,
  };
}
