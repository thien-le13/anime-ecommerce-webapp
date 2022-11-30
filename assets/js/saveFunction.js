// In order to be saved, the array has to be converted to a string, using stringify.
// var favoritedAnime = { };
// localStorage.setItem("favoritedanime", JSON.stringify(#array we have everything stored in));

// function that receives data from obj, check to see if it's already in favorited array, then need to push it to amazonApiArray

const favAnime = "favoritedAnime"

// add + save in local storage, when favoriting, function to remove from array

var favArray = [];

function SaveAnime(animeObj) {
  favArray.push(animeObj);
  SavingArray();
} 

function SavingArray() {
  localStorage.setItem(favAnime, JSON.stringify(favArray));
}

function InitArray(){
  favArray = JSON.parse(localStorage.getItem(favAnime)) || [];
}

function RemoveAnime(anime){
  for (var i = 0; i < favArray.length; i++){
    if (anime.animeId == favArray[i].animeId)
    {
      favArray.splice(i,1);
      SavingArray();
      return;
    }
  }
}
function removeFromFavoritesArray(targetId) {
  let findAnime = favArray.find(anime => anime.animeId === targetId) 
    
  var removeIndex = favArray.indexOf(findAnime)
  favArray.splice(removeIndex, 1)

  SavingArray();
}


InitArray();
