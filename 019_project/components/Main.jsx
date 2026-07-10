import React, { useState } from 'react';
import Search from "../components/Search";
import CountryCard from '../components/CountryCard';
import countries from "world-countries"
import styles from './Main.module.css'

export default function Main() {
  const [query, setQuery] = useState('');
  return (
    <>
      <Search query={query} setQuery={setQuery} />
      <div className={styles.main}>
        {
          countries.filter((data) => data.name.common.toLowerCase().includes(query)).map((data) => {
            return <CountryCard cca2={data.cca2} commonName={(data.name.common.toUpperCase() != 'INDIA') ? data.name.common : data.name.common+"❤️"} region={data.region} capital={data.capital} key={data.cca2} />
          })
        }
      </div>
    </>
  )
}