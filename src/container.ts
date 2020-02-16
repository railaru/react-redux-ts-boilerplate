import { Dispatch } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import { App as Container } from "./App";
import { SetAge, IAction } from "./actions";
import { IAppState } from "./store";

const mapStateToProps = (state: IAppState) => {
  return {
    age: state.app.age
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    onClick: () => dispatch(SetAge(Math.random()))
  };
};

export const App = compose(connect(mapStateToProps, mapDispatchToProps))(
  Container
);
