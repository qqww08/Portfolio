import { actionTypes } from "../actions/getBoard";
// Action interfaces
export interface GetBoard {
  type: actionTypes.GET_BOARD;
}
export interface GetBoardSuccess {
  type: actionTypes.GET_BOARD_SUCCESS;
  data: object;
}
export interface GetBoardFail {
  type: actionTypes.GET_BOARD_FAIL;
  error: Error;
}
