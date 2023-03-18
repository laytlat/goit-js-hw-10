export function fetchCountries(e) {
  const searchQuery = e.target.value;
  return fetch(`https://restcountries.com/v3.1/name/${searchQuery}?fields=capital,name,population,flags,languages
 `).then(response =>
    response.json().then(data => {
      return data;
    })
  );
}
