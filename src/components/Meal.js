import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Meal = ({ id, name, tag, image, category }) => {
  const { setSearchItem } = useGlobalContext();

  return (
    <div className="meal">
      <div className="img-container">
        <img src={image} alt="name" />
      </div>
      <div className="meal-footer">
        <h3>{name}</h3>
        <h4>{category}</h4>
        <p>{tag ? tag : "Meal"}</p>
        <Link
          to={`meal/${id}`}
          className="btn btn-primary btn-details"
          onClick={() => setSearchItem("")}
        >
          details
        </Link>
      </div>
    </div>
  );
};

export default Meal;
