var url = "https://api.jikan.moe/v4/anime/1" // gives anime by id
var test = "https://api.jikan.moe/v4/anime?q=TITLE&sfw"  // gives anime by title
var genreURL = "https://api.jikan.moe/v4/genres/anime" // gives genre list
var genreAnimeURL = "https://api.jikan.moe/v4/anime?genres="  // correct link

const animeReturnCount = 5;

var genreDB = [];

var genreDropDown = document.querySelector('#anime-genre');
var genreSearch = document.querySelector('#search-genre-btn');

genreSearch.addEventListener('click', function(event){
    if (genreDropDown.options[genreDropDown.selectedIndex].getAttribute("data-id") === '0')
    {
        event.target.blur();
        return;
    }

    fetch(genreAnimeURL + genreDropDown.options[genreDropDown.selectedIndex].getAttribute("value")) // fetch based on genreURL and id of genre
    .then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
        StoreSearchData(data.data);
        
    })
    
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

function GenerateGenreDropdown()  // Generate genre drop down options
{
    for (var i =0; i < genreDB.data.length; i++)
    {
        var opt = document.createElement('option');
        opt.setAttribute('value', genreDB.data[i].mal_id);
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
            title: data[i].title,
            image: data[i].images.jpg.image_url,
            synopsis: data[i].synopsis
        }
        searchResults.push(anime);
    }
    // TestImageLink(searchResults[0].image, searchResults[0].synopsis);
    console.log(searchResults);
}

// DEBUG: Function
function TestImageLink(url, _text)  
{
    var image = document.createElement('img');
    image.setAttribute('src', url);
    image.setAttribute('alt', 'Test Anime Image');
    document.querySelector('main').appendChild(image);

    var text = document.createElement('p');
    text.textContent = _text;
    document.querySelector('main').appendChild(text);
}

// BELOW: Functions that must be run on page load

GetGenres();

GetAnimeMerch('naruto').then(function(result){
    console.log(result);
});

