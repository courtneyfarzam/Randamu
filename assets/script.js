const apiKey = '08d30944572c44fe5f3c53e952e3af65';
const apiId = '291b0eda';
const apiFood = `https://api.edamam.com/api/recipes/v2?type=public&q=${proteinType}&app_id=291b0eda&app_key=08d30944572c44fe5f3c53e952e3af65&health=${health}&cuisineType=${cuisineType}&mealType=Dinner&mealType=Lunch&dishType=Main%20course&dishType=Salad&dishType=Sandwiches&dishType=Starter&imageSize=REGULAR&random=true&field=label&field=image&field=source&field=healthLabels&field=ingredients&field=cuisineType&field=mealType&field=dishType&field=tags`
const apiDrink = ``


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
    

  });
