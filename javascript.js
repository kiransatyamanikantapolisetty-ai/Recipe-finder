async function findRecipe(){

let food=
document.getElementById(
"searchBox"
).value;

let url=
`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;

let response=
await fetch(url);

let data=
await response.json();

let result=
document.getElementById(
"result"
);

if(data.meals){

let meal=
data.meals[0];

result.innerHTML=`

<h2>${meal.strMeal}</h2>

<img src="${meal.strMealThumb}">

<h3>Instructions</h3>

<p>${meal.strInstructions}</p>

`;

}

else{

result.innerHTML=
"No Recipe Found";

}

}
