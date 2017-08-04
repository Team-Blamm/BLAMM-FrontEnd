//Import React and React-Dom
import React from "react";
import ReactDOM from "react-dom";

//Import Provider from Redux-React
import { Provider } from "react-redux";

//Import Redux Store
import store from "./store";

//IMPORT BROWSERROUTER FUNCTIONALITY
import { BrowserRouter, Route, Switch } from "react-router-dom";

//IMPORT CSS FILE HERE

//IMPORT COMPONENTS HERE
import App from "./components/App";
import Admin from "./components/Admin.js";
import ProductList from "./containers/ProductList.js";
import BaseLayout from "./components/base_layout.js";

import ProdDetail from "./containers/ProductCardRoute.js"

// import reducers from "./reducers/reducerIndex";

import CartPage from "./components/cart/CartPage.js";

//IMPORT REGISTERED SERVICE WORKER
import registerServiceWorker from "./components/registerServiceWorker";


//ROUTES
ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route path="/productlist/:product" component={ProdDetail} />
          <Route path="/productlist" component={ProductList} />
          <Route path="/Admin" component={Admin} />
          <Route path="/" component={App} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
