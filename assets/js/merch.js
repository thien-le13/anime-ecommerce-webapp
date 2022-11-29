const options = {
  method: "GET",
  headers: {
    // 'X-RapidAPI-Key': '7f20f0b961msh4b0b7078f749af8p1531dcjsnc37a375c0024',  // this is my key id change it to your own
    "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
  },
};

var amazURL =
  "https://amazon24.p.rapidapi.com/api/product?categoryID=aps&keyword=Bleach%20Movie%3A%20Memories%20of%20Nobody&country=US&page=1";

const merchLength = 5;

function GetAnimeMerch(animeTitle) {
  // This function returns a promise, use .this to accept the promised array of merch
  var itemLength = merchLength;
  var merchList = [];

  var encodedTitle = encodeURIComponent(animeTitle);

  fetch(amazURL.replace("ANIME", encodedTitle), options)
    .then((response) => response.json())
    .then(function (data) {
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
          prodURL: data.docs[i].product_detail_url,
        };
        merchList.push(item);
      }
      return merchList;
    })
    .catch((err) => console.error(err));
}

// fetch(
//   "https://amazon24.p.rapidapi.com/api/product?categoryID=aps&keyword=Bleach%20Movie%3A%20Memories%20of%20Nobody&country=US&page=1",
//   options
// )
//   .then((response) => response.json())
//   .then(function (data) {
//     console.log(data);
//   });
