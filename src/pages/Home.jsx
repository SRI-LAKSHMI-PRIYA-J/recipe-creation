import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [recipes, setRecipes] = useState([
    { id: 1, name: "Pasta", image: "/images/pasta.jpg", method: "Boil pasta and mix with sauce." },
    { id: 2, name: "Pizza", image: "/images/pizza.jpg", method: "Bake dough with toppings and cheese." }
  ]);

  // DELETE FUNCTION
  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  // UPDATE FUNCTION (Redirect to Update Page)
  const handleUpdate = (id) => {
    // You can navigate to an update page with the recipe ID
    console.log(`Navigate to update page for Recipe ID: ${id}`);
  };

  return (
    <div className="container mt-4">
      <div>
      <h2>Welcome to RecipeShare</h2>
      <img src="https://source.unsplash.com/400x300/?food" className="card-img-top" alt="Recipe Image" />

      </div>
      <Link to="/create" className="btn btn-success mb-3">Create Recipe</Link>
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-md-4">
            <div className="card">
              <img src={recipe.image} className="card-img-top" alt={recipe.name} />
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p>{recipe.method.substring(0, 30)}...</p>
                <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">View</Link>
                <button className="btn btn-warning mx-2" onClick={() => handleUpdate(recipe.id)}>Update</button>
                <button className="btn btn-danger" onClick={() => handleDelete(recipe.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
