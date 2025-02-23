import React from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();

  return (
    <div className="container mt-4">
      <h2>Recipe Details for ID: {id}</h2>
      <p>Recipe preparation method goes here...</p>
    </div>
  );
};

export default RecipeDetails;
