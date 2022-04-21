const myList = ["The Lord of the Rings", "Up", "Rocky", "Rocky 2", "Rocky 3", "Rocky 4", "Rocky 5", "Rocky 6", "Slumdog Millionaire", "Beauty and the Beast", "Seven", "Inception", "Die Hard", "The Lion King", "The Dark Knight", "The Matrix", "The Shining"]

const movieSearch = (arr, str) => arr.filter(movie => movie.toLowerCase().indexOf(str.toLowerCase()) !== -1).slice(0, 5);

/* console.log(movieSearch(myList, "the")); */

module.exports = movieSearch;