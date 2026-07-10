import styles from "./Search.module.css";
export default ({ query, setQuery }) => {
  return (
    <div className={styles.search}>
      <input type="text" value={query} placeholder="_" 
      onChange={(e) => {setQuery(e.target.value.toLowerCase())}}
      />
      <button>Search</button>
    </div>
  );
};
