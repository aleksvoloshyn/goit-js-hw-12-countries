import './sass/main.scss';

import countryCardTmpl from './templates/country-card.hbs';
import countriesCardTmpl from './templates/countries-list.hbs';
import API from './js/fetchCountries';
import getRefs from './js/get-refs';
import errorMess from './js/pnotify.js';

const debounce = require('lodash.debounce');

const refs = getRefs();

const onDebInput = debounce(onInput, 500);

refs.searchForm.addEventListener('input', onDebInput);

function onInput(e) {
  if (!e.target.value) {
    return;
  }
  const inputedCountry = e.target.value;
  API.fetchCountries(inputedCountry).then(renderCountryCard).catch(onFetchError);
}

function renderCountryCard(country) {
  // console.log(country.length);
  if (country.length === 1) {
    renderOneCountry(country);
  } else if (country.length > 1 && country.length < 11) {
    renderListOfCountries(country);
  } else {
    errorMess();
  }
}

function renderOneCountry(country) {
  const markup = countryCardTmpl(country);
  refs.cardContainer.innerHTML = markup;
  const inputValue = document.querySelector('.form-control');
  inputValue.value = '';
}
function renderListOfCountries(country) {
  const arrOfCountries = country.map(country => country.name);
  refs.cardContainer.innerHTML = countriesCardTmpl(arrOfCountries);
}

function onFetchError(error) {
  alert(`${error}`);
}
