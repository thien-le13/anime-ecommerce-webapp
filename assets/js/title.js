var searchInputText = document.querySelector("#anime-title");
var searchButton = document.querySelector("#search-title-btn");

// Retrieves anime information based on user search.
function getAnime(animeCriteria) {
  var animeTitleAPI = "https://api.jikan.moe/v4/anime?q=TITLE&sfw";
  var animeTitle = animeCriteria;
  fetch(animeTitleAPI.replace("TITLE", animeTitle))
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      getSearchData(data.data);
    });
}

// Takes retrieved information and selects specific data.
function getSearchData(data) {
  var searchResults = [];

  for (var i = 0; i < animeReturnCount; i++) {
    var anime = {
      title: data[i].title,
      image: data[i].images.jpg.image_url,
      synopsis: data[i].synopsis,
    };
    searchResults.push(anime);
  }
  console.log(searchResults);
  return searchResults;
}

function handleTitleSearch() {
  console.log(searchInputText.value);
  var searchValue = searchInputText.value;
  return searchValue;
}

// Searches for anime after title is entered and search button is clicked.
searchButton.addEventListener("click", function (event) {
  var anime = handleTitleSearch();
  getAnime(anime);
});
