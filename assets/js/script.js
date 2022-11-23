url = "https://api.jikan.moe/v4/anime/1/full"
test = "https://api.jikan.moe/v4/anime?q=cowboy bebop&sfw"
genre = "https://api.jikan.moe/v4/genres/anime"

fetch(genre).then(function(response){
    return response.json();
}).then(function(data){
    //data
    console.log(data);
});