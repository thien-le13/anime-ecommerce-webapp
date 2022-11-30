var favoriteDisplayEl = document.getElementById('favoriteDisplay');
var favoriteResults = [];


// Initialize

function getLocalStorage() {
  favoriteResults = JSON.parse(localStorage.getItem(favAnime)) || [];
  // identify favorited-results
  // favoriteResults = document.getElementById("favorited-results");

  // loop through local storage
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
      articleEl.setAttribute('class', 'overflow-hidden rounded-lg shadow-lg');
      // modal toggle
      cardButton.setAttribute('type', 'button');
      cardButton.setAttribute('data-bs-toggle','modal');
      cardButton.setAttribute('data-bs-target', '#animeModal');

      cardButton.setAttribute('id', favoriteResults[i].animeId);

      animeImage.setAttribute('alt', favoriteResults[i].title);
      // animeImage.setAttribute('alt', 'anime-name');

      animeImage.setAttribute('class', 'block aspect-[3/4] object-cover');

      animeImage.setAttribute('src', favoriteResults[i].image);
      // animeImage.setAttribute('src', './assets/img/spyfamily-placeholder.jpg');

      cardHeader.setAttribute('class', 'flex items-center justify-between leading-tight p-2 md:p-4');
      cardHeaderText.setAttribute('class', 'text-3xl m-auto');
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


