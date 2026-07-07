import styles from "./Search.module.css";
export default () => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="_"/>
      <button>Search</button>
    </div>
  );
};
