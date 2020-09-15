import React from 'react';
import {Container} from "./components/Layouts/Container";
import Header from "./components/Layouts/Header";
import NavBar from "./components/Layouts/NavBar";
import {Wrapper} from "./components/Layouts/Wrapper";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {CartContainer} from "./containers/CartContainer";
import {GroceryContainer} from "./containers/GroceryContainer";
import {MovieContainer} from "./containers/MovieContainer";
import {PromotionsContainer} from "./containers/PromotionsContainer";
import {ResumeContainer} from "./containers/ResumeContainer";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <Header />
        <NavBar/>
        <Wrapper>
          <Container>
            <Switch>
              <Route exact path="/" component={MovieContainer} />
              <Route exact path="/movies" component={MovieContainer} />
              <Route exact path="/groceries" component={GroceryContainer} />
              <Route exact path="/resume" component={ResumeContainer} />
              <Route exact path="/promotions" component={PromotionsContainer} />
              <Route exact path="/cart" component={CartContainer} />
            </Switch>
          </Container>
        </Wrapper>
      </Router>
    </RecoilRoot>
  )
}


export default App;
