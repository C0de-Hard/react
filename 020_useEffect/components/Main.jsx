import React, { useEffect, useState } from 'react';
import Search from "../components/Search";
import CountryCard from '../components/CountryCard';
// import countries from "world-countries"
import styles from './Main.module.css'

export default function Main() {
  const [query, setQuery] = useState('');
  const [countriesCard, setCountriesCard] = useState([]);
  useEffect(() => {
    fetch('https://countries.dev/countries')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCountriesCard(data)
  })
  }, [])
  return (
    <>
      <Search query={query} setQuery={setQuery} />
      <button type="button" onClick={() => setCountriesCard([])}>REMOVE ALL COUNTRIES</button>
      <div className={styles.main}>
        {
          countriesCard.filter((data) => data.name.toLowerCase().includes(query)).map((data) => {
            return <CountryCard alpha2Code={data.alpha2Code} name={(data.name.toUpperCase() != 'INDIA') ? data.name  : data.name  + "❤️"} region={data.region} capital={data.capital} key={data.alpha2Code} />
          })
        }
      </div>
    </>
  )
}