import { actionTypes } from "./actions";
export interface GetMe {
  type: actionTypes.GET_ME;
  me: MeInterface;
}
export interface MeInterface {
  avatar: string;
  email: string;
  id: number;
  name: string;
  password: string;
}
