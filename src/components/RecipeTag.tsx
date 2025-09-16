interface IRecipeTagProps {
  tagName: string;
  onSelectTag: (tagName: string) => void;
}

function RecipeTag({ tagName, onSelectTag }: IRecipeTagProps) {
  return (
    <li
      style={{
        padding: "5px 10px",
        margin: "5px",
        border: "1px solid #ccc",
      }}
      onClick={() => onSelectTag(tagName)}
    >
      {tagName}
    </li>
  );
}

export default RecipeTag;
