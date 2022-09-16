const apiKey = '33dd3dda2eda41288af3b57daefc3a77';
const apiId = '291b0eda';
var searchBtn = document.querySelector('#searchBtn');
var foodChoices = document.querySelector('#foodOptions');
var drinkChoices = document.querySelector('#drinkOptions');
var foodContainer = document.querySelector('.food-container')
var drinkContainer = document.querySelector('.drink-container')

let proteinType = 'chicken'
let drinkType = 'cocktail'
// Event handler function for searching
// Main food function to add food recipe card
// Main drink function to add drink recipe card
// Function for processing food recipe and fetching API
// Function for processing drink recipe and fetching API
// Function for randomizing drink recipes - food API already does this
// Function for showing and hiding divs, potentially


searchBtn.addEventListener('click', function() {
  fetchFoodRecipes();
  fetchDrinks();
})

// Event listener for drop down menus
document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('select');
M.FormSelect.init(elems);
});





// Search Button

// function showDrink(response) {
//       var drink = response.drinks[0];
//       var i = 1;
//       var stop = false;
//       var ingHead = "<tr><th>Ingredients</th><th>Amount</th></tr>"

      // dynamically create html
      // WE WILL PROBABLY HAVE TO DO FOR EACH HERE
      // var recipeEl = document.createElement('div');
      // recipeEl.setAttribute('class', 'recipe-card');

      // var recipeName = document.createElement('h4');
      // recipeName.textContent = data.title; 
      
      // var drinkCategory = document.createElement('h5');
      // drinkCategory.textContent = data.dishTypes;

      // var drinkImg = document.createElement('img');
      // drinkImg.setAttribute('class', 'recipe-img');
      // drinkImg.src = data.sourceUrl;

      // var ingredients = document.createElement('td');
      // ingredients.textContent = data.extendedIngredients[i].original;

      // var recipeInstructions = document.createElement('p');
      // recipeInstructions = data.analyzedInstructions[0].steps[i];


//       $("#drinkName").text(drink.strDrink);
//       $("#drinkCategory").text("Category: " + drink.strCategory);
//       $("#drinkAlcoholic").text("Origin: " + drink.strAlcoholic);
//       $("#drinkInstructions").text(drink.strInstructions);
//       $("#drinkImage").attr("src", drink.strDrinkThumb);
//       //clear and populate ingredient table
//       $("#drinkIngredient").empty();
//       $("#drinkIngredient").append(ingHead);
    //   while (!stop) {
    //     if (drink["strIngredient" + i]) {
    //       var trDiv = $("<tr>");
    //       var tdDiv1 = $("<td>");
    //       var tdDiv2 = $("<td>");
    //           tdDiv1.text(drink["strIngredient" + i]);
    //           tdDiv2.text(drink["strMeasure" + i]);
    //           trDiv.append(tdDiv1, tdDiv2);
    //           $("#drinkIngredient").append(trDiv);
    //           i++;
    //     } else {
    //       stop = true;
    //     }
    // }


// var searchHistory = JSON.parse(localStorage.getItem('search-history'));
// if (!searchHistory) {
//   searchHistory = [];
//   // set display of search history to none
// }

// // searchHistory is ['food option', 'drink option', 'food option', 'drink option', etc...]
// function recordSearchHistory() {
//   var proteinType = foodChoices.value;
//   var drinkType = drinkChoices.value;
//   searchHistory.push(proteinType, drinkType);
//   localStorage.setItem('search-history', JSON.stringify(searchHistory))
 
//   if (searchHistory) { 
//   for (var i = 0; i < searchHistory.length; i++) {
//     console.log(searchHistory[i]);
//   }}
// }

// add dynamic html elements


function fetchFoodRecipes(data) {
  var proteinType = foodChoices.value;
  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=33dd3dda2eda41288af3b57daefc3a77&titleMatch=${proteinType}&number=100&addRecipeInformation=true&fillIngredients=true`)
  
  .then(response => response.json())
  .then(data => {
      // console.log(data)
      for(var i = 0; i < 5; i++) {
        var randomFood = Math.floor(Math.random() * data.results.length)
        var displayedFood = data.results[randomFood];
        // console.log(displayedFood)
        // Potentially add a solution for repeated recipes
        // console.log(randomFood);
    }
      // dynamically create html
      // WE WILL PROBABLY HAVE TO DO FOR EACH HERE
      // var recipeEl = document.createElement('div');
      // recipeEl.setAttribute('class', 'recipe-card');

      // var recipeName = document.createElement('h4');
      // recipeName.textContent = data.title; 
      
      // var foodCategory = document.createElement('h5');
      // foodCategory.textContent = data.dishTypes;

      // var foodImg = document.createElement('img');
      // foodImg.setAttribute('class', 'recipe-img');
      // foodImg.src = data.sourceUrl;

      // var ingredients = document.createElement('li');
      // ingredients.textContent = data.extendedIngredients[i].original;

      // var recipeInstructions = document.createElement('p');
      // recipeInstructions = data.analyzedInstructions[0].steps[i];
  })

}
  
// // add to search button function 
// selectElement = document.querySelector('#drinks');
// output = selectElement.options[selectElement.selectedIndex].value;


function fetchDrinks(data) {
  var drinkType = drinkChoices.value;
  var drinkApi = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drinkType}`;
  
  fetch(drinkApi)
  .then(response => response.json())
  .then(data => {
      console.log(data)
      for(var i = 0; i < 5; i++) {
        var randomDrinks = Math.floor(Math.random() * data.drinks.length)
        var drinks = data.drinks[randomDrinks].idDrink;
        console.log(randomDrinks)
        console.log(drinks)
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinks}`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
             // dynamically create html
      // WE WILL PROBABLY HAVE TO DO FOR EACH HERE
      var drink = data.drinks[0];

      var recipeEl = document.createElement('div');
      recipeEl.setAttribute('class', 'recipe-card');
      
      var drinkImg = document.createElement('img');
      drinkImg.setAttribute('class', 'recipe-img');
      drinkImg.src = drink.strDrinkThumb;

      var recipeName = document.createElement('h4');
      recipeName.textContent = drink.strDrink; 
      
      var drinkCategory = document.createElement('h5');
      drinkCategory.textContent = drink.strCategory;

      var drinkRecipe = document.createElement('p')
      drinkRecipe.textContent = drink.strInstructions;

      var ingredientList = document.createElement('ul')



      let index = 1;
      let ingredientArray = [];
      while (drink['strIngredient' + index]) {
        ingredientArray.push({name: drink['strIngredient' + index], amount: drink['strMeasure' + index] ? drink['strMeasure' + index]: "A dash "});
        index++;
      }
  
        console.log('Drink: ', drink.strDrink);
        console.log('Ingredients: ');

        ingredientArray.forEach((ingredient) => {
        console.log(`${ingredient.amount} of ${ingredient.name}`)

          
        var ingredients = document.createElement('li');
        ingredients.textContent = `${ingredient.amount} of ${ingredient.name}`;

        ingredientList.append(ingredients);
      });
      recipeEl.append(drinkImg, recipeName, drinkCategory, ingredientList, drinkRecipe);
      drinkContainer.append(recipeEl)

    })
      }
  })
}




fetchDrinks();
