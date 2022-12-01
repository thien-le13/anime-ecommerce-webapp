var favoriteDisplayEl = document.getElementById('favoriteDisplay');
var favoriteResults = [];

var resultsCopy = [];

// Initialize

function renderFavorites() {
  favoriteResults = JSON.parse(localStorage.getItem(favAnime)) || [];
  resultsCopy = JSON.parse(localStorage.getItem(favAnime)) || []
  // identify favorited-results
  // favoriteResults = document.getElementById("favorited-results");

  // loop through local storage
<<<<<<< HEAD

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
=======
  // if (favoriteResults.length !== 0 ){
    let inLocalStorage = true;
    for (let i = 0; i < favoriteResults.length; i++) {
      // create card for each favorited anime
      let columnEl = document.createElement('div');
      let articleEl = document.createElement('article');
      let cardButton = document.createElement('button');
      let animeImage = document.createElement('img');
      let cardHeader = document.createElement('header');
      let cardHeaderText = document.createElement('h2');
      let cardFooter = document.createElement('footer');
      let favoriteBtn = renderFavoriteBtn(inLocalStorage);

      columnEl.setAttribute('class', 'my-1 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4');
      articleEl.setAttribute('class', 'overflow-hidden rounded-lg shadow-lg result-content');
      // modal toggle
      cardButton.setAttribute('type', 'button');
      cardButton.setAttribute('data-bs-toggle','modal');
      cardButton.setAttribute('data-bs-target', '#animeModal');
      cardButton.setAttribute('onclick','renderModal(this)')

      cardButton.setAttribute('id', favoriteResults[i].animeId);

      animeImage.setAttribute('alt', favoriteResults[i].title);
      // animeImage.setAttribute('alt', 'anime-name');

      animeImage.setAttribute('class', 'block aspect-[3/4] object-cover anime-img');

      animeImage.setAttribute('src', favoriteResults[i].image);
      // animeImage.setAttribute('src', './assets/img/spyfamily-placeholder.jpg');

      cardHeader.setAttribute('class', 'flex items-center justify-between leading-tight p-2 md:p-4');
      cardHeaderText.setAttribute('class', 'text-3xl m-auto anime-title');
      cardHeaderText.dataset.id = favoriteResults[i].animeId;
      cardFooter.setAttribute('class', 'flex items-center justify-between leading-none p-2 md:p-4');

      cardHeaderText.textContent = favoriteResults[i].title;
      // cardHeaderText.textContent = 'Anime Name';

      cardHeader.appendChild(cardHeaderText);
      cardFooter.appendChild(favoriteBtn);
      cardButton.append(animeImage,cardHeader);
      articleEl.append(cardButton, cardFooter);
      columnEl.appendChild(articleEl);
      favoriteDisplayEl.appendChild(columnEl);
    }
  }
// }


function renderFavoriteBtn(inLocalStorage) {
  let favoriteBtn = document.createElement('button');
  let favoriteIcon = document.createElement('i');
  let unfavoriteIcon = document.createElement('i');
  let favoriteText = document.createElement('p');

  favoriteBtn.setAttribute('id', 'favorite-button');
  favoriteBtn.setAttribute('type', 'button');
  favoriteBtn.setAttribute('class', 'w-full mt-2 py-2 flex justify-center rounded-lg shadow-md');

  if (inLocalStorage) {
    unfavoriteIcon.setAttribute('class', 'fa-regular fa-star pb-2 pr-1 collapse');
    favoriteIcon.setAttribute('class', 'fa-solid fa-star pb-2 pr-1');
    favoriteText.textContent = 'Favorited';
  } else {
    unfavoriteIcon.setAttribute('class', 'fa-regular fa-star pb-2 pr-1');
    favoriteIcon.setAttribute('class', 'fa-solid fa-star pb-2 pr-1 collapse');
    favoriteText.textContent = 'Favorite';
  }
>>>>>>> origin

  favoriteBtn.append(favoriteIcon, unfavoriteIcon, favoriteText);

  return favoriteBtn;
}

// Render modal content when anime card is clicked
function renderModal(button) {
  
  // loop through the favorite anime object array and check if id matches 
  for ( let i = 0; i < favoriteResults.length; i++ ){
    if (button.id === favoriteResults[i].animeId) {
      let productDisplayEl = document.getElementById('related-products');
      let animeTitleEl = document.getElementById('anime-title');
      let animeSynopsisEl = document.getElementById('anime-synopsis');
      let productCards = renderProductCard(favoriteResults[i].products, productDisplayEl);

      animeTitleEl.textContent = favoriteResults[i].title;
      animeSynopsisEl.textContent = favoriteResults[i].synopsis;

      // productDisplayEl.appendChild(productCards);
    }
  }
}

function renderProductCard(productInfo, parent) {
  parent.innerHTML ='';


  for (let i = 0; i < productInfo.length; i++) {
    let productContainerEl = document.createElement('div');
    let productCardEl = document.createElement('div');
    let productUrlEl = document.createElement('a');
    let productImgEl = document.createElement('img');
    let productNameEl = document.createElement('h4');
    let productPriceEl = document.createElement('p');

    productContainerEl.setAttribute('class', 'product-container');
    productCardEl.setAttribute('class', 'product-card');
    productUrlEl.setAttribute('href', productInfo[i].url);
    productImgEl.setAttribute('class', 'aspect-square object-cover');
    productImgEl.setAttribute('src', productInfo[i].image);
    
    productNameEl.textContent = productInfo[i].name;
    productPriceEl.textContent = productInfo[i].price;

    productUrlEl.append(productImgEl, productNameEl, productPriceEl);
    productCardEl.appendChild(productUrlEl);
    productContainerEl.appendChild(productCardEl);
    parent.appendChild(productContainerEl);
    
  }
}

// Toggle favorite button

function toggleFavoriteBtn(favoriteBtn) {
  let favoriteIcon = favoriteBtn.querySelector('.fa-solid.fa-star');
  let notFavoriteIcon = favoriteBtn.querySelector('.fa-regular.fa-star');

  var point = favoriteBtn.closest('.result-content');

  if (favoriteIcon.classList.contains('collapse')) {
    // is favorited 
    favoriteIcon.classList.remove('collapse');
    notFavoriteIcon.classList.add('collapse');
    favoriteBtn.getElementsByTagName('p')[0].innerHTML = 'Favorited';
    // add add to array function and save to local storage
    SaveAnime(GetAnimeById(point.querySelector('.anime-title').dataset.id));
  } else {
    // unfavorite
    favoriteIcon.classList.add('collapse');
    notFavoriteIcon.classList.remove('collapse');
    favoriteBtn.getElementsByTagName('p')[0].innerHTML = 'Favorite';
    // remove from array and update local storage
    removeFromFavoritesArray( point.querySelector('.anime-title').dataset.id);
  }
}

function GetAnimeById(id)
{
  for (var i = 0; i < resultsCopy.length; i++){
    if (resultsCopy[i].animeId == id)
      return resultsCopy[i];
  }
}

function checkClicked(event) {
  if (event.target.id === 'favorite-button') {
    toggleFavoriteBtn(event.target)
  } else if (event.target.parentNode.id === 'favorite-button') {
    toggleFavoriteBtn(event.target.parentNode);
  }
}

favoriteDisplayEl.addEventListener('click', checkClicked);

renderFavorites();


