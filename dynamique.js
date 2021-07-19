//to confirm what kind of input is expected in field//
let nameRegex = /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF-\s]+$/; //accepte minuscule majuscule tiret et espaces
let servingsRegex = /^[0-99]$/;
let ingredientsRegex = /^[a-zA-Z-\s]+$/;
let quantityRegex = /^[0-9999]$/;;
let unitRegex = /^[a-zA-Z]+$/;
let timeRegex = /^[0-999]$/;
let descriptionRegex = /^[a-zA-Z-\s]+$/;
let applianceRegex = /^[a-zA-Z-\s]+$/;
let ustensilsRegex = /^[a-zA-Z-\s]+$/;


let recipeTab = [];

for (let i=0; i<recipes.length; i++){

     recipeTab.push(recipes[i])
     // console.log(i);
    
}
// console.log(recipeTab);
 // console.log(recipeTab[i]["name"]);     /*ou console.log(recipeTab[i].name)*/

for (let i=0; i<recipeTab.length; i++){
   
    /*on crée la div generale vide qui va contenir tous les objects nécessaire constituant la boite recette*/
    let newRecipe = document.createElement("div"); 
    newRecipe.setAttribute("class", "recipe");
    newRecipe.setAttribute("id", i+1);
    
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

    let recipeTime= document.createElement("h1");
    recipeTime.setAttribute("class", "time");
    recipeTime.innerHTML =  recipeTab[i]["time"]+" min" ;  /*on va chercher le temps de la recette avec + " min" pour avoir espace entre time et min*/

    /*on met les objets name + icon + time dans l'objet div recipeHeader:*/
    recipeHeader.appendChild(recipeName);
    recipeHeader.appendChild(timeIcon);
    recipeHeader.appendChild(recipeTime);


    
    













    
    /*on ajoute le tout au fichier html*/
    let recipeList = document.getElementById("recipeList"); /*cette div est déjà créée dans fichier html*/
    recipeList.appendChild(newRecipe);

    }