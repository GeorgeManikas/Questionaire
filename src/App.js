import React, { useContext, Suspense } from "react";
import "./App.css";
import NewGameModal from "./components/NewGameModal";
import NoofQuestions from "./components/NoofQuestions";
import LevelSelect from "./components/LevelSelect";
import TypeOfQuestions from "./components/TypeOfQuestions";
import CategoriesList from "./components/CategoriesList";
import GameContext from "./context/store";
import axios from "axios";

// const CategoriesList = React.lazy(()=> import  ('./components/CategoriesList'));

function App() {
  const value = useContext(GameContext);
  const { category, amount, difficulty, type } = value[0];
  const fetchQuestions = () => {
    URL = "https://opentdb.com/api.php";
    // let fetch_string = `${URL}/?amount=${value[0].amount}&category=${value[0].category}&difficulty=${value[0].difficulty}&type=${value[0].type}`
    axios
      .get(URL, {
        params: {
          category: category === null ? "" : value[0].category,
          amount,
          difficulty,
          type
        }
      })
      .then(res => console.log(res.data));
  };

  return (
    <>
      <div className="App">
        <Suspense fallback={<p>loading....</p>}>
          <NewGameModal />
        </Suspense>
        <button onClick={fetchQuestions}> Submit </button>
      </div>
    </>
  );
}

export default App;
