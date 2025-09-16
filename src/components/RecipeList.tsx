
import { IRecipe } from "../Interfaces";
import Recipe from "./Recipe";

interface IRecipeListProps {
  recipes: IRecipe[];
}

function RecipeList({ recipes }: IRecipeListProps) {
  return (
    <div>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipeData={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
