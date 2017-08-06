import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import createStore from "./store";

//IMPORT CSS FILE HERE

import App from "./containers/App";
import CartContainer from "./containers/CartContainer.js";
import ProductsContainer from "./containers/ProductsContainer";
import ProductContainer from "./containers/ProductContainer";
import BaseLayout from "./containers/BaseLayout";


import registerServiceWorker from "./components/registerServiceWorker";

{/* If we want to do Authentication or Responsive Design,
we would need to create those actions/reducers to control
states, and we would need to import them and dispatch them
here, so we can set the environment of the whole app. We can
create a series of conditionals that tells the App how to
render, based on whether the user has authenticated and
whether the media size should be display or mobile. */}

ReactDOM.render(
  <Provider store={createStore}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route path="/admin/productlist/name/:product" component={ProductContainer} />
          <Route path="/user/productlist/name/:product" component={ProductContainer} />
          <Route path="/admin/productlist" component={ProductsContainer} />
          <Route path="/user/productlist" component={ProductsContainer} />
          <Route path="/user/receipt" component={CartContainer} />
          <Route path="/user/shoppingCart" component={CartContainer} />
          <Route path="/" component={App} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
