const options = {
	method: 'GET',
	headers: {
		// 'X-RapidAPI-Key': '165ecfd83fmsh1931521e750a42fp1d9be5jsn1dad31f729e1',  // this is my key id change it to your own
		'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
	}
};

var amazURL =
  "https://amazon24.p.rapidapi.com/api/product?categoryID=aps&keyword=ANIME&country=US&page=1";
var amaz =
  "https://amazon24.p.rapidapi.com/api/product?categoryID=aps&keyword=Bleach%3A%20Sennen%20Kessen-hen&country=US&page=1";

const merchLength = 3;

async function GetAnimeMerch(animeTitle) {
  // This function returns a promise, use .this to accept the promised array of merch
  var itemLength = merchLength;
  var merchList = [];

  var encodedTitle = encodeURIComponent(animeTitle + "anime");

  const merch = await fetch(amazURL.replace('ANIME', encodedTitle), options)
	.then(response => response.json())
	.then(function(data){
    for (var i = 0; i < itemLength; i++) {
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

function LoadExpandedMerch(id) {
  id.setAttribute("onclick", "CloseExpandedMerch(this)");

  var productName = id.nextElementSibling.querySelector("#gift-ideas");
  var listOfCards = productName.querySelectorAll(".product-card");

  GetAnimeMerch(id.querySelector("h3").textContent)
    .then((response) => response)
    .then(function (data) {
      for (var j = 0; j < listOfCards.length; j++) {
        listOfCards[j].querySelector("img").setAttribute("src", data[j].image);
        listOfCards[j].querySelector("a").setAttribute("href", data[j].prodURL);
        listOfCards[j].querySelector("h4").textContent = data[j].name;
        listOfCards[j].querySelector("p").textContent = "$" + data[j].price;
      }
    });
}
function CloseExpandedMerch() {
  return;
}