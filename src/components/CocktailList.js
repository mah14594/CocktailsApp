import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading></Loading>;
  }
  if (cocktails.length < 1) {
    return <h2 className="section-title">No Cocktails found!</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item, index) => {
          return (
            <Cocktail
              key={index}
              data={{
                id: item.idDrink,
                name: item.strDrink,
                image: item.strDrinkThumb,
                info: item.strAlcoholic,
                glass: item.strGlass,
              }}
            ></Cocktail>
          );
        })}
        ;
      </div>
    </section>
  );
};

export default CocktailList;
