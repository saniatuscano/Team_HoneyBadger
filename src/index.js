

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
// import {Provider} from 'react-redux'
// import store from './store/index'
// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
    {/* <Provider > */}
      <App />
      {/* </Provider> */}
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
