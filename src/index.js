import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const countryInput = document.querySelector('#search-box');
const countryInfo = document.querySelector('.country-info');
const countriesList = document.querySelector('.country-list');

countryInput.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  fetchCountries(e)
    .then(data => {
      if (data.length > 1) {
        renderCountriesList(data);
        return;
      }
      renderFinalCountry(data);
    })
    .finally(clearPage());
}

function renderFinalCountry(array) {
  array.map(element => {
    const languages = Object.values(element.languages);
    const country = `
    <img src="${element.flags.svg}" width='60'></img>
    <h2 class="title">${element.name.official}</h2>
    <div> <span class="description">Capital: </span> ${element.capital}</div>
    <div> <span class="description">Population: </span> ${element.population}</div>
    <div> <span class="description">Languages: </span> ${languages}</div>`;
    countryInfo.innerHTML = country;
  });
}

function renderCountriesList(countries) {
  countries.map(element => {
    const counrty = `
    <li class="country-list__item">
    <img src="${element.flags.svg}" width='30'></img>
    <span class="country-name">${element.name.official}</span>
    </li>
`;
    countriesList.insertAdjacentHTML('beforeend', counrty);
  });
}

function clearPage() {
  countryInfo.innerHTML = '';
  countriesList.innerHTML = '';
}
