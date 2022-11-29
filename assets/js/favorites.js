// Search Page
// search => Title
// returns => Anime obj
// Input Anime obj in Local Storage


// Steps for favorites page:

// parent: animeCard

// Initializing local storage, identify favorite results, loop through local storage, get the current looped obj, 

// create card element, create card div, add image, create that image, 

// Create title div,  

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




// Initialize

function getLocalStorage() {

  // identify favorited-results

  var favoriteResults = document.getElementById("favorited-results");


  // loop through local storage

  // get current looped obj

  // creating card elements

  // create anime card div

  var animeCard = document.createElement("div");

  // add class name to anime card div
  // element.classList.add("class name");

  animeCard.classList.add("anime-card");

  // create var for animeImage, create element, set attribute for href, append.

  favoritedResults.appendChild(animeCard);




  //  Anime image
  var animeImage = document.createElement('a');
  // <img src="" alt=""/>
  // <img src="www.anime1.com/image1" alt="X anime name title"/>
  animeImage.href = "# www.placeholder-anime1.com";
  animeImage.classList.add('anime-image');
  animeCard.appendChild(anime - image);


  // <div id="favorited-results">
  //   <div class="anime-card">
  //     <a class="anime-image" href="www.placeholder-anime1.com"></a>
  //   </div>
  // </div>




  // Create div for Title, create variable, inner text, classlist.add , appendChild 

  // var title = document.createElement('div');

  // target.innerText = [string value]

  // title.innerText = 'blah blah blah'

  // title.classList.add('anime-title');

  // animeCard.appendChild(title);

  //  // <div id="favorited-results">
  //   //   <div class="anime-card">
  //   //     <a class="anime-image" href="www.placeholder-anime1.com"></a>
  //           <div class="anime-title">blah blah</div>
  //   //   </div>
  //   // </div>


  // // Clear button

  var clearBtn = document.createElement("button");

  var closeImage = document.createElement("img");

  clearBtn.classList.add("anime-remove");


  closeImage.setAttribute('src', './img/clear-favorite-icon.svg');
  closeImage.setAttribute('alt', 'Clear favorite anime X button');

  animeCard.appendChild(clearBtn);
  clearBtn.appendChild(closeImage);

}

// // // Create an object for anime
// var favoritedAnime = {
//   animeTitle: ,
//   animeImg: ,
// };

// // Store the object in localStorage as a string by using JSON.stringify
// localStorage.setItem('favoritedAnime', JSON.stringify(fruits));
// and then when you want to retrieve them, you can do this:

// // Retrieve the string and turn it back into an object by using JSON.parse
// var savedFruits = JSON.parse(localStorage.getItem('fruits'));

// // Loop through the object and print the count for each fruit
// for (var key in savedFruits) {
//   alert('Fruit: ' + key + '\nCount: ' + savedFruits[key]);
// }



// let child = document.getElementById("child")
// child.addEventListener('click', function(){
//   child.remove();
// });

// Javascript steps

// 1. Create variable 

// var image = document.createElement('img');

// <img> </img>


// 2. Does this element have any attributes we need to consider?

// src, alt Text

// image.setAttribute("src", [image path]);
// image.setAttribute('alt', [alt text]);

// <img src=[image path] alt= [alt text];


// 3. Does this element, does it need a class?

// image.classList.add("example-image");

// <img class= "example-image" src=[image path] alt=[alt text]/>


// 4. Does this element need text inside?
//     Image does not require text inside

//   Something that does: paragraph <p>

//   var paragraph = document.createElement("p");

//   paragraph.innerText = "Hello, world!";


// 5. wHERE DO WE WANT TO APPEND THIS NEW ELEMENT TO?
//   - find the parent container and appendChild to your newly created element


//   var animeSection = document.getElementById('animesection');
//   parent container = animeSection
//   new element = image


//   parent.appendChild(new element);

//   animeSection.appendChild(image);

//   6. Expected Result

//   <section id="animesection">
//     <img "example-image" src=[image path] alt=[alt text]/>
//     </section>


// let favoritedAnime = {
//   animeTitle,
//   animeImg,
//   url,
// };
 
//  let favoritesArr = JSON.parse(localStorage.getItem('favoritesArr')) ||[];
//  favoritesArr.push(favoritedAnime);
//  localStorage.setItem('favorites', JSON.stringify(favoritesArr));

//  const loadAnime = () => {
//   if (localStorage['favouritedAnime']) 
//       // If a saved anime exists
//       savedAnime = JSON.parse(localStorage['favouritedAnime'])
//   else 
//       // No saved animes
//       savedAnime = {}
// }

// const saveAnime = () => {
//   localStorage['favouritedAnime'] = JSON.stringify(favouritedAnime)
// }





let cardContainer = document.querySelector("card-container")


for (i = 0; i < favoritesArr.length; i++) {
  let childDiv = document.createElement("div")
    childDiv.setAttribute("id", "child")
    childDiv.setAttribute("class", "child")
    childDiv.setAttribute("img", "")
    childDiv.setAttribute("alt", "")
  let svg = document.createElement("svg")
    svg.setAttribute("fill", "#000000")
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    svg.setAttribute("viewBox", "0 0 50 50")
    svg.setAttribute("width", "50px")
    svg.setAttribute("height", "50px")
    svg.setAttribute("d", "M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z")
  cardContainer.appendChild(childDiv)
  cardContainer.appendChild(svg)
}

let modelSection = document.querySelector("modelSection ")
   
let modalDiv1 = document.createElement("div")
  modalDiv1.setAttribute("class", "flex")
let modalImg = document.createElement("img")
  modalImg.setAttribute("src" , "")
  modalImg.setAttribute("alt" , "")
let modalClearBtn = document.createElement("button")
  modalClearBtn.setAttribute("class", "btn-close")
let modalDiv2 = document.createElement("div")
let modalTitle = document.createElement("h3")
  modalTitle.innerText = ""
let modalP = document.createElement("p")
  modalP.innerText=""

modelSection.appendChild(modalDiv1);
modelSection.appendChild(modalDiv2);
modelSection.appendChild(modalImg);
modelSection.appendChild(modalClearBtn);
modelSection.appendChild(modalDiv2);
modelSection.appendChild(modalTitle);
modelSection.appendChild(modalP);

 





const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector("#child");
const closeModalBtn = document.querySelector(".btn-close");

// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
// open modal function
// // document.getElementById( "Img" ).onclick = function() {
// //   modal.classList.remove("hidden");
// //   overlay.classList.remove("hidden");
// };

// function myFuction(){
//   document.getElementById( "Img" ).onclick = function() {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// open modal event
// openModalBtn.addEventListener("click", openModal);
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// open modal event
openModalBtn.addEventListener("click", openModal);

// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }
