"use strict";
//Day 13 coding challenge
//Question 1:Large shirts:Default values in make_shirt().
function make_shirt(size = "large", message = "I Love TypesScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt; //default large and message
make_shirt("medium"); // default message,medium size
make_shirt("small", "Drive into Coding"); //Custom message,small size.
//Question 2:Cities:Describing cities with a function.
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");
//Question 3:Cities names:Formating city-country pair.
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
