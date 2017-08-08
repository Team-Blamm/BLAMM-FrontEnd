import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import createStore from "./store";
//IMPORT CSS FILE HERE

import App from "./containers/App";
import CartContainer from "./containers/CartContainer";
import ProductsContainer from "./containers/ProductsContainer";
import ProductContainer from "./containers/ProductContainer";
import Base from "./containers/Base";

import test from "./components/test.js"
import test2 from "./components/test2.js"

import registerServiceWorker from "./components/registerServiceWorker";

const store = createStore;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Base>
        <Switch>
          <Route path="/admin/productlist/:product" component={test} />
          <Route path="/user/productlist/:product" component={test} />
          <Route path="/admin/productlist" component={test2} />
          <Route path="/user/productlist" component={test2} />
          {/* <Route path="/user/receipt" component={CartContainer} />
          <Route path="/user/shoppingCart" component={CartContainer} /> */}
          <Route path="/" component={App} />
        </Switch>
      </Base>
    </Router>
  </Provider>,

  document.getElementById("root")
);

registerServiceWorker();
