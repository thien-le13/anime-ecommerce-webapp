const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1b9acf44bamshbe2aae19de3526fp183346jsndc43cfaa106c',
		'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
	}
};

fetch('https://amazon24.p.rapidapi.com/api/product?categoryID=aps&keyword=Fullmetal%20Alchemist%20brother&country=US&page=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

