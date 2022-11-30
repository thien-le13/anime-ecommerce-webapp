const favAnime = "favoritedAnime";

var favArray = [];

//save to localStorage

  function addToArray(animeObj) {
    favArray.push(animeObj);
    saveToLocalStorage();
  }

  // take in array and stringify that to store to localStorage

  function saveToLocalStorage() {
    localStorage.setItem(favAnime, JSON.stringify(favArray));
  }

  function removeFromFavoritesArray(targetId) {
    let findAnime = favArray.find(anime => anime.animeId === targetId) 
      console.log(findAnimeId);
    var removeIndex = favArray.indexOf(findAnime)
    favArray.splice(removeIndex, 1)

    saveToLocalStorage();
  }
  
