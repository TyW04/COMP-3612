// convert comma-separated values into an array
const countries = csv.split(",");
// convert array into delimited string
const countryStr = countries.join(",");
// check if these are arrays
console.log(`countries is an array: ${Array.isArray(countries)}`);
console.log(`countryStr is an array: ${Array.isArray(countryStr)}`);
//  sort a simple array 
countries.sort();
// reverse the sort
countries.reverse();
// remove the first element
countries.shift();
// remove the last element
countries.pop();
// add new elements to the front of the array
countries.unshift("Mexico");
countries.unshift("Spain");
// search for element
countries.includes("Germany");
// search for element index
countries.indexOf("Germany");
// make a new array by extracting from another array
const countriesSplice = countries.splice(3);

console.log('---------------------');

// there are other array methods which you will learn in Ch 10 */

// use a loop to output all cities whose continent=="NA"
for (let city of cities) {
   const continent = city.continent;
   if (continent == "NA") {
      console.log(city.city);
   }
}

console.log('---------------------');

// use a loop to output gallery names whose country=="USA"
for (let city of cities) {
   const country = city.country;
   if (country == "United States") {
      console.log(city.city);
   }
}

console.log('---------------------');

// convert JSON colorsAsString to js object
const colorsAsStringArr = JSON.parse(colorsAsString);

// use a loop to output color name if luminance < 75
for (let color of colorsAsStringArr) {
   if (color.luminance < 75) {
      console.log(color.name);
   }
}

console.log('---------------------');

// use two nested loops - outer: loop thru colors
for (let color of colorsAsStringArr) {
   let sum = 0;
   for (let colorVal of color.rgb) {
      sum += colorVal;
   }
   console.log(`${color.name}: ${sum}`);
}

console.log('---------------------');

/* use a loop output using document.write a unordered
   list of links to the galleries in the galleries array.
   Make the label of the link the name property, and the href
   the url property */
for (let gallery of galleries) {
   let name = gallery.name;
   let url = gallery.url;

   document.write(`<li style="list-style: none"><a href = ${url}>${name}</a></li>`);
}



/* use a loop output using document.write an unordered
   list of color names in the colors array.
   Set the style property of each <li> as follows: 
   1. set the background color to the values in the rgb array using the CSS 
      rgb() function.  This make the background color of the item the same
      as the color name.
   2. Set the text color to white if the luminosity is less than 75. This will 
    make the text color white for the darker colors.  */
for (let color of colorsAsStringArr) {
   let textColor = "black";
   if (color.luminance < 75) {
      textColor = "white";
   }

   document.write(`<li style="list-style: none; background-color: rgb(${color.rgb}); color: ${textColor}"<a>${color.name}</a></li>`);
}