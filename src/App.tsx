import * as React from "react";
import { Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { ApolloProvider } from "react-apollo";
import { Router, Route } from "react-router";
import client from "./graphqlClient";
import store from "./store";
import history from "./history"
import { Layout } from "./modules/layout/index";
import { HomePage, ProductPage, CategoryPage } from "./pages/index";
import {Product, ProductModal, Tabs} from "./modules/product/index";


class ProductsSwitch extends React.Component<any,any> {

  // We can pass a location to <Switch/> that will tell it to
  // ignore the router's current location and use the location
  // prop instead.
  //
  // We can also use "location state" to tell the app the user
  // wants to go to `/images/2` in a modal, rather than as the
  // main page, keeping the gallery visible behind it.
  //
  // Normally, `/images/2` wouldn't match the gallery at `/`.
  // So, to get both screens to render, we can save the old
  // location and pass it to Switch, so it will think the location
  // is still `/` even though its `/images/2`.
  previousLocation = this.props.location

  componentWillUpdate(nextProps) {
    const { location } = this.props
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    // https://reacttraining.com/react-router/web/example/modal-gallery
    const { location } = this.props
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location // not initial render
    )
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route path="/category/:id" component={CategoryPage} />
          <Route path="/product/:id" component={ProductPage} />
        </Switch>
        {isModal ? <Route path="/product/:id" component={ProductModal} /> : null}
      </div>
    )
  }
}


// const App = () => {
//   return (
//     <ApolloProvider store={store} client={client}>
//       <ConnectedRouter history={history}>
//         <Layout>
//           <Route exact path="/" component={HomePage} />
//           <Route component={ProductsSwitch} />
//         </Layout>
//       </ConnectedRouter>
//     </ApolloProvider>
//   )
// }

const App = () => {
  return (
    <Tabs/>
  )
}

export default App;
