var favoriteDisplayEl = document.getElementById('favoriteDisplay');
var favoriteResults = [];
// Keep copy of favorited aniime to easily add back
var resultsCopy = [];

// Initialize and update page content from local storage
function renderFavorites() {
  // Get local storage
  favoriteResults = JSON.parse(localStorage.getItem(favAnime)) || [];
  resultsCopy = JSON.parse(localStorage.getItem(favAnime)) || []

  // loop through local storage
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

    columnEl.setAttribute('class', 'flex my-1 px-1 w-1/2 max-[380px]:w-full max-[380px]:justify-center md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4');
    articleEl.setAttribute('class', 'flex flex-col w-full justify-between overflow-hidden bg-white rounded-lg shadow-lg result-content');
    // modal toggle
    cardButton.setAttribute('type', 'button');
    cardButton.setAttribute('data-bs-toggle','modal');
    cardButton.setAttribute('data-bs-target', '#animeModal');
    cardButton.setAttribute('onclick','renderModal(this)')
    cardButton.setAttribute('class','w-full')

    cardButton.setAttribute('id', favoriteResults[i].animeId);
    animeImage.setAttribute('alt', favoriteResults[i].title);
    animeImage.setAttribute('class', 'block w-full aspect-[3/4] object-cover anime-img');
    animeImage.setAttribute('src', favoriteResults[i].image);

    cardHeader.setAttribute('class', 'flex items-center justify-between leading-tight p-2 md:p-4');
    cardHeaderText.setAttribute('class', 'text-md md:text-xl m-auto anime-title');
    cardHeaderText.dataset.id = favoriteResults[i].animeId;
    cardFooter.setAttribute('class', 'flex items-center justify-between leading-none p-2 md:p-4');

    cardHeaderText.textContent = favoriteResults[i].title;

    cardHeader.appendChild(cardHeaderText);
    cardFooter.appendChild(favoriteBtn);
    cardButton.append(animeImage,cardHeader);
    articleEl.append(cardButton, cardFooter);
    columnEl.appendChild(articleEl);
    favoriteDisplayEl.appendChild(columnEl);
  }
}
// }

// Display the correct favorite button by checking if anime is in local storage
function renderFavoriteBtn(inLocalStorage) {
  let favoriteBtn = document.createElement('button');
  let favoriteIcon = document.createElement('i');
  let unfavoriteIcon = document.createElement('i');
  let favoriteText = document.createElement('p');

  favoriteBtn.setAttribute('id', 'favorite-button');
  favoriteBtn.setAttribute('type', 'button');
  favoriteBtn.setAttribute('class', 'w-full mt-2 py-2 flex justify-center items-end rounded-lg shadow-md');

  if (inLocalStorage) {
    unfavoriteIcon.setAttribute('class', 'fa-regular fa-star p-1 collapse');
    favoriteIcon.setAttribute('class', 'fa-solid fa-star p-1');
    favoriteText.textContent = 'Favorited';
  } else {
    unfavoriteIcon.setAttribute('class', 'fa-regular fa-star p-1');
    favoriteIcon.setAttribute('class', 'fa-solid fa-star p-1 collapse');
    favoriteText.textContent = 'Favorite';
  }

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
    }
  }
}

// Create product cards on the modal by passing in a product obj and a dom node
function renderProductCard(productInfo, parent) {
  parent.innerHTML ='';

  for (let i = 0; i < productInfo.length; i++) {
    let productContainerEl = document.createElement('div');
    let productCardEl = document.createElement('div');
    let productUrlEl = document.createElement('a');
    let productImgEl = document.createElement('img');
    let productNameEl = document.createElement('h4');
    let productPriceEl = document.createElement('p');

    productContainerEl.setAttribute('class', 'product-container rounded-lg shadow-md');
    productCardEl.setAttribute('class', 'product-card');
    productUrlEl.setAttribute('href', productInfo[i].url);
    productImgEl.setAttribute('class', 'aspect-square object-contain');
    productImgEl.setAttribute('src', productInfo[i].image);
    
    productNameEl.textContent = productInfo[i].name;
    productPriceEl.textContent = productInfo[i].price;

    productUrlEl.append(productImgEl, productNameEl, productPriceEl);
    productCardEl.appendChild(productUrlEl);
    productContainerEl.appendChild(productCardEl);
    parent.appendChild(productContainerEl);
    
  }
}

// Toggle favorite button and save/remove anime to/from storage
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

// Get anime object from favorite animes with anime id
function GetAnimeById(id)
{
  for (var i = 0; i < resultsCopy.length; i++){
    if (resultsCopy[i].animeId == id)
      return resultsCopy[i];
  }
}

// Call search funtion if enter is pressed in search input
function checkClicked(event) {
  if (event.target.id === 'favorite-button') {
    toggleFavoriteBtn(event.target)
  } else if (event.target.parentNode.id === 'favorite-button') {
    toggleFavoriteBtn(event.target.parentNode);
  }
}

favoriteDisplayEl.addEventListener('click', checkClicked);
renderFavorites();
