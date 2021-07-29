/*INGREDIENT TAB*/

// let ingredient






/*SEARCH BAR*/

const searchinput = document.getElementById("searchInput");

searchinput.addEventListener("keyup", function(){

  const input = searchinput.value;

  /* filter to get all words in title or description of the recipe containing caracters entered in search bar in lowercase or uppercase. */
  const result = recipes.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())||item.description.toLocaleLowerCase().includes(input.toLocaleLowerCase()));

  let suggestion = "";

  if (input !=""){  /*if field input is not empty show result if not show nothing*/
    result.forEach(resultItem => 
      suggestion += `
      <div class="suggestions">${resultItem.name}</div>`
    )
  }

  document.getElementById("suggestions").innerHTML = suggestion;
  
})

// /*SEARCH BAR*/

// const searchIngredient = document.getElementById("searchIngredient");

// searchIngredient.addEventListener("keyup", function(){

//   const input = searchinput.value;

//   /* filter to get all words in title or description of the recipe containing caracters entered in search bar in lowercase or uppercase. */
//   const result = recipes.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())||item.description.toLocaleLowerCase().includes(input.toLocaleLowerCase()));

//   let suggestion = "";

//   if (input !=""){  /*if field input is not empty show result if not show nothing*/
//     result.forEach(resultItem => 
//       suggestion += `
//       <div class="suggestions">${resultItem.name}</div>`
//     )
//   }

//   document.getElementById("suggestions").innerHTML = suggestion;
  
// })









