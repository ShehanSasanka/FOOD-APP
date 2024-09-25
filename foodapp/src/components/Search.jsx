import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API = "8be8d084685a4395af8320ba09eba7fe";

export default function Search({ foodData, setfoodData }) {
  const [query, changeQuary] = useState("Pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API}`);
      const data = await res.json();
      console.log(data.results);
      setfoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => changeQuary(e.target.value)}
        type="text"
      ></input>
    </div>
  );
}
