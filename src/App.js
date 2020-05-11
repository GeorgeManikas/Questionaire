import React, { useContext, Suspense } from "react";
import "./App.css";
import NewGameModal from "./components/NewGameModal";
import NoofQuestions from "./components/NoofQuestions";
import LevelSelect from "./components/LevelSelect";
import TypeOfQuestions from "./components/TypeOfQuestions";
import CategoriesList from "./components/CategoriesList";
import GameContext from "./context/store";
import axios from "axios";
import { Route , Switch } from 'react-router-dom'
import Question404 from "./components/Questions404";
// const CategoriesList = React.lazy(()=> import  ('./components/CategoriesList'));

function App() {
  const value = useContext(GameContext);
 

  return (
    <>
      <div className="App">
        <Suspense fallback={<p>loading....</p>}>
          <Switch>
            <Route exact path="/" ><NewGameModal></NewGameModal> </Route>
            <Route path="/error"> <Question404/> </Route>
          </Switch>
          
        </Suspense>
      </div>
    </>    

  );
}

export default App;
