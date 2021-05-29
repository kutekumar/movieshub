import { Container } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import React from "react";

function App() {
  return (
    <div>
      <Header />
      <div className='app'>
        <Container>
          <Switch>
            <Route path='/' component={Trending} exact />
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
            <Route path='/search' component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}

export default App;
