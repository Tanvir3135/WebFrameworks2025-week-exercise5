
import { IRecipe } from "../Interfaces";
import "./styles.css";

interface IRecipeProps {
  recipeData: IRecipe;
}

function Recipe({ recipeData }: IRecipeProps) {
  return (
    <div className="recipe-container">
      <h2>{recipeData.name}</h2>
      <div className="recipe-details">
        <div className="recipe-section">
          <h3>Ingredients:</h3>
          <ul>
            {recipeData.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="recipe-section">
          <h3>Instructions:</h3>
          <ol>
            {recipeData.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
