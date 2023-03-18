export function fetchCountries(e) {
  const searchQuery = e.target.value;
  return fetch(`https://restcountries.com/v3.1/name/${searchQuery}?fields=capital,name,population,flags,languages
 `).then(response =>
    response.json().then(data => {
      //   console.log(data);
      return data;
    })
  );
}

// export function fetchCountries(e) {
//   const searchQuery = e.target.value;
//   fetch(`https://restcountries.com/v3.1/name/${searchQuery}?fields=capital,name,population,flags,languages
//   // `)
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       if (data.length > 1) {
//         renderCountriesList(data);
//         return;
//       }
//       renderFinalCountry(data);
//     })
//     .finally(clearPage());
// }
