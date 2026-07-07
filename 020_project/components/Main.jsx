import React from 'react';
import countries from "world-countries"
import CountryCard from '../components/CountryCard';
import styles from './Main.module.css'
export default function Main() {
  return (
    <div className={styles.main}>
      {
      countries.map((data) => {
        return <CountryCard cca2={data.cca2} commonName={data.name.common} region={data.region} capital={data.capital} key={data.cca2}/>
      })
      }
    </div>
  )
}
