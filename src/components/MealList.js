import React from "react";
import Meal from "./Meal";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const MealList = () => {
  const { loading, meals } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (meals.length === 0) {
    return <h2 className="section-title">nothing to show</h2>;
  }
  return (
    <div className="section">
      <h2 className="section-title">meals</h2>
      <div className="meals-center">
        {meals.map((meal) => {
          return <Meal key={meal.id} {...meal} />;
        })}
      </div>
    </div>
  );
};

export default MealList;
