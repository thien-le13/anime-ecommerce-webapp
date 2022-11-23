fetch("https://api.jikan.moe/v4/anime/1/full")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

//   var animeName =