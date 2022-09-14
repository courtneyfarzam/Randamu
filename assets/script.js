const apiKey = '33dd3dda2eda41288af3b57daefc3a77';
const apiId = '291b0eda';


let proteinType = 'Fish'
let output = 'cocktail'
// Event handler function for searching
// Main food function to add food recipe card
// Main drink function to add drink recipe card
// Function for processing food recipe and fetching API
// Function for processing drink recipe and fetching API
// Function for randomizing drink recipes - food API already does this
// Function for showing and hiding divs, potentially


// Event listener for drop down menus
document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('select');
M.FormSelect.init(elems);
});


function fetchFoodRecipes(data) {
  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=33dd3dda2eda41288af3b57daefc3a77&titleMatch=${proteinType}&number=100&addRecipeInformation=true`)
  
  .then(response => response.json())
  .then(data => {
      console.log(data)
      for(var i = 0; i < 5; i++) {
        var displayedFood = Math.floor(Math.random() * data.results.length)
        var randomFood = data.results[displayedFood];
        console.log(displayedFood)
        // Potentially add a solution for repeated recipes
        console.log(randomFood);
    }

  })

}
  
// // add to search button function 
// selectElement = document.querySelector('#drinks');
// output = selectElement.options[selectElement.selectedIndex].value;


function fetchDrinks() {
var drinkApi = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + output;
                
fetch(drinkApi)
.then(function (response) {
  console.log(response);
  console.log(drinkApi);
  response.json().then(function (data) {
    console.log
  })
})
console.log(output);
}

fetchFoodRecipes();

