import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import createStore from "./store";
//IMPORT CSS FILE HERE

import App from "./containers/App";
import CartPage from "./components/cart/CartPage";
import ProductsContainer from "./containers/ProductsContainer";
import ProductContainer from "./containers/ProductContainer";
import Base from "./containers/Base";

import test from "./components/test.js"
import test2 from "./components/test2.js"

import registerServiceWorker from "./components/registerServiceWorker";

const store = createStore;
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Base>
        <Switch>
          <Route exact path="/admin/productlist/:product" component={test} />
          <Route exact path="/user/productlist/:product" component={test} />
          <Route exact path="/admin/productlist" component={test2} />
          <Route exact path="/user/productlist" component={test2} />
          {/* <Route path="/user/receipt" component={CartContainer} /> */}
          <Route path="/user/shoppingCart" component={CartPage} />
          <Route path="/" component={App} />
        </Switch>
      </Base>
    </ConnectedRouter>
  </Provider>,

  document.getElementById("root")
);

registerServiceWorker();
