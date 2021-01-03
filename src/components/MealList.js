import React, { useState, useEffect } from "react";
import Meal from "./Meal";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const MealList = () => {
  const { loading, meals } = useGlobalContext();
  const [page, setPage] = useState(0);
  const [mealsPerpage, setMealsPerpage] = useState([]);

  useEffect(() => {
    setMealsPerpage(meals[page]);
  }, [loading, page]);

  if (loading) {
    return <Loading />;
  }

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > meals.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = meals.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };

  if (meals.length === 0) {
    return <h2 className="section-title">nothing to show</h2>;
  }
  return (
    <div className="section">
      <h2 className="section-title">meals</h2>
      <div className="meals-center">
        {mealsPerpage
          ? mealsPerpage.map((meal) => {
              return <Meal key={meal.id} {...meal} />;
            })
          : null}
      </div>

      <div className="btn-container">
        <button className="prev-btn" onClick={prevPage}>
          prev
        </button>
        {meals.map((item, index) => {
          return (
            <button
              key={index}
              className={`page-btn ${index === page ? "active-btn" : null}`}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          );
        })}
        <button className="next-btn" onClick={nextPage}>
          next
        </button>
      </div>
    </div>
  );
};

export default MealList;
