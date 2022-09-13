const apiKey = '08d30944572c44fe5f3c53e952e3af65';
const apiId = '291b0eda';

let proteinType = 'chicken'
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

// Function for getting food API data
function fetchFoodRecipes(data) {
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${proteinType}&app_id=291b0eda&app_key=08d30944572c44fe5f3c53e952e3af65&mealType=Dinner&mealType=Lunch&dishType=Main%20course&dishType=Salad&dishType=Sandwiches&dishType=Starter&imageSize=REGULAR&random=true&field=label&field=image&field=source&field=healthLabels&field=ingredients&field=cuisineType&field=mealType&field=dishType&field=tags`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // protein type will be pulled on search click event
        for(var i = 0; i < 5; i++) {
            var displayedFood = Math.floor(Math.random() * data.hits.length)
            var randomFood = data.hits[i].recipe;
            console.log(displayedFood)
            // Potentially add a solution for repeated recipes
            console.log(randomFood);
        }

    })

}

fetchFoodRecipes();

