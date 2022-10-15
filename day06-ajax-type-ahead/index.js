const endPoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endPoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));


function findMatches(keyword, cities) {
  return cities
    .filter(item => 
      item.city.toLowerCase().includes(keyword.toLowerCase()) ||
      item.state.toLowerCase().includes(keyword.toLowerCase())
    );
}

function findMatches2(keyword, cities) {
  return cities.filter((item) => {
    const regex = new RegExp(keyword, 'gi');
    return item.city.match(regex) || item.state.match(regex);
  });
}


function displayMatches() {
  const matchArray = findMatches2(this.value, cities);
  const listHtml = matchArray
    .map((item) => {
      return `
        <li>
          <span class="name">${item.city}, ${item.state}</span>
          <span class="population">${item.population}</span>
        </li>
      `;
    })
    .join('');

  searchList.innerHTML = listHtml;
}

const searchInput = document.getElementById('search-bar');
const searchList = document.getElementById('search-list');

console.log('searchInput', searchInput)
// searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
