import React, { useContext } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="text-center mt-5">
      <div>
        <h1>Characters</h1>
        <div className="row">
         {store.characters.map((character,index)=>{
          return ( <div className="col">
          <Card item= {character} index={index}/>
        </div>)
         })}
        </div>
      </div>
    </div>
  );
};
