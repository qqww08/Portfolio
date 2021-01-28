import * as actionIs from "../interfaces/getBoard";
export enum actionTypes {
  GET_BOARD = "GET_BOARD",
  GET_BOARD_SUCCESS = "GET_BOARD_SUCCESS",
  GET_BOARD_FAIL = "GET_BOARD_FAIL",
}
export type Action =
  | actionIs.GetBoard
  | actionIs.GetBoardSuccess
  | actionIs.GetBoardFail;
export function getBoard(): actionIs.GetBoard {
  return { type: actionTypes.GET_BOARD };
}
export function getBoardSuccess(data): actionIs.GetBoardSuccess {
  return {
    type: actionTypes.GET_BOARD_SUCCESS,
    data,
  };
}
export function getBoardFail(error: Error): actionIs.GetBoardFail {
  return {
    type: actionTypes.GET_BOARD_FAIL,
    error,
  };
}
