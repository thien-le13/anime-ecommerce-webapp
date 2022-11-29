var url = "https://api.jikan.moe/v4/anime/1"; // gives anime by id
var test = "https://api.jikan.moe/v4/anime?q=TITLE&sfw";  // gives anime by title
var genreURL = "https://api.jikan.moe/v4/genres/anime"; // gives genre list
var genreAnimeURL = "https://api.jikan.moe/v4/anime?genres=";  // correct link


const animeReturnCount = 5;

var genreDB = [];

var genreDropDown = document.querySelector('#search-genre');  // change to search-genre when you pull
var genreSearch = document.querySelector('#search-genre-btn');
var searchResults = document.querySelector('#search-results');


genreSearch.addEventListener('click', function(event){
    if (genreDropDown.options[genreDropDown.selectedIndex].getAttribute("data-id") === '0')
    {
        event.target.blur();

        GetRandomAnime(5).then(function(data){
            CleanSearchResults();
            return data;
        }).then((data) => {
            DisplayResults(data);
        });


        return;
    }
    else if (genreDropDown.options[genreDropDown.selectedIndex].getAttribute("value") === '1')
    {
        DisplayTopAnime();
        return;
    }

    ///////////////////


    console.log(genreAnimeURL + genreDropDown.options[genreDropDown.selectedIndex].getAttribute("value"));
    fetch(genreAnimeURL + genreDropDown.options[genreDropDown.selectedIndex].getAttribute("value")) // fetch based on genreURL and id of genre
    .then(function(response){
        console.log(response.status);
        return response.json();
    }).then(function(data){
        console.log(data);
        // StoreSearchData(data.data);
        
    })
    .then(function (data) {
      console.log(data);
      StoreSearchData(data.data);
    });
});



function GetGenres()  // Fetches array of genre data
{
    fetch(genreURL).then(function(response){
        return response.json();
    }).then(function(data){
        genreDB = data;
        GenerateGenreDropdown();
    });
}

function GenerateGenreDropdown() {
  // Generate genre drop down options
  for (var i = 0; i < genreDB.data.length; i++) {
    var opt = document.createElement("option");
    opt.setAttribute("value", genreDB.data[i].mal_id);
    opt.textContent = genreDB.data[i].name;

    genreDropDown.appendChild(opt);
  }
}

// store search results in an array to be accessed later, 
function StoreSearchData(data){    // Note: Parameter data should be an array that stores objects with info on individual anime
    var searchResults = [];         

    for (var i = 0; i < animeReturnCount; i++)
    {
        var anime = {
            title: data[i].title_english ? data[i].title_english : data[i].title,
            image: data[i].images.jpg.image_url,
            synopsis: data[i].synopsis
        }
        searchResults.push(anime);
    }
    return searchResults;
}


////////////////////////////////////////////////////////////////////////////////////
//// Random Anime Generation ////  Use this code if genre does not get patched in time
var ranAnimeLink = "https://api.jikan.moe/v4/random/anime?sfw"

// Fetches data from random anime and returns a promise that an array storing their data will be returned
// Function can be called without a parameter to return one random anime
async function GetRandomAnime(count = 1) 
{
    var searchResults = [];

    for (var i = 0 ; i < count; i++)
    {   
        const resp = await fetch(ranAnimeLink).then(function(response){
            return response.json();
        }).then(function(data){

            var anime = {
                title: data.data.title_english ? data.data.title_english : data.data.title ,
                image: data.data.images.jpg.image_url,
                synopsis: data.data.synopsis
            };
            return anime;
        });
        searchResults.push(resp);
    }

    return Promise.resolve(searchResults);
}

///////////////////////////////////////////
// Top Rated Anime
var topAnime = [];
var topAnimeURL = "https://api.jikan.moe/v4/anime?min_score=8.5&order_by=score&sort=desc"
var topAnimeURL2 = "https://api.jikan.moe/v4/anime?min_score=8.5&order_by=score&sort=desc&page=2"


function GetTopAnime(){
    var top25 = [];

    fetch(topAnimeURL).then(function(response){
        return response.json();
    }).then(function(data){
        top25 = data.data;
        return fetch(topAnimeURL2);
    }).then(function(response){
        return response.json();
    }).then(function(data){
        topAnime = top25.concat(data.data);
    })

    
}
function DisplayTopAnime(){
    CleanSearchResults();
    DisplayResults( StoreSearchData( GetRandomTopAnime(5)));
}
function GetRandomTopAnime(count = 1)
{
    var index = [];
    var anime = [];
    var num;

    for (var i = 0; i < count; i++)
    {
        do {
            num = Math.floor(Math.random() * topAnime.length);
        } while (index.includes(num));

        index.push(num);
        anime.push(topAnime[num]);
        
    }
    return anime;
}



// DEBUG: Functions /////////////////////
function TestImageLink(url, _text)  
{
    var image = document.createElement('img');
    image.setAttribute('src', url);
    image.setAttribute('alt', 'Test Anime Image');
    document.querySelector('main').appendChild(image);

  var text = document.createElement("p");
  text.textContent = _text;
  document.querySelector("main").appendChild(text);
}
function TestLink(link)
{
    fetch(link).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
        console.log(data.report_url);
    });
}
//////////////////////////////////



// BELOW: Functions that must be run on page load

GetGenres();
GetTopAnime();

// GetAnimeMerch('naruto').then(function(result){
//     console.log(result);
// });




