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

// Toggle favorite button
var favoriteBtn = document.getElementById('favorite-button');

function toggleFavoriteAnime() {
  let favoriteIcon = document.querySelector('.fa-solid.fa-star');
  let notFavoriteIcon = document.querySelector('.fa-regular.fa-star');

  if (favoriteIcon.classList.contains('collapse')) {
    // is favorited 
    favoriteIcon.classList.remove('collapse');
    notFavoriteIcon.classList.add('collapse');
    favoriteBtn.getElementsByTagName('p')[0].innerHTML = 'Favorited';
  } else {
    // unfavorite
    favoriteIcon.classList.add('collapse');
    notFavoriteIcon.classList.remove('collapse');
    favoriteBtn.getElementsByTagName('p')[0].innerHTML = 'Favorite';
  }
}

favoriteBtn.addEventListener('click', toggleFavoriteAnime);

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


