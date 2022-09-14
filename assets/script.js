const apiKey = '33dd3dda2eda41288af3b57daefc3a77';
const apiId = '291b0eda';
var searchBtn = document.querySelector('#searchBtn');
var foodChoices = document.querySelector('#foodOptions');
var drinkChoices = document.querySelector('#drinkOptions');

let proteinType = 'chicken'
// let output = 'cocktail'
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

function searchForRecipes(event) {
  var proteinType = foodChoices.value;
  var drinkType = drinkChoices.value;
  console.log(proteinType)
  console.log(drinkType)
}
searchBtn.addEventListener('click', searchForRecipes)




function fetchFoodRecipes(data) {
  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=33dd3dda2eda41288af3b57daefc3a77&titleMatch=${proteinType}&number=100&addRecipeInformation=true`)
  
  .then(response => response.json())
  .then(data => {
      console.log(data)
      for(var i = 0; i < 5; i++) {
        var displayedFood = Math.floor(Math.random() * data.results.length)
        var randomFood = data.results[displayedFood];
        // console.log(displayedFood);
        // Potentially add a solution for repeated recipes
        // console.log(randomFood);
    }
      // dynamically create html
      var recipeEl = document.createElement('div');
      recipeEl.setAttribute('class', 'recipe-card');

      var recipeName = document.createElement('h4');
      
      var foodCategory = document.createElement('h5');
      
      var foodImg = document.createElement('img');
      foodImg.setAttribute('class', 'recipe-img');
      foodImg.src = '#';

      var ingredientTable = document.createElement('tr');
      
      var ingredients = document.createElement('td');
      
      var ingredientAmount = document.createElement('td');
      
      var recipeInstructions = document.createElement('p');
      

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
