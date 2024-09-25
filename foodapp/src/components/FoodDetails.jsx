import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css"; // Correct file path
import Ingredients from "./Ingredients";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API = "8be8d084685a4395af8320ba09eba7fe";

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${URL}?apiKey=${API}`);
        const data = await res.json();
        setFood(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Error fetching food data:", error);
        setIsLoading(false);
      }
    }
    fetchFood();
  }, [foodId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!food || !food.title) {
    return <p>No food details available.</p>;
  }

  return (
    <div>
      <div className={styles.recepieCard}>
        <h1 className={styles.recepiename}>{food.title}</h1>
        <img
          className={styles.recepieImage}
          src={food.image}
          alt={food.title}
        />
        <div className={styles.recepieDetails}>
          <span>
            <strong>🕙{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🍗 Non-vegetarian"}
            </strong>
          </span>
          <span>
            <strong>👩‍👩‍👧‍👧{food.servings} Servings</strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <strong>
            💲{(food.pricePerServing / 100).toFixed(2)} per serving
          </strong>
        </div>
        <div>
          <h2>Ingredients</h2>
          <Ingredients food={food} />
          <h2>Instructions</h2>
          <div className={styles.recipieInstructions}>
            <ol>
              {food.analyzedInstructions?.[0]?.steps ? (
                food.analyzedInstructions[0].steps.map((step, index) => (
                  <li key={`${foodId}-${index}`}>{step.step}</li>
                ))
              ) : (
                <p>No instructions available.</p>
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
