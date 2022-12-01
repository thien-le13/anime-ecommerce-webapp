// Return results count
const animeReturnCount = 5;


var searchResults = document.querySelector("#search-results");
var randomButton = document.querySelector("#radomize-button"); // this has a spelling error, if things break check it
// var topAnimeButton = document.querySelector("#top-anime-button");

// Fetch anime on button click
randomButton.addEventListener("click", function (event) {
  event.target.blur();

  GetRandomAnime(5)
    .then(function (data) {
      CleanSearchResults();
      return data;
    })
    .then((data) => {
      DisplayResults(data);
    });
});


// store search results in an array to be accessed later,
function StoreSearchData(data) {
  // Note: Parameter data should be an array that stores objects with info on individual anime
  var searchResults = [];

  for (var i = 0; i < animeReturnCount; i++) {
    var anime = {
      title: data[i].title_english ? data[i].title_english : data[i].title,
      image: data[i].images.jpg.image_url,
      synopsis: data[i].synopsis,
      animeId: data[i].mal_id
    };
    searchResults.push(anime);
  }
  return searchResults;
}

//// Random Anime Generation
var ranAnimeLink = "https://api.jikan.moe/v4/random/anime?sfw";

// Fetches data from random anime and returns a promise that an array storing their data will be returned
// Function can be called without a parameter to return one random anime
async function GetRandomAnime(count = 1) {
  var searchResults = [];

  for (var i = 0; i < count; i++) {
    const resp = await fetch(ranAnimeLink)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var anime = {
          title: data.data.title_english
            ? data.data.title_english
            : data.data.title,
          image: data.data.images.jpg.image_url,
          synopsis: data.data.synopsis,
          animeId: data.data.mal_id
        };
        return anime;
      });
    searchResults.push(resp);
  }

  return Promise.resolve(searchResults);
}

// topAnimeButton.addEventListener("click", function (event) {
//   event.target.blur();
//   DisplayTopAnime();
// });

// Top Rated Anime
// var topAnime = [];
// var topAnimeURL =
//   "https://api.jikan.moe/v4/anime?min_score=8.5&order_by=score&sort=desc";
// var topAnimeURL2 =
//   "https://api.jikan.moe/v4/anime?min_score=8.5&order_by=score&sort=desc&page=2";

// function GetTopAnime() {
//   var top25 = [];

//   fetch(topAnimeURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       top25 = data.data;
//       return fetch(topAnimeURL2);
//     })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       topAnime = top25.concat(data.data);
//     });
// }
// function DisplayTopAnime() {
//   CleanSearchResults();
//   DisplayResults(StoreSearchData(GetRandomTopAnime(5)));
// }
// function GetRandomTopAnime(count = 1) {
//   var index = [];
//   var anime = [];
//   var num;

//   for (var i = 0; i < count; i++) {
//     do {
//       num = Math.floor(Math.random() * topAnime.length);
//     } while (index.includes(num));

//     index.push(num);
//     anime.push(topAnime[num]);
//   }
//   return anime;
// }



