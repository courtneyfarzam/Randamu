// const apiKey = '08d30944572c44fe5f3c53e952e3af65';
// const apiId = '291b0eda';
// const apiFood = `https://api.edamam.com/api/recipes/v2?type=public&q=${proteinType}&app_id=291b0eda&app_key=08d30944572c44fe5f3c53e952e3af65&health=${health}&cuisineType=${cuisineType}&mealType=Dinner&mealType=Lunch&dishType=Main%20course&dishType=Salad&dishType=Sandwiches&dishType=Starter&imageSize=REGULAR&random=true&field=label&field=image&field=source&field=healthLabels&field=ingredients&field=cuisineType&field=mealType&field=dishType&field=tags`
// const apiDrink = ``


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
    

  });
// add to search button function 
  selectElement = document.querySelector('#drinks');
  output = selectElement.options[selectElement.selectedIndex].value;


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