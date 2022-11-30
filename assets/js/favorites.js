var favoriteDisplayEl = document.getElementById('favoriteDisplay');
var favoriteResults = [];


// Initialize

function getLocalStorage() {
  favoriteResults = JSON.parse(localStorage.getItem('favoritedAnime'));
  // identify favorited-results
  // favoriteResults = document.getElementById("favorited-results");

  // loop through local storage
  // if (favoriteResults.length !== 0 ){
    let inLocalStorage = true;
    // for (let i = 0; favoriteResults.length; i++) {
    for (let i = 0; i < 8; i++) {
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
      articleEl.setAttribute('class', 'overflow-hidden rounded-lg shadow-lg');
      // modal toggle
      cardButton.setAttribute('type', 'button');
      cardButton.setAttribute('data-bs-toggle','modal');
      cardButton.setAttribute('data-bs-target', '#animeModal');

      // cardButton.setAttribute('id', favoriteResults[i].id);
      cardButton.setAttribute('id', 'anime-id');

      // animeImage.setAttribute('alt', favoriteResults[i].animetitle.replace(' ', '-'));
      animeImage.setAttribute('alt', 'anime-name');

      animeImage.setAttribute('class', 'block aspect-[3/4] object-cover');

      // animeImage.setAttribute('src', favoriteResults[i].animeimgurl);
      animeImage.setAttribute('src', './assets/img/spyfamily-placeholder.jpg');

      cardHeader.setAttribute('class', 'flex items-center justify-between leading-tight p-2 md:p-4');
      cardHeaderText.setAttribute('class', 'text-3xl m-auto');
      cardFooter.setAttribute('class', 'flex items-center justify-between leading-none p-2 md:p-4');

      // cardHeaderText.textContent = favoriteResults[i].animetitle;
      cardHeaderText.textContent = 'Anime Name';

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

  favoriteBtn.append(favoriteIcon, unfavoriteIcon, favoriteText);

  return favoriteBtn;
}

// Render modal content when anime card is clicked
function renderModal(event) {

  // loop through the favorite anime object array and check if id matches 
  for ( let i = 0; i < favoriteResults.length; i++ ){
    if (event.target.id === favoriteResults[i].anime-id) {
      let productDisplayEl = document.getElementById('related-products');
      let animeTitleEl = document.getElementById('anime-title');
      let animeSynopsisEl = document.getElementById('anime-synopsis');
      let productCards = renderProductCard(favoriteResults[i].products);

      animeTitleEl.textContent = favoriteResults[i].animename;
      animeSynopsisEl.textContent = favoriteResults[i].synopsis;

      productDisplayEl.appendChild(productCards);
    }
  }
}

function renderProductCard(productInfo) {
  for (let i = 0; i < productInfoObj.length; i++) {
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
    productImgEl.setAttribute('src', productInfo[i].img);
    
    productNameEl.textContent = productInfo[i].name;
    productPriceEl.textContent = productInfo[i].price;

    productUrlEl.append(productImgEl, productNameEl, productPriceEl);
    productCardEl.appendChild(productUrlEl);
    productContainerEl.appendChild(productCardEl);

    return productContainerEl;
  }
}

// Toggle favorite button
var favoriteBtn = document.getElementById('favorite-button');

function toggleFavoriteAnime() {
  let favoriteIcon = document.querySelector('.fa-solid.fa-star');
  let notFavoriteIcon = document.querySelector('.fa-regular.fa-star');

  if (favoriteIcon.classList.contains('collapse')) {
    // is favorited 
    favoriteIcon.classList.remove('collapse');
    notFavoriteIcon.classList.add('collapse');
    favoriteBtn.getElementsByTagName('p')[0].innerHTML = 'Favorited';
  } else {
    // unfavorite
    favoriteIcon.classList.add('collapse');
    notFavoriteIcon.classList.remove('collapse');
    favoriteBtn.getElementsByTagName('p')[0].innerHTML = 'Favorite';
  }
}

// favoriteBtn.addEventListener('click', toggleFavoriteAnime);

getLocalStorage();


















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





// let cardContainer = document.querySelector("card-container")


// let modelSection = document.querySelector("modelSection ")
   
// let modalDiv = document.createElement("div")
//   modalDiv.setAttribute("class", "flex")
// let modelImg = document.createElement("img")
//   modelImg.setAttribute("src" , "")
//   modelImg.setAttribute("alt" , "")
// let modelClearBtn = document.createElement("button")
//   modelClearBtn.setAttribute("class", "btn-close")


 





// const modalEl = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const openModalBtn = document.querySelector("#child");
// const closeModalBtn = document.querySelector(".btn-close");

// // close modal function
// const closeModal = function () {
//   modalEL.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// // close the modal when the close button and overlay is clicked
// closeModalBtn.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// // close modal when the Esc key is pressed
// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });
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



// const openModal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };


// // open modal event
// openModalBtn.addEventListener("click", openModal);

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



//  create animeCard then create modal that contains a close, synopsis, and related products
// set up for the modal that we want in the top section (html)
// {/* <div id="modal" class="modal hidden">
//   <button class="close">X</button>
//     <div class="modal _ _ _ content">
//       <p class="modal_synopsis"></p>
//     <div class="modal_amazon"><</div>
//   </div>
// </div> */}

// javascript
// fetch obj for synopsis
// identify our targetted containers

// var synopsisModal = getElementsByClassNames("modal_synopsis")[0];
// var amazonModal = getElementsByClassNames("modal_amazon")[0];

// // parse info for synopsis first

// var synopsisData = object.synopsis;
// synopsisModal.innerText = synopsisData;

// // fetch amazon api stuff => (returns) amazonApiArray

// let relatedProductsArray = amazonApiArray

// if (relatedProductsArray.length == 0 || relatedProductsArray == null){
//   console.log("no related products");
//   amazonModal.innerText = "Sorry nothing to see here" 
// } else {
//     // loop through relatedProductsArray
//     // returns an array of objs
//     // Check if the returned array from amazon api is empty or null. 
//     // If it is empty/null, then return no product, else start populating amazon_modal
//     // createElement => UL and append to amazonModal
//     // add an id or a class........

//     console.log("list of related products");
//     let relatedProduct;
//     for (let i = 0; i < relatedProductsArray.length; i++) {
//       relatedProduct = relatedProductsArray[i];
//       // create list item
//       createRelatedProduct(relatedProduct);
//     }

//     // then make it run through createRelatedProducts

//     function createRelatedProduct(obj){
//       console.log("create related product");
// // createElement => Li and append to UL
// // createElement => anchor ==> use obj.link ==> then append to Li
// // createElement => Image ==> use obj.image ==> append to Anchor
// // createElement => Div for title obj.title ==> append to Anchor
// // createElement => Div for price (use a span or whatever) obj.price ==> append to anchor (whole card is clickable)
//   }
// }

// createElement => unordered list (UL) and append to amazonModal
  // then go through
// createElement => list item (li) and append to amazonModal


// // In the end, it should look like this and should repeat 3 times due to 3 amazon products

// <div id="modal" class="modal hidden">
//   <button class="close">X</button>
//   <div class="modal _ _ _ content">
//     <p class="modal_synopsis">blah blah blah</p>
//     <div class="modal_amazon">
//       <ul id="modal_amazon_list">
//         <li>
//           <a href ="#">
//             <image src = "#" alt=""/>
//           <div>Title</div>
//           <div>Price</div>
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>

// // If it doesn't have a product, then it would look like this

// <div id = "modal" class ="modal hidden">
//   <button class = "close">X</button>
//   <div class="modal _ _ _ content">
//     <p class="modal_synopsis">blah blah blah</p>
//     <div class="modal_amazon">
//       <p> sorry no related products</p>
//     </div>
//   </div>
// </div>
