import styles from "./Search.module.css";
export default ({ query, setQuery }) => {
  return (
    <div style={{padding: '20px', background: 'linear-gradient(180deg, #f8f3eb 0%, #fffaf4 55%, #f4efe6 100%'}}>

      <div className={styles.search}>
        <input type="text" value={query} placeholder="_"
          onChange={(e) => { setQuery(e.target.value.toLowerCase()) }}
        />
        <button>Search</button>
      </div>
    </div>
  );
};
