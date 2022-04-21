const movieSearch = require("./index");

const mockDb = ["2The Lord of the Rings", "2Up", "2Rocky", "2Rocky 2", "2Rocky 3", "2Rocky 4", "2Rocky 5", "2Rocky 6", "2Slumdog Millionaire", "2Beauty and the Beast", "2Seven", "2Inception", "2Die Hard", "2The Lion King", "2The Dark Knight", "2The Matrix", "2The Shining"];

it("this is my first test", () => {
    expect("hello").toEqual("hello");
})

it("Search with empty result", () => {
    expect(movieSearch(mockDb, "efiuwefuihe")).toEqual([]);
})

it("Search with word 'rocky', expect a non empty result", () => {
    expect(movieSearch(mockDb, "rocky")).toEqual(["2Rocky", "2Rocky 2", "2Rocky 3", "2Rocky 4", "2Rocky 5"]);
})