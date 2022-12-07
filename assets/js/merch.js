const options = {
	method: 'GET',
	headers: {
// 		'X-RapidAPI-Key': 'e19be23d7dmshbc26129271b44d8p15ceacjsnd977437abe92',  
		'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
	}
};

var amazURL =
  "https://amazon24.p.rapidapi.com/api/product?categoryID=aps&keyword=ANIME&country=US&page=1";
// var amaz =
//   "https://amazon24.p.rapidapi.com/api/product?categoryID=aps&keyword=Bleach%3A%20Sennen%20Kessen-hen&country=US&page=1";

const merchLength = 3;


async function GetAnimeMerch(animeTitle) {
  // This function returns a promise, use .this to accept the promised array of merch
  var itemLength = merchLength;
  var merchList = [];

  var encodedTitle = encodeURIComponent(animeTitle + " anime");

  const merch = await fetch(amazURL.replace('ANIME', encodedTitle), options)
	.then(response => response.json())
	.then(function(data){

    for (var i = 0; i < Math.min(data.docs.length, itemLength); i++) {
      if (!(data.docs[i].app_sale_price != null)) {
        // should skip if price is null
        itemLength++;
        continue;
      }
      var item = {
        name: data.docs[i].product_title,
        image: data.docs[i].product_main_image_url,
        price: data.docs[i].app_sale_price,
        prodURL: data.docs[i].product_detail_url
      };
      merchList.push(item);
    }
    return merchList;
  }).catch((err) => console.error(err));

  return Promise.resolve(merch);

}

var searchResults = [];

function ReceiveSearchResults(results) {
  searchResults = results;
}

function LoadExpandedMerch(element) {
  element.setAttribute("onclick", "CloseExpandedMerch(this)");

  var productName = element.nextElementSibling.querySelector("#gift-ideas");
  var listOfCards = productName.querySelectorAll(".product-card");
  console.log(listOfCards);

  GetAnimeMerch(element.querySelector("h3").textContent)
    .then((response) => response)
    .then(function (data) {
      console.log(data)
      if (data.length < listOfCards.length) {
        if (data.length === 0) {
          let noProductMsg = document.createElement('h4');
          noProductMsg.textContent = 'No Products to display';
          noProductMsg.setAttribute('class','p-4 rounded-lg shadow-md')
          productName.innerHTML = '';
          productName.appendChild(noProductMsg);
          return;
        } else {
          for (let k = 0; k < (listOfCards.length - data.length); k++) {
            productName.removeChild(listOfCards[k].parentNode);
            productName = element.nextElementSibling.querySelector("#gift-ideas");
            listOfCards = productName.querySelectorAll(".product-card");
          }
        }
      }
      for (var j = 0; j < data.length; j++) {
        listOfCards[j].querySelector("img").setAttribute("src", data[j].image);
        listOfCards[j].querySelector("a").setAttribute("href", data[j].prodURL);
        listOfCards[j].querySelector("h4").textContent = (data[j].name.length > 100 ? (data[j].name.substring(0, 100) + '...') : data[j].name);
        listOfCards[j].querySelector("p").textContent = "$" + data[j].price;
      }
      productName.closest(".result-content").dataset.canFav = "true";
    });
}

function CloseExpandedMerch() {
  return;
}


