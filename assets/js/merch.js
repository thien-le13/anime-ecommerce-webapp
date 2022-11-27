const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9d1fac8e43msh234766662fd7692p17fad3jsn67d79895e4ed',  // this is my key id change it to your own
		'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
	}
};

var amazURL = 'https://amazon24.p.rapidapi.com/api/product?categoryID=aps&keyword=ANIME&country=US&page=1'

const merchLength = 5;

function GetAnimeMerch(animeTitle)
{
    var itemLength = merchLength;
    var merchList = [];

    fetch(amazURL.replace('ANIME', animeTitle), options)
	.then(response => response.json())
	.then(function(data){
        // console.log(data);

        for (var i = 0; i < itemLength; i++)
        {
            if (!(data.docs[i].app_sale_price != null)) // should skip if price is null
            {
                itemLength++;
                continue;
            }


            var item = {
                name: data.docs[i].product_title,
                image: data.docs[i].product_main_image_url,
                price: data.docs[i].app_sale_price,
                prodURL: data.docs[i].product_detail_url
            };
            console.log(item);
            merchList.push(item);
            console.log(merchList);
        }
    })
	.catch(err => console.error(err));

    return merchList;
}