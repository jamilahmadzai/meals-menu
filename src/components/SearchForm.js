import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchItem } = useGlobalContext();
  // const searchValue = React.useRef("");

  const searchMeal = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your meal</label>
          <input
            type="text"
            id="name"
            // ref={searchValue}
            onChange={searchMeal}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
