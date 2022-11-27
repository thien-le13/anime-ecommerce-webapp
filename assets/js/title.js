var searchInputText = document.querySelector("#anime-title");
var searchButton = document.querySelector("#search-title-btn");

function getAnime(animeCriteria) {
  var animeTitleAPI = "https://api.jikan.moe/v4/anime?q=TITLE&sfw";
  var animeTitle = animeCriteria;
  fetch(animeTitleAPI.replace("TITLE", animeTitle))
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

function handleTitleSearch() {
  console.log(searchInputText.value);
  var searchValue = searchInputText.value;
  return searchValue;
}

searchButton.addEventListener("click", function (event) {
  var anime = handleTitleSearch();
  getAnime(anime);
});

// Transition dropdown caret 
var resultHeader = document.getElementById('result-header');
resultHeader.addEventListener('click', function(){
  let caret = resultHeader.querySelector('.fa-caret-down');
  if (caret.classList.contains('rotate-180')) {
    caret.classList.remove('rotate-180');
  } else {
    caret.classList.add('rotate-180');
  }
})


