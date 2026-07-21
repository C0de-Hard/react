import React from 'react'
import styles from "./CountryCard.module.css"

export default function CountryCard({ alpha2Code, name, region, capital }) {
  const flagImg = alpha2Code ? `https://flagcdn.com/w320/${alpha2Code.toLowerCase()}.png` : null;

  return (
    <div className={styles.card}>
      <img src={flagImg} />
      <div className={styles.details}>
        <h1><b>{name}</b></h1>
        <b><h2>Region : {region}</h2></b>
        <b><h2>Capital : {capital}</h2></b>
      </div>
    </div>
  )
}
