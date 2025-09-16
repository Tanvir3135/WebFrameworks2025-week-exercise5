import { useState, useEffect } from "react";
import { IRecipe } from "./Interfaces";
import RecipeTagList from "./components/RecipeTagList";
import RecipeList from "./components/RecipeList";

const App = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes/tags")
      .then((response) => response.json())
      .then((data) => setTags(data));
  }, []);

  useEffect(() => {
    if (selectedTag) {
      fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`)
        .then((response) => response.json())
        .then((data) => setRecipes(data.recipes));
    }
  }, [selectedTag]);

  const handleSelectTag = (tagName: string) => {
    setSelectedTag(tagName);
  };

  const handleBackToTags = () => {
    setSelectedTag(null);
    setRecipes([]);
  };

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        margin: "0 auto",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1>ACME Recipe O'Master</h1>
        {selectedTag ? (
          <div
            style={{
              minHeight: "100vh",
            }}
          >
            <button onClick={handleBackToTags}>Back to Tags</button>
            <RecipeList recipes={recipes} />
          </div>
        ) : (
          <div>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              Choose a tag below
            </p>
            <RecipeTagList tagList={tags} onSelectTag={handleSelectTag} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
