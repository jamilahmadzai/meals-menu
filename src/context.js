import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useCallback } from "react";

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchItem, setSearchItem] = useState("a");
  const [meals, setMeals] = useState([]);

  const fetchMeals = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${url}${searchItem}`);
      const data = response.data;
      const { meals } = data;

      if (meals) {
        const newMeals = meals.map((meal) => {
          const { idMeal, strMeal, strMealThumb, strTags, strCategory } = meal;
          return {
            id: idMeal,
            name: strMeal,
            image: strMealThumb,
            tag: strTags,
            category: strCategory,
          };
        });
        setMeals(newMeals);
      } else {
        setMeals([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchItem]);

  useEffect(() => {
    fetchMeals();
  }, [searchItem, fetchMeals]);

  return (
    <AppContext.Provider value={{ loading, searchItem, meals, setSearchItem }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
