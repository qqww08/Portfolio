import { actionTypes, Action } from "../actions/getBoard";
export interface GetBoardInterfaces {
  board: any;
  isLoading: boolean;
  isLoaded: boolean;
  error: string;
}
export const initialState: any = {
  board: null,
  isLoading: false,
  isLoaded: false,
  error: null,
};
const getBoard = (state = initialState, action: Action): GetBoardInterfaces => {
  switch (action.type) {
    case actionTypes.GET_BOARD:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_BOARD_SUCCESS:
      return {
        ...state,
        board: action.data,
        isLoading: false,
      };
    case actionTypes.GET_BOARD_FAIL:
      return {
        ...state,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
};
export default getBoard;
