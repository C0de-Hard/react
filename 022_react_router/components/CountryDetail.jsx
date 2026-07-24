import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styles from './CountryDetail.module.css';

function formatList(items) {
  if (!items || items.length === 0) {
    return 'Not available';
  }

  return items
    .map((item) => {
      if (typeof item === 'string' || typeof item === 'number') {
        return item;
      }

      return item.name || item.nativeName || item.code || 'Unknown';
    })
    .join(', ');
}

export default function CountryDetail() {
  const { code } = useParams();
  const location = useLocation();
  const [country, setCountry] = useState(location.state?.country || null);
  const [loading, setLoading] = useState(!location.state?.country);

  useEffect(() => {
    if (country) {
      setLoading(false);
      return;
    }

    fetch('https://countries.dev/countries')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const found = data.find((item) => item.alpha2Code === code || item.alpha3Code === code || item.name.toLowerCase() === code?.toLowerCase());
        setCountry(found || null);
      })
      .catch(() => {
        setCountry(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [code, country]);

  if (loading) {
    return (
      <div className={styles.page}>
        <div className={styles.panel}>
          <p className={styles.label}>Loading</p>
          <h1 className={styles.title}>Fetching country details...</h1>
          <Link className={styles.backLink} to="/">Back to countries</Link>
        </div>
      </div>
    );
  }

  if (!country) {
    return (
      <div className={styles.page}>
        <div className={styles.panel}>
          <p className={styles.label}>Country not found</p>
          <h1 className={styles.title}>We could not load this country.</h1>
          <Link className={styles.backLink} to="/">Back to countries</Link>
        </div>
      </div>
    );
  }

  const flagImage = `https://flagcdn.com/w640/${country.alpha2Code.toLowerCase()}.png`;
  const googleMaps = country.maps?.googleMaps;
  const openStreetMaps = country.maps?.openStreetMaps;

  return (
    <main className={styles.page}>
      <div className={styles.panel}>
        <Link className={styles.backLink} to="/">Back to countries</Link>

        <div className={styles.hero}>
          {flagImage ? <img className={styles.flag} src={flagImage} alt={`${country.name} flag`} /> : null}
          <div>
            <p className={styles.label}>{country.region || 'Unknown region'}</p>
            <h1 className={styles.title}>{country.name}</h1>
            <p className={styles.subtitle}>{country.nativeName || 'Native name not available'}</p>
          </div>
        </div>

        <div className={styles.grid}>
          <section className={styles.card}>
            <h2>Core details</h2>
            <p><span>Name:</span> {country.name}</p>
            <p><span>Native name:</span> {country.nativeName || 'N/A'}</p>
            <p><span>Capital:</span> {country.capital || 'N/A'}</p>
            <p><span>Region:</span> {country.region || 'N/A'}</p>
            <p><span>Subregion:</span> {country.subregion || 'N/A'}</p>
            <p><span>Population:</span> {country.population?.toLocaleString() || 'N/A'}</p>
            <p><span>Area:</span> {country.area ? `${country.area.toLocaleString()} km²` : 'N/A'}</p>
            <p><span>Population density:</span> {country.populationDensity || 'N/A'}</p>
          </section>

          <section className={styles.card}>
            <h2>Codes and identity</h2>
            <p><span>Alpha 2 code:</span> {country.alpha2Code || 'N/A'}</p>
            <p><span>Alpha 3 code:</span> {country.alpha3Code || 'N/A'}</p>
            <p><span>CIOC:</span> {country.cioc || 'N/A'}</p>
            <p><span>Numeric code:</span> {country.numericCode || 'N/A'}</p>
            <p><span>Demonym:</span> {country.demonym || 'N/A'}</p>
            <p><span>Independent:</span> {country.independent ? 'Yes' : 'No'}</p>
            <p><span>Flag emoji:</span> {country.flag || 'N/A'}</p>
          </section>

          <section className={styles.card}>
            <h2>Languages and money</h2>
            <p><span>Languages:</span> {formatList(country.languages)}</p>
            <p><span>Currencies:</span> {formatList(country.currencies)}</p>
            <p><span>Timezones:</span> {formatList(country.timezones)}</p>
            <p><span>Calling codes:</span> {formatList(country.callingCodes)}</p>
            <p><span>Top-level domains:</span> {formatList(country.topLevelDomain)}</p>
          </section>

          <section className={styles.card}>
            <h2>Maps and neighbors</h2>
            <p><span>Borders:</span> {formatList(country.borders)}</p>
            <p><span>Lat/Lng:</span> {formatList(country.latlng)}</p>
            <p><span>Google Maps:</span> {googleMaps ? <a href={googleMaps} target="_blank" rel="noreferrer">Open map</a> : 'N/A'}</p>
            <p><span>OpenStreetMap:</span> {openStreetMaps ? <a href={openStreetMaps} target="_blank" rel="noreferrer">Open map</a> : 'N/A'}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
