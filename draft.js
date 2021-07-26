/*SEARCH BAR*/

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function(){
  const userInput = searchInput.value;

  console.log(userInput);


  /* on filtre pour aller chercher tous les mots commencant par les caracteres de la barre de recherche que ce soit en mimuscules ou majuscules */
const result = recipes.filter(item => item.name.toLocaleLowerCase().includes(userInput.toLocaleLowerCase()));

let suggestion = "";

if(userInput !=""){
 result.forEach(resultItem =>
  suggestion +=
    "<div class='suggestion'>"+resultItem.name+"</div>"   /* OU  `div class='suggestion'>${resultItem.name}</div>`*/
  )
 }
document.getElementById("suggestion").innerHTML = suggestion;


});



/*INGREDIENT TABLE*/


// let ingredients = [];

// for (let i=0; i<ingredients.length; i++){

//     ingredients.push(ingredients[i])
//      console.log(i);
    
// }
// console.log(ingredientTab);
 // console.log(recipeTab[i]["name"]);     /*ou console.log(recipeTab[i].name)*/

// for (let i=0; i<recipeTab.length; i++){



//  /*on crée la div recipeIngredients*/
//  let recipeIngredients = document.createElement("div");


//  recipeIngredients.setAttribute("class", "ingredients");
//  recipeIngredients.innerHTML = recipeTab[i]["ingredients"];  /*on va chercher les ingredients de la recette*/

//  /*on met l'objet recipeIngredients dans l'objet div generale recipe:*/
//  newRecipe.appendChild(recipeIngredients);

// }
