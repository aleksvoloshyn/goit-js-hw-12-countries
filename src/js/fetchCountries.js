const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}/name/${searchQuery}`).then(response => response.json());
}

export default { fetchCountries };

// fetch('https://restcountries.eu/rest/v2/')
//   .then(response => {
//     // распарсиваем сюда:
//     return response.json();
//   })
//   .then(country => {
//     //   если успешно - выполни это:
//     console.log(country);
//   })
//   //   если неуспешно - выполни это:
//   .catch(error => {
//     console.log(error);
//   });
