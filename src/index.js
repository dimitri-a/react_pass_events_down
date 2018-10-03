import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import sagaMonitor from "./sagaMonitor";

import Counter from "./components/Counter";
import reducer from "./reducers";
import rootSaga from "./sagas";
import App from "./App";
import RefComp from './RefComp'

//const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const store = createStore(reducer);
//sagaMiddleware.run(rootSaga);


const action = type => store.dispatch({ type });

function render() {
  ReactDOM.render(
   <RefComp/>,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);
