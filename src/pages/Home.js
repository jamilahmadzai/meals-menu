import React from "react";
import MealList from "../components/MealList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <div>
      <SearchForm />
      <MealList />
    </div>
  );
};

export default Home;
