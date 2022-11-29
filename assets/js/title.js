var searchSection = document.querySelector("#search-results");
var searchContainer = document.querySelector("#result-container");
var searchInputText = document.querySelector("#search-title");
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
  CleanSearchResults();

  for (var i = 0; i < animeReturnCount; i++) {
    var anime = {
      title: data[i].title,
      image: data[i].images.jpg.image_url,
      synopsis: data[i].synopsis,
    };

    searchResults.push(anime);
  }
  DisplayResults(searchResults);
  return searchResults;
}

function DisplayResults(searchResults) {
  for (var i = 0; i < searchResults.length; i++) {
    var animeNode = searchContainer.cloneNode(true);
    animeNode.id = animeNode.id + "-" + i;
    var animeTitle = animeNode.querySelector("#anime-title");
    var animeSynopsis = animeNode.querySelector("#anime-synopsis");
    var animeImg = animeNode.querySelector("#sauce");

    var animeCollapse = animeNode.querySelector("#result-header");
    animeCollapse.setAttribute("aria-controls", "id" + i);
    animeCollapse.setAttribute("href", "#id" + i);
    var collapseContent = animeCollapse.nextElementSibling;
    collapseContent.id = "id" + i;

    animeTitle.innerHTML = searchResults[i].title;
    animeSynopsis.innerHTML = searchResults[i].synopsis;
    animeImg.src = searchResults[i].image;

    var merchList = GetAnimeMerch(searchResults[i].title);
    console.log(merchList);

    var productName = animeNode.querySelector("#gift-ideas");
    var listOfCards = productName.querySelectorAll(".product-card");
    for (var j = 0; j < listOfCards.length; j++) {
      listOfCards[j]
        .querySelector("img")
        .setAttribute(
          "src",
          "https://cdn.myanimelist.net/images/anime/3/40451.jpg"
        );
      listOfCards[j].querySelector("h4").textContent = "poo";
      listOfCards[j].querySelector("p").textContent = "poo";
    }

    searchSection.append(animeNode);
  }
}

function handleTitleSearch() {
  var searchValue = searchInputText.value;
  return searchValue;
}

// Searches for anime after title is entered and search button is clicked.
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
}

CleanSearchResults();
