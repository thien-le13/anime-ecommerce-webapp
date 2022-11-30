// In order to be saved, the array has to be converted to a string, using stringify.
// var favoritedAnime = { };
// localStorage.setItem("favoritedanime", JSON.stringify(#array we have everything stored in));

// function that receives data from obj, check to see if it's already in favorited array, then need to push it to amazonApiArray



// add + save in local storage, when favoriting, function to remove from array

var favArray = [];

function addToArray(animeObj) {
  favArray.push(animeObj);
} 

function savingArray() {
  localStorage.setItem("savedAnime", JSON.stringify(favArray));
}
