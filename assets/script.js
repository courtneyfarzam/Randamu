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
        console.log(displayedFood)
        // Potentially add a solution for repeated recipes
        console.log(randomFood);
    }

  })

}
  
// // add to search button function 
// selectElement = document.querySelector('#drinks');
// output = selectElement.options[selectElement.selectedIndex].value;



function processRandDrink() {
  var drinkURL =
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  drinkAjax(drinkURL);
};

function fetchDrinks() {
  var drinkApi = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + drinkType;
                
fetch(drinkApi)
.then(function (response) {
  console.log(response);
  console.log(drinkApi);
  response.json().then(function (data) {
    console.log

    for(var i =0; i < 5;  i++){

      var drinkCount = data.drinks.length;
              var drinkPick = Math.floor(Math.random() * drinkCount);
              var drinkRand = data.drinks[drinkPick].idDrink;
  
              var newDrinkURL =
                  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkRand;
    }
  })
})
console.log(output);
}

function drinkChoice(URL) {
  $.ajax({
      url: URL,
      method: "GET",
  }).then(function (response) {
      // dispDrink(response);
  });
};

//TESTING PUSH

fetchDrinks();
fetchFoodRecipes();
