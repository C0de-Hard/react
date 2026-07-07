import React from 'react'
import styles from "./CountryCard.module.css"

export default function CountryCard({ cca2, commonName, region, capital }) {
  return (
    <div className={styles.card}>
      <img src={`https://flagcdn.com/w320/${cca2.toLowerCase()}.png`} />
      <div className={styles.details}>
        <h1><b>{commonName}</b></h1>
        <b><h2>Region : {region}</h2></b>
        <b><h2>Capital : {capital}</h2></b>
      </div>
    </div>
  )
}
