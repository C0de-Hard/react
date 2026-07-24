import React from 'react'
import styles from "./CountryCard.module.css"
import { Link } from 'react-router-dom';

export default function CountryCard({ country }) {
  const flagImg = `https://flagcdn.com/w320/${country.alpha2Code.toLowerCase()}.png`;

  return (
    <Link to= {`/country/${country.alpha2Code}`}>
    <div className={styles.card}>
      <img src={flagImg} />
      <div className={styles.details}>
        <h1><b>{country.name}</b></h1>
        <b><h2 className={styles.capital}>Region : {country.region}</h2></b>
        {/* <b><h2>Capital : {country.capital}</h2></b> */}
      </div>
    </div>
    </Link>
  )
}
