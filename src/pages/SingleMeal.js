import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

const url = "http://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const SingleMeal = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [meal, setMeal] = useState("");

  useEffect(() => {
    setLoading(true);
    async function getMeal() {
      try {
        const response = await axios.get(`${url}${id}`);
        const data = response.data;
        if (data.meals) {
          const {
            idMeal: id,
            strMeal: name,
            strMealThumb: image,
            strTags: tag,
            strCategory: category,
            strArea: area,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
          } = data.meals[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
          ];

          const newMeal = {
            id,
            name,
            image,
            tag,
            area,
            category,
            ingredients,
          };

          setMeal(newMeal);
        } else {
          setMeal("");
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getMeal();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!meal) {
    return <h2 className="section-title">no meal found</h2>;
  }

  const { name, image, tag, area, category, ingredients } = meal;
  return (
    <div className="section meal-section">
      <Link to="/" className="btn btn-primary">
        Home
      </Link>
      <h2 className="section-title">{name} </h2>
      <div className="dish">
        <img src={image} alt="name" />
        <div className="dish-info">
          <p>
            <span className="dish-data">name: </span>
            {name}
          </p>
          <p>
            <span className="dish-data">tag: </span>
            {tag ? tag : "Meal"}
          </p>
          <p>
            <span className="dish-data">region of origin: </span>
            {area}
          </p>
          <p>
            <span className="dish-data">category: </span>
            {category}
          </p>
          <p>
            <span className="dish-data">ingredients: </span>
            {ingredients.map((ingredient, index) => {
              return ingredient ? (
                <span key={index}> {`${ingredient}, `}</span>
              ) : null;
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleMeal;
