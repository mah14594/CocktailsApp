import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const enteredValue = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    enteredValue.current.focus();
  }, []);
  const searchCocktailHandler = () => {
    setSearchTerm(enteredValue.current.value);
  };
  // setSearchTerm(enteredValue);
  return (
    <section className="section search">
      <form className="search-form" onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={enteredValue}
            onChange={searchCocktailHandler}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
