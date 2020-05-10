import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import GameContext from '../context/store'

function CategoriesList() {
  const [categories, setCategories] = useState([]);
  // eslint-disable-next-line
  const [value,dispatch] = useContext(GameContext)  
  const fetchData = () => {
    let URL = "https://opentdb.com/api_category.php";
    axios
      .get(URL)
      .then((response) => setCategories(response.data.trivia_categories));
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleCategoryChange = (e) => {
      dispatch({action:{
          type:'PICK_CATEGORY',
          payload: e.target.value
      }})
  }

  return (
    <div>
      <select name="categories" onChange={(e) => handleCategoryChange(e)}>
        {categories.map((v) => (
          <option key={v.id} value={v.id}>
            {v.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoriesList;
