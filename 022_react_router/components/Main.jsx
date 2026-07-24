import React, { useEffect, useState } from 'react';
import Search from "../components/Search";
import HomeShimmer from "../components/HomeShimmer";
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
        // console.log(data)
        setCountriesCard(data)
      })
  }, [])

  return (
    <>
      <Search query={query} setQuery={setQuery} />
      {/* <button type="button" onClick={() => setCountriesCard([])}>REMOVE ALL COUNTRIES</button> */}
      <div className={styles.main}>
        {countriesCard.length === 0 ? <HomeShimmer /> :

          countriesCard.filter((data) => data.name.toLowerCase().includes(query)).map((data) => {
            return <CountryCard country={data} key={data.alpha2Code} />
          })
        }
      </div>
    </>
  )
}