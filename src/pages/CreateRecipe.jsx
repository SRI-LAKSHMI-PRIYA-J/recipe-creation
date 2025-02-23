import React, { useState } from "react";

const CreateRecipe = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [method, setMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, ingredients, method });
  };

  return (
    <div className="container mt-4">
      <h2>Create New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Recipe Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Ingredients</label>
          <textarea className="form-control" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Preparation Method</label>
          <textarea className="form-control" value={method} onChange={(e) => setMethod(e.target.value)} required></textarea>
        </div>
        <button type="submit" className="btn btn-success">Submit Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
