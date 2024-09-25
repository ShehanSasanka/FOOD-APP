import IngredientsItem from "./IngredientsItem";

export default function Ingredients({ food }) {
  return (
    <div>
      {food.extendedIngredients ? (
        food.extendedIngredients.map((item, index) => (
          <IngredientsItem key={item.id || index} item={item} />
        ))
      ) : (
        <p>No ingredients available.</p>
      )}
    </div>
  );
}
