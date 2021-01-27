import { Store } from "redux";
import { Task } from "redux-saga";
import { NextPageContext } from "next";
import { GlobalInterfaces } from "~/store/global/reducers";

export interface WithSagaTaskStore extends Store {
  sagaTask?: Task;
}
export interface WithReduxNextPageContext extends NextPageContext {
  store: WithSagaTaskStore; // Added with react-redux Provider in _app.tsx
  context: NextPageContext;
}

// TODO add state interface
export interface State {
  getGlobal: GlobalInterfaces;
}
