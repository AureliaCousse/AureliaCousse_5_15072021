/*SEARCH BAR*/

function myFunction() {
    // Declare variables
    var input, filter, txtValue;
    input = document.getElementById('userInput');
    filter = input.value.toUpperCase();
    
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i <recipeTab.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }





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
