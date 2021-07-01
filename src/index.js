import './sass/main.scss';

import countryCardTmpl from './templates/country-card.hbs';
import API from './js/fetchCountries';
import getRefs from './js/get-refs';

const refs = getRefs();
refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  API.fetchCountries(searchQuery)
    .then(renderCauntryCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function renderCauntryCard(country) {
  const markup = countryCardTmpl(country);
  refs.cardContainer.innerHTML = markup;
  console.log(API);
}

function onFetchError() {
  alert('Ошибка! Такой страны нет!');
}
