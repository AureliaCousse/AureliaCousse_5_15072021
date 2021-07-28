/*on crée le tableau vide où seront stockées ensuite les recettes*/
let tabRecette = [];


/*On appelle les fonctions*/

filtreRecette(tabRecette); /*on appelle la fonction 1 ci-dessous qui permet d'ajouter les recettes du fichier js*/
showRecipes(tabRecette);/*on appelle la fonction 2 ci-dessous qui permet d'aafficher les recettes*/



/** Fonction 1 pour ajouter les recettes dans le tableau en fonction des filtres
* @param recipeTab: le tableau contenant les recettes à afficher
*/

function filtreRecette(recipeTab) {
    // a developper par defaut ajoute toutes les recettes
    for (let i = 0; i < recipes.length; i++) {
        recipeTab.push(recipes[i])
    }
}

/** Fonction 2 pour afficher toutes les recettes en fonction des filtres
* @param recipeTab: le tableau contenant les recettes à afficher
*/
function showRecipes(recipeTab) { /*fonction qui contient:*/

    /*on lance une boucle pour afficher toutes les recettes en répétant le code en partant de index 0 et on l'implemente autant de fois jusque indice soit égal à recipeTab.length (cad aller jusque à la fin du tableau des recettes*/
    for (let i = 0; i < recipeTab.length; i++) {

        /*on crée la div generale vide qui va contenir tous les objects nécessaire constituant la boite recette*/
        let newRecipe = document.createElement("a");
        newRecipe.setAttribute("class", "recipe");
        // newRecipe.setAttribute("href", "newRecipe.html"); *************    A REMETTRE QD CSS TERMINE   ***************
        newRecipe.setAttribute("id", i + 1);

        /*on crée une image*/
        let recipePhoto = document.createElement("img");
        recipePhoto.setAttribute("class", "recipePhoto");
        recipePhoto.setAttribute("alt", "photo recipe");

        /*on met l'objet image dans l'objet div:*/
        newRecipe.appendChild(recipePhoto);

        /*on crée la div recipeInfo*/
        let recipeInfo = document.createElement("div");
        recipeInfo.setAttribute("class", "recipeInfo");

        /*on met l'objet recipeInfo dans l'objet div generale:*/
        newRecipe.appendChild(recipeInfo);

        /*on crée la div recipeHeader*/
        let recipeHeader = document.createElement("div");
        recipeHeader.setAttribute("class", "recipeHeader");

        /*on met l'objet recipeHeader dans l'objet div recipeInfo:*/
        recipeInfo.appendChild(recipeHeader);

        /*on crée les objets name + icon + time qui sont dans la div recipeHeader*/
        let recipeName = document.createElement("h1");
        recipeName.setAttribute("class", "name");
        recipeName.innerHTML = recipeTab[i]["name"];  /*on va chercher l'intitulé de la recette*/

        let timeIcon = document.createElement("i");
        timeIcon.setAttribute("class", "far fa-clock");

        let recipeTime = document.createElement("h1");
        recipeTime.setAttribute("class", "time");
        recipeTime.innerHTML = recipeTab[i]["time"] + " min";  /*on va chercher le temps de la recette avec + " min" pour avoir espace entre time et min*/

        /*on met les objets name + icon + time dans l'objet div recipeHeader:*/
        recipeHeader.appendChild(recipeName);
        recipeHeader.appendChild(timeIcon);
        recipeHeader.appendChild(recipeTime);

        /*on crée la div recipeDetails*/
        let recipeDetails = document.createElement("div");
        recipeDetails.setAttribute("class", "recipeDetails");

        /*on met l'objet recipeDetails dans l'objet div generale:*/
        newRecipe.appendChild(recipeDetails);


        /* on va chercher une partie des info contenues dans le tab recipes, soit la partie "description" et on limite son visuel à 300 caractères */
        let instructions = recipeTab[i]["description"];
        const maxLength = 300;

        /*on crée la div recipeDescription*/
        let recipeDescription = document.createElement("div");
        recipeDescription.setAttribute("class", "recipeDescription");
        recipeDescription.innerHTML = instructions.length>maxLength ? instructions.substring(0, maxLength) + "..." : instructions;  /*on va chercher les instructions de la recette*/
            /* instructions ternaires: ? => if // ":" =>else*/

        // to be deleted (replaced by line85 all in 1):
        //   if (instructions.length > maxLength) {
        //     recipeDescription.innerHTML = instructions.substring(0, maxLength) + "..."; /*pour limiter la llogueur des instructions - si trop long; ...*/
        // }


        /*on met l'objet recipeDescription dans l'objet div generale recipe:*/
        recipeDetails.appendChild(recipeDescription);

        /*on crée la liste ul des recipeIngredients*/
        let recipeIngredients = document.createElement("ul");
        recipeIngredients.setAttribute("class", "ingredients");

        /*on met l'objet recipeIngredients dans l'objet div generale recipe:*/
        recipeDetails.appendChild(recipeIngredients);

        let ingredientsTab = recipeTab[i]["ingredients"];

        for (let j = 0; j < ingredientsTab.length; j++) {
            /*pour FOR we need: 3 info -> initialisation (i=xx) + condition pour continuer à faire tourner le code + l'incrément (savoir comment évolue la variable quand on fait le tour du code)*/


            /* on va chercher les informations contenues dans le tableau ingrédients*/
            let ingredientData = ingredientsTab[j];

            /*on crée un élément li qui contiendra les info ingredient+quantity+unit si existant*/
            let ingredientInfoList = document.createElement("li");
            ingredientInfoList.innerHTML = ingredientData["ingredient"] + ":  "; /*on a des paires clé/valeurs; on va chercher la valeur de la clé "ingredient"*/

           /* OU BIEN ECRIRE: ingredientInfoList.innerHTML = ingredientData.ingredient + " "*/

            /*dans le cas où seul l'ingrédient apparait sans quty ni unit (par exemple le sel)*/
            if (ingredientData.hasOwnProperty("quantity") == true) { /*dans js possible de ne pas mettre ==true (true est implicite)*/
                ingredientInfoList.innerHTML += ingredientData["quantity"] + " "; /* += pour dire que le texte est, en plus de ingredient, la quantité (si il y a une clé quantity)*/
            }
            if (ingredientData.hasOwnProperty("unit") == true) {
                ingredientInfoList.innerHTML += ingredientData["unit"];/*pour dire qu'on rajoute au texte, l'unité (si il y a une clé unit)*/
            }

            /*on met l'objet li ingredient+qty+unit dans l'objet ul recipeIngredients*/
            recipeIngredients.appendChild(ingredientInfoList);
        }

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








        /*on ajoute le tout au fichier html*/
        let recipeList = document.getElementById("recipeList"); /*cette div est déjà créée dans fichier html*/
        recipeList.appendChild(newRecipe);

    }
}