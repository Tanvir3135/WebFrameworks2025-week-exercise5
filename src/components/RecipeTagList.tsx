import RecipeTag from "./RecipeTag";

interface IRecipeTagListProps {
  tagList: string[];
  onSelectTag: (tagName: string) => void;
}

function RecipeTagList({ tagList, onSelectTag }: IRecipeTagListProps) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 10,
        margin: 0,
        border: "1px solid #ccc",
      }}
    >
      {tagList.map((tag) => (
        <RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />
      ))}
    </ul>
  );
}

export default RecipeTagList;
