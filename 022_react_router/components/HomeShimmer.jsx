import styles from "./HomeShimmer.module.css"

export default () => <>{Array.from({ length: 12 }).map((ele, i) => <div className={styles.shimmerCard} key={i}>
    <div className={styles.pic}></div>
    <div className={styles.details}>
        <h2 className={styles.region}> xxxxxxxxx</h2>
        <h2 className={styles.capital}>xxxxxxxxxxx</h2>
    </div>
</div>)}</>