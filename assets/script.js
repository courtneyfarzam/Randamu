const apiKey = '33dd3dda2eda41288af3b57daefc3a77';
const apiId = '291b0eda';
var searchBtn = document.querySelector('#searchBtn');
var foodChoices = document.querySelector('#foodOptions');
var drinkChoices = document.querySelector('#drinkOptions');
var searchHistoryEl = document.getElementById('search-history');
var foodContainer = document.querySelector('.food-container');
var drinkContainer = document.querySelector('.drink-container');
var recentFoodEl = document.querySelector('#recent-food');
var recentDrinkEl = document.querySelector('#recent-drink');


searchBtn.addEventListener('click', function() {
  fetchFoodRecipes();
  fetchDrinks();
  recordSearchHistory();
})

// Event listener for drop down menus
document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('select');
M.FormSelect.init(elems);
});

var searchHistory = JSON.parse(localStorage.getItem('search-history'));
  if (!searchHistory) {
    searchHistory = [];
  }

// searchHistory is ['food option', 'drink option', 'food option', 'drink option', etc...]
function recordSearchHistory() {
  var proteinType = foodChoices.value;
  var drinkType = drinkChoices.value;
  searchHistory.push(proteinType, drinkType);
  localStorage.setItem('search-history', JSON.stringify(searchHistory))

  if (searchHistory) { 
    for (var i = 0; i < searchHistory.length; i++) {
    console.log(searchHistory[i]);
  }}

  var foodHistoryList = document.createElement('ul');
  var drinkHistoryList = document.createElement('ul');
  
  var foodHistoryItems = document.createElement('li');
  foodHistoryItems.textContent = proteinType;

  var drinkHistoryItems = document.createElement('li');
  drinkHistoryItems.textContent = drinkType;
  
  recentFoodEl.append(foodHistoryItems);
  recentDrinkEl.append(drinkHistoryItems);
  foodHistoryList.prepend(foodHistoryItems);
  drinkHistoryList.prepend(drinkHistoryItems);
  searchHistoryEl.append(foodHistoryList, drinkHistoryList);
}




function fetchFoodRecipes(data) {
  var proteinType = foodChoices.value;

  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=050faf63cc2f45df94a3a29319515b93&titleMatch=${proteinType}&number=50&addRecipeInformation=true&fillIngredients=true`)
  
  .then(response => response.json())
  .then(data => {
      console.log(data)
      for(var i = 0; i < 5; i++) {
        var randomFood = Math.floor(Math.random() * data.results.length)
        var displayedFood = data.results[randomFood];
        console.log(displayedFood)
        console.log(randomFood);
        displayedFood.forEach
         var results = data.results[0];
         var recipeEl = document.createElement('div');
         recipeEl.setAttribute('class', 'recipe-card');
         
         var foodImg = document.createElement('img');
         foodImg.setAttribute('class', 'recipe-img');
         foodImg.src = displayedFood.image;
         
         var recipeName = document.createElement('h4');
         recipeName.textContent = displayedFood.title; 
         
         var foodCategory = document.createElement('h5');
         foodCategory.textContent = displayedFood.dishTypes;
        
         var ingredients = document.createElement('li');
         ingredients.textContent = displayedFood.extendedIngredients[i].original;
   
         var foodRecipe = document.createElement('p');
         foodRecipe.textContent = displayedFood.analyzedInstructions[0].steps[i];
   
   
         var ingredientList = document.createElement('ul')
   
         ingredientList.append(ingredients);
         recipeEl.append(foodImg, recipeName, foodCategory, ingredientList, foodRecipe);
         foodContainer.append(recipeEl)
     }
  })

}

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
