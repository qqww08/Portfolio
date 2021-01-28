import { Action, actionTypes } from "./actions";
import { MeInterface } from "~/store/global/interfaces";

export interface GlobalInterfaces {
  me: MeInterface;
}

export const initialState: any = {
  me: null,
};
const getGlobal = (state = initialState, action: Action): GlobalInterfaces => {
  switch (action.type) {
    case actionTypes.GET_ME:
      console.log(action);
      return {
        ...state,
        me: action.me,
      };

    default:
      return state;
  }
};

export default getGlobal;
