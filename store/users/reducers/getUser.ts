import { actionTypes, Action } from "../actions/getUser";
export interface GetUserInterfaces {
  user: any;
  isLoading: boolean;
  isLoaded: boolean;
  error: string;
}
export const initialState: any = {
  user: null,
  isLoading: false,
  isLoaded: false,
  error: null,
};
const getUser = (state = initialState, action: Action): GetUserInterfaces => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.data,
        isLoading: false,
      };
    case actionTypes.GET_USER_FAIL:
      return {
        ...state,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
};
export default getUser;
