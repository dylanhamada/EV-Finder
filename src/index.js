import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import findReducer from "./store/reducers/find";
import authReducer from "./store/reducers/auth";
import userReducer from "./store/reducers/user";
import browseReducer from "./store/reducers/browse";
import compareReducer from "./store/reducers/compare";
import * as serviceWorker from "./serviceWorker";

const rootReducer = combineReducers({
  find: findReducer,
  auth: authReducer,
  user: userReducer,
  browse: browseReducer,
  compare: compareReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
