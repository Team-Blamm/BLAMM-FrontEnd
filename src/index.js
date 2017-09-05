import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";



import createStore from "./store";

//IMPORT CSS FILE HERE
import "./styles/font-awesome-4.7.0/css/font-awesome.css";

import App from "./containers/App";
import Base from "./containers/Base";
import Detail from "./components/Detail.js"
import Listings from "./components/Listings.js"
import CartContainer from "./containers/CartContainer";
import FormContainer from "./containers/FormContainer";

import registerServiceWorker from "./components/registerServiceWorker";

const store = createStore;


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Base>
        <Switch>
          <Route exact path="/productlist/newProduct" component={FormContainer} />
          <Route exact path="/productlist/:product" component={Detail} />
          <Route exact path="/productlist" component={Listings} />
          {/* <Route path="/user/receipt" component={CartContainer} /> */}
          <Route path="/shoppingCart" component={CartContainer} />
          <Route path="/" component={App} />
        </Switch>
      </Base>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

registerServiceWorker();
