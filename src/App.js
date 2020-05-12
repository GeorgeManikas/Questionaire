import React, { useContext, Suspense } from "react";
import "./App.css";
import Game from "./components/game/Game";
import NewGameModal from "./components/NewGameModal";

import { Route, Switch } from "react-router-dom";
import Question404 from "./components/Questions404";
// const CategoriesList = React.lazy(()=> import  ('./components/CategoriesList'));

function App() {
  return (
    <>
      <div className="App">
        <Suspense fallback={<p>loading....</p>}>
          <Switch>
            <Route exact path="/">
              <NewGameModal />{" "}
            </Route>
            <Route path="/error">
              {" "}
              <Question404 />{" "}
            </Route>
            <Route path="/game">
              {" "}
              <Game />{" "}
            </Route>
          </Switch>
        </Suspense>
      </div>
    </>
  );
}

export default App;
