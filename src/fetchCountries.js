export function fetchCountries(e) {
  const searchQuery = e.target.value;
  return fetch(`https://restcountries.com/v3.1/name/${searchQuery.trim()}?fields=capital,name,population,flags,languages
 `)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => data);
}
