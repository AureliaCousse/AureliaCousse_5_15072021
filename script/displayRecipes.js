/*jshint esversion: 6 */
//When relying upon ECMAScript 6 features such as const, set this option so JSHint doesn't raise unnecessary warnings.

// -----------------------------------------------------
// FUNCTION
// -----------------------------------------------------

/* Function "showrecipes" created to display recipes with the constant "recipes" already created in js file "recipes*/

showRecipes(recipes);

function displayNoResultMessage() {
    document.getElementById("noResultMessage").style.display = "block";
}
function hideNoResultMessage() {
    document.getElementById("noResultMessage").style.display = "none";
}

function renameUnit(longUnit) {
    switch (longUnit) {
        case "grammes":
            return "g";
        case "cuillères à soupe":
            return "cas";
        case "cuillère à soupe":
            return "cas";
        case "litres":
            return "l";
        case   "Litres":
            return "l";
        case "litre":
            return "l";
        case "cuillères à café":
            return "cac";
        case "cuillère à café":
            return "cac";       
        default:
            return longUnit;
    }   
}

// -----------------------------------------------------
// DISPLAY ALL THE RECIPES BY DEFAULT
// -----------------------------------------------------
/** 
 * @param recipeTab: Tab containing recipes to be displayed
 */

function showRecipes(recipeTab) {

    let recipeList = document.getElementById("recipeList"); /*Nota bene: div "recipeList" has been created in html file*/
    recipeList.innerHTML = "";

    /*on lance une boucle pour afficher toutes les recettes en répétant le code en partant de index 0 et on l'implemente autant de fois jusque indice soit égal à recipeTab.length (cad aller jusqu' à la fin du tableau des recettes*/
    for (let i = 0; i < recipeTab.length; i++) {

        /*on crée la div generale vide qui va contenir tous les objects nécessaire constituant la boite recette*/
        let newRecipe = document.createElement("a");
        newRecipe.setAttribute("class", "recipe");
        newRecipe.setAttribute("id", i + 1);

        /*on crée un cadre image*/
        let recipePhoto = document.createElement("div");
        recipePhoto.setAttribute("class", "recipePhoto");
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
        recipeName.innerHTML = recipeTab[i].name;  /*on va chercher l'intitulé de la recette*/

        let timeIcon = document.createElement("i");
        timeIcon.setAttribute("class", "far fa-clock");

        let recipeTime = document.createElement("h1");
        recipeTime.setAttribute("class", "time");
        recipeTime.innerHTML = recipeTab[i].time + " min";  /*on va chercher le temps de la recette avec + " min" pour avoir espace entre time et min*/

        /*on met les objets name + icon + time dans l'objet div recipeHeader:*/
        recipeHeader.appendChild(recipeName);
        recipeHeader.appendChild(timeIcon);
        recipeHeader.appendChild(recipeTime);

        /*on crée la div recipeDetails*/
        let recipeDetails = document.createElement("div");
        recipeDetails.setAttribute("class", "recipeDetails");
        /*on met l'objet recipeDetails dans l'objet div generale:*/
        newRecipe.appendChild(recipeDetails);

        /*on crée la liste ul des recipeIngredients*/
        let recipeIngredients = document.createElement("ul");
        recipeIngredients.setAttribute("class", "ingredients");
        /*on met l'objet recipeIngredients dans l'objet div generale recipe:*/
        recipeDetails.appendChild(recipeIngredients);

        let ingredientsTab = recipeTab[i].ingredients; /*.ingredients can also be writen ["ingredients"] but dot notation better for JS check*/

        for (let j = 0; j < ingredientsTab.length; j++) {
            /*pour FOR we need 3 info: 1) initialisation (i=xx) 2) condition pour continuer à faire tourner le code 3) l'incrément (savoir comment évolue la variable quand on fait le tour du code)*/

            /* on va chercher les informations contenues dans le tableau ingrédients*/
            let ingredientData = ingredientsTab[j];

            /*on crée un élément li qui contiendra les info ingredient+quantity+unit si existant*/
            let ingredientInfoList = document.createElement("li");
            ingredientInfoList.innerHTML = `<b>${ingredientData.ingredient}</b>`;
            // "<b>" + ingredientData["ingredient"] + "</b>:  "; /*on a des paires clé/valeurs; on va chercher la valeur de la clé "ingredient"*/

            /* OU BIEN ECRIRE: ingredientInfoList.innerHTML = ingredientData.ingredient + " "*/

            /*dans le cas où seul l'ingrédient apparait sans qty ni unit (par exemple le sel) et palier aux différentes orthographes de qty & qté // unit & unite*/
            if (ingredientData.hasOwnProperty("quantity") == true) { /*dans js possible de ne pas mettre ==true (true est implicite)*/
                ingredientInfoList.innerHTML += ": " + ingredientData.quantity + " "; /* += pour dire que le texte est, en plus de ingredient, la quantité (si il y a une clé quantity)*/
            }
            if (ingredientData.hasOwnProperty("quantite") == true) { /*dans js possible de ne pas mettre ==true (true est implicite)*/
                ingredientInfoList.innerHTML += ": " + ingredientData.quantite + " "; /* += pour dire que le texte est, en plus de ingredient, la quantité (si il y a une clé quantity)*/
            }
            if (ingredientData.hasOwnProperty("unit") == true) {
                ingredientInfoList.innerHTML += renameUnit(ingredientData.unit);/*pour dire qu'on rajoute (+=) au texte, l'unité (si il y a une clé unit)*/
            }
            if (ingredientData.hasOwnProperty("unite") == true) {
                ingredientInfoList.innerHTML += renameUnit(ingredientData.unite);/*pour dire qu'on rajoute au texte, l'unité (si il y a une clé unit)*/
            }

            /*on met l'objet li ingredient+qty+unit dans l'objet ul recipeIngredients*/
            recipeIngredients.appendChild(ingredientInfoList);
        }

        /* on va chercher une partie des info contenues dans le tab recipes, soit la partie "description" et on limite son visuel à 300 caractères */
        let instructions = recipeTab[i].description;

        let maxLength = 330; // maxLength for screens > 850px
        if (window.matchMedia("(max-width: 850px)").matches) { // maxLength for screens < 850px
            maxLength = 220;
        }

        /*on crée la div recipeDescription*/
        let recipeDescription = document.createElement("div");
        recipeDescription.setAttribute("class", "recipeDescription");
        recipeDescription.innerHTML = instructions.length > maxLength ? instructions.substring(0, maxLength) + "..." : instructions;  /*on va chercher les instructions de la recette*/

        /*on met l'objet recipeDescription dans l'objet div generale recipe:*/
        recipeDetails.appendChild(recipeDescription);

        /*on ajoute le tout au fichier html*/
        recipeList.appendChild(newRecipe);
    } 

// -----------------------------------------------------
// DISPLAY MESSAGE if no recipe available related to user's input
// -----------------------------------------------------    
    if (recipeTab.length === 0) {
        displayNoResultMessage();
    }

    if (SEARCH_INPUT.value.length > 0 && SEARCH_INPUT.value.length < 3) 
    {
        hideNoResultMessage();
    }
    if (!recipeTab.length === 0) {
        hideNoResultMessage();
    }
}


