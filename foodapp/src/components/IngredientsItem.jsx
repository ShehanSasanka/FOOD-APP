import styles from "./ingredientsItem.module.css";
export default function IngredientsItem({ item, index }) {
  return (
    <div>
      <div key={index} className={styles.itemContainer}>
        <div className={styles.itemImage}>
          <img
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
            alt=""
          ></img>
        </div>
        <div className={styles.item}>
          <div className={styles.itemName}>{item.name}</div>
          <div className={styles.itemAmount}>
            {" "}
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
