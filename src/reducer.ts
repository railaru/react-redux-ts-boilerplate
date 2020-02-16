import { AppEvents } from "./events";
import { IAction } from "./actions";

//takes current state of the application and returns a new one

const initialState: IState = { age: 123, name: "" };

export interface IState {
  age: number;
  name: string;
}

export const reducer = (
  state: IState = initialState,
  action: IAction
): IState => {
  switch (action.type) {
    case AppEvents.SET_NAME:
      return { ...state, name: action.payload };

    case AppEvents.SET_AGE:
      return { ...state, age: action.payload };

    default:
      return state;
  }
};
