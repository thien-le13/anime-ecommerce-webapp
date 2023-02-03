# Weebs UwUnited

As a team we wanted to build a webapp based on our common interests. We agreed upon anime but quickly realized that everyones knowledge on it varied.
That sparked an idea for us, why not create a webapp that could assist the user in finding the perfect gift for their friends that may not watch the same anime.

Together we learned how to:

- Use the power of friendship; to work seamlessly with a team on GitHub.
- Apply two server-side API's and store it's data client-side.
- Use stored data to create a favorites page.
- Create a modal and use our stored data within it.
- Use Tailwind as our CSS framework.

## Usage

Visit our page: https://thien-le13.github.io/anime-ecommerce-webapp/

You are able to search for any anime in the search bar, the synopsis as well as products will display when an anime is selected. (Refer to GIF 1.)

The random anime button will work similarly as the original search button, but instead returning random anime. (Refer to GIF 2.)

When products are clicked on, it will take user directly to their amazon page. (Refer to GIF 3.)

The user will be able to favorite their search after products have loaded by clicking on the favorite button. The anime will then be stored in the favorites page that is accessible by the favorites tabs at the top of the site. (Refer to GIF 4.)

### GIF 1
![Search by title](./assets/img/search-by-title.gif)

### GIF 2
![Search by random](./assets/img/search-by-random.gif)

### GIF 3
![Amazon Product](./assets/img/amazon-product.gif)

### GIF 4
![Favorite and unfavorite](./assets/img/fav-unfav.gif)

## Credits

- Jikan API (https://rapidapi.com/theapiguy/api/jikan1/)
- Amazon API (https://rapidapi.com/b2g.corporation/api/amazon24/)

## Project Team

- Stephanie Tseng (https://github.com/wytseng)
- Misty Pham (https://github.com/phammist)
- Justin Chen (https://github.com/justincchen)
- Bryant Trinh (https://github.com/bryanttrinh)
- Jaret Ishii (https://github.com/smudge121)
- Thien Le (https://github.com/thien-le13)

## Limitations

- Amazon API requires personal keys, each limits to 200 fetches. Solution is swap keys once limit is reached. (Currently, Amazon API is disabled to avoid over usage) 
- The favorites button during the search will not be functional until the products from Amazon are fetched.
