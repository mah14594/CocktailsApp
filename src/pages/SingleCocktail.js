import React from "react";
import { useEffect, useState, useCallback } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const params = useParams();
  const ID = params.id;
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchDrink = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${ID}`);
      const data = await response.json();
      console.log(data.drinks);
      if (data.drinks) {
        setCocktail(data.drinks[0]);
      } else {
        setCocktail(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [ID]);
  useEffect(() => {
    fetchDrink();
  }, [fetchDrink]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const {
      strDrink: name,
      strDrinkThumb: image,
      strAlcoholic: category,
      strCategory: info,
      strGlass: glass,
      strInstructions: instructions,
      strIngredient1,
      strIngredient2,
      strIngredient3,
    } = cocktail;
    const ingredients = [strIngredient1, strIngredient2, strIngredient3];
    console.log(name);
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name}></img>
          <div className="drink-info">
            <p>
              <span className="drink-data">name :</span> {name}
            </p>
            <p>
              <span className="drink-data">category :</span> {category}
            </p>
            <p>
              <span className="drink-data">info :</span> {info}
            </p>
            <p>
              <span className="drink-data">glass :</span> {glass}
            </p>
            <p>
              <span className="drink-data">instructions :</span> {instructions}
            </p>
            <p>
              <span className="drink-data">ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null;
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default SingleCocktail;
