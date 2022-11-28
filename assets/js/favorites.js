// Search Page
// search => Title
// returns => Anime obj
// Input Anime obj in Local Storage


// Steps for favorites page:

// parent: animeCard

// Initializing local storage, identify favorite results, loop through local storage, get the current looped obj, 

// create card element, create card div, add image, create that image, 

// Create title div

// X icon that clears the favorite anime

// Favorites Page

// Initialize function to load Anime objs onto page.

// 
// [
// Key:
// value: {
//   "title:" "Anime 1 Title,", "image": ."/img/.....png"
// },
// {
//  "title:" "Anime 2 Title,", "image": ."/img/.....png" 
// }
// .
// .
// .
// ]

// loop through local storage

// get current looped obj

// creating card elements

// create anime card div


// Initialize

function getLocalStorage() {

  // identify favorited-results

  var favoriteResults = document.getElementById("favorited-results");
  var animeCard = document.createElement("div");

// add class name to anime card div

animeCard.classList.add("anime-card");
favoritedResults.appendChild(animeCard);
// create var for animeImage, create element, set attribute for href, append.
//  Anime image
  var animeImage = document.createElement('a');
    animeImage.href = "# www.placeholder-anime1.com";
    animeImage.classList.add('anime-image');
    animeCard.appendChild(anime-image);

// Create div for Title, create variable, inner text, classlist.add , appendChild 

// var title = document.createElement('div');

// target.innerText = [string value]

//   title.innerText = "";

//   title.classList.add('anime-title');
  
//   animeCard.appendChild(title);

// // Clear button

var clearBtn = document.createElement("button");

var closeImage = document.createElement("img");

clearBtn.classList.add("anime-remove");


closeImage.setAttribute('src', './img/clear-favorite-icon.svg');
closeImage.setAttribute('alt', 'Clear favorite anime X button');

animeCard.appendChild(clearBtn);
clearBtn.appendChild(closeImage);

}

// // Create an object for anime
      // var favoritedAnime = {
      //   animeTitle: ,
      //   animeImg: ,
        // };

// Store the object in localStorage as a string by using JSON.stringify
    // localStorage.setItem('favoritedAnime', JSON.stringify(fruits));
    // and then when you want to retrieve them, you can do this:

// Retrieve the string and turn it back into an object by using JSON.parse
    // var savedFruits = JSON.parse(localStorage.getItem('fruits'));

// Loop through the object and print the count for each fruit
      // for (var key in savedFruits) {
      //   alert('Fruit: ' + key + '\nCount: ' + savedFruits[key]);
      // }

// remove favorite with X button

let child = document.getElementById("child")
child.addEventListener('click', function(){
  child.remove();
});

// appending svg (clear favorite icon) to cardContainer 

for (i= 0 ; i < favoriteArr.length ; i++){

  let childDiv = document.createElement("div")

    childDiv.setAttribute("id", "child")

    childDiv.setAttribute("class", "child")

    childDiv.setAttribute("img","")

    childDiv.setAttribute("alt", "")

  let svg = document.createElement("svg")

    svg.setAttribute("fill","#000000")

    svg.setAttribute("xmlns","http://www.w3.org/2000/svg" )

    svg.setAttribute("viewBox","0 0 50 50")

    svg.setAttribute("width","50px")

    svg.setAttribute("height","50px")

    svg.setAttribute("d","M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z")

    cardContainer.appendChild(childDiv)

    cardContainer.appendChild(svg)
}


// From jikan data, "data" parent > "images" child + "titles" child > "title" inner child to "titles" FROM LOCAL STORAGE
// We need to pull title, image, and possibly url. 


// const obj = { title: "animeTitle", image: "animeImage"};

// console.log(Object.values(obj)); 


const favoritedAnim = ["title", "url", "images"];
localStorage.setItem('favorites', JSON.stringify(favoritedAnim));

const storedAnim = JSON.parse(localStorage.getItem('favorites'));














// Modal popup

// Get the modal
//  var modal = document.getElementById("myModal");

// Get the button that opens the modal
//   var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
//    btn.onclick = function() {
//     modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
//   span.onclick = function() {
//       modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
//      window.onclick = function(event) {
//        if (event.target == modal) {
//           modal.style.display = "none";
//             }
//        }
