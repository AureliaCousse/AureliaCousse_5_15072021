// -----------------------------------------------------
// CONSTANTES
// -----------------------------------------------------

const searchIngr = document.getElementById("userIngr"); /*tells what is to be listened: the user input i.e. userIngr*/
const searchUst = document.getElementById("userUst"); /*tells what is to be listened: the user input i.e. userUst*/
const searchApp = document.getElementById("userApp"); /*tells what is to be listened: the user input i.e. userApp*/


// -----------------------------------------------------
// VARIABLES
// -----------------------------------------------------

/*To create tables in which will be stoked the elements INGR, APP & UST */

let tabIngredients = getAllIngr(); /*Tab with all Ingr*/
let tabSelectIngr = []; /*Tab of Ingr selected as tag only*/

let tabAppareils = getAllApp();
let tabSelectApp = [];/*Tab of all App selected as tag*/

let tabUstensiles = getAllUst();
let tabSelectUst = [];/*Tab of all Ust selected as tag*/


// -----------------------------------------------------
// FONCTIONS
// -----------------------------------------------------

function getAllIngr() {
    let tabAllIngr = []; /*to create an empty tab that will contain all the App*/
    recipes.forEach(recette => { /*to go through all the recipes 1 by 1 with the variable "recette" that is the current recipe, beginning by the recipe  index 0 then index 0 etc...till the end of tab*/
        recette.ingredients.forEach(currentIngredient => {   /*current ingredient is each box containing ingredient+qty+unit in the main tab of the ingr of a given recipe*/
            /*currentIngredient exists for this loop ONLY: it is a local variable so we can reuse the name for another loop, function etc... it will be a different thing*/
            let ingr = currentIngredient.ingredient; /*variable pour éviter les répétitions de currentingredient.infgredient dans cette même boucle locale*/
            if (!tabAllIngr.includes(ingr.toLowerCase())) {  /*if one Ingr of one of the recipes is not yet (negative shown by "!") listed in the Ingr table, then  it is displayed*/
               /* whatever the way word is written in recipe, we get it all in lowercase; then we use CSS text transform capitalize pour display words starting by uppercase*/
                tabAllIngr.push(ingr.toLowerCase()); /*push: at each loop, we add the Ingr if it is what we are searching for*/
            }
        })
    })
    tabAllIngr.sort();
    return tabAllIngr;
}

function getAllApp() {
    let tabAllApp = []; /*to create an empty tab that will contain all the App*/
    recipes.forEach(recette => { /*to go through all the recipes 1 by 1 with the variable "recette" that is the current recipe, beginning by the recipe  index 0 then index 0 etc...till the end of tab*/
        let app = recette.appliance; /*variable to avoid to repeat of currentUstensile.ustensile in the same local loop */
        if (!tabAllApp.includes(app.toLowerCase())) {  /*if one App of one of the recipes is not yet (negative shown by "!") listed in the Ust table, then  it is displayed*/
        /* whatever the way word is written in recipe, we get it all in lowercase; then we use CSS text transform capitalize pour display words starting by uppercase*/
            tabAllApp.push(app.toLowerCase()); /*push: at each loop, we add the App if it is what we are searching for*/
        }
    })
    tabAllApp.sort();
    return tabAllApp;
}

function getAllUst() {
    let tabAllUst = []; /*to create an empty tab that will contain all the Ust*/
    recipes.forEach(recette => { /*to go through all the recipes 1 by 1 with the variable "recette" that is the current recipe, beginning by the recipe  index 0 then index 0 etc...till the end of tab*/
        recette.ustensils.forEach(currentUstensile => {
            let ust = currentUstensile; /*variable to avoid to repeat of currentUstensile.ustensile in the same local loop */
            if (!tabAllUst.includes(ust.toLowerCase())) {  /*if one Ust of one of the recipes is not yet (negative shown by "!") listed in the Ust table, then  it is displayed*/
                /* whatever the way word is written in recipe, we get it all in lowercase; then we use CSS text transform capitalize pour display words starting by uppercase*/
                tabAllUst.push(ust.toLowerCase()); /*push: at each loop, we add the Ust if it is what we are searching for*/
            }
        })
    })
    tabAllUst.sort();
    return tabAllUst;
}

function loadAllIngr() {
    let allIngr = ""
    tabIngredients.forEach(currentIngredient => {
        allIngr += `<p class="suggIngr resultSugg" onclick = "addTag(this,'ingredient')">${currentIngredient}</p>`
    })
    document.getElementById("suggIngr").innerHTML = allIngr;
}

function loadAllApp() {
    let allApp = ""
    tabAppareils.forEach(currentAppareil => {
        allApp += `<p class="suggApp resultSugg" onclick = "addTag(this,'appareil')">${currentAppareil}</p>`
    })
    document.getElementById("suggApp").innerHTML = allApp;
}

function loadAllUst() {
    let allUst = ""
    tabUstensiles.forEach(currentUstensile => {
        allUst += `<p class="suggUst resultSugg" onclick = "addTag(this,'ustensile')">${currentUstensile}</p>`
    })
    document.getElementById("suggUst").innerHTML = allUst;
}

function displayIngrList() { /*to show the all ingredient list*/
    loadAllIngr();
    document.getElementById("suggIngr").style.display = "flex"; /*flex to allow suggIngr to appear in column*/
    document.querySelector("#ingrFilter .fa-chevron-up").style.display = "block"; /*CSS: parent space & as many children created*/
    document.querySelector("#ingrFilter .fa-chevron-down").style.display = "none";
}

function hideIngrList() { /*to hide the all ingredient list*/
    document.getElementById("suggIngr").style.display = "none";
    document.querySelector("#ingrFilter .fa-chevron-up").style.display = "none";
    document.querySelector("#ingrFilter .fa-chevron-down").style.display = "block";
}

function displayUstList() { /*to show the all ustensiles list*/
    loadAllUst();
    document.getElementById("suggUst").style.display = "flex"; /*flex to allow suggUst to appear in column*/
    document.querySelector("#ustFilter .fa-chevron-up").style.display = "block"; /*CSS: parent space & as many children created*/
    document.querySelector("#ustFilter .fa-chevron-down").style.display = "none";
}

function hideUstList() { /*to hide the all ustensiles list*/
    document.getElementById("suggUst").style.display = "none";
    document.querySelector("#ustFilter .fa-chevron-up").style.display = "none";
    document.querySelector("#ustFilter .fa-chevron-down").style.display = "block";
}

function displayAppList() { /*to show the all appareil list*/
    loadAllApp();
    document.getElementById("suggApp").style.display = "flex";/*flex to allow suggApp to appear in column*/
    document.querySelector("#appFilter .fa-chevron-up").style.display = "block"; /*CSS: parent space & as many children created*/
    document.querySelector("#appFilter .fa-chevron-down").style.display = "none";
}

function hideAppList() { /*to hide the all appareil list*/
    document.getElementById("suggApp").style.display = "none";
    document.querySelector("#appFilter .fa-chevron-up").style.display = "none";
    document.querySelector("#appFilter .fa-chevron-down").style.display = "block";
}


// -----------------------------------------------------
// OUVERTURE ET FERMETURE DE LA FLECHE DU DROPDOWN
// -----------------------------------------------------

// let btnDownIngr = document.querySelector("#ingrFilter .fa-chevron-down")
// btnDownIngr.onclick = function() {
//     let suggIngr = document.getElementById("suggIngr");
//     suggIngr.style.display = "block";
// }   REPLACED BY:

document.querySelector("#ingrFilter .fa-chevron-down").onclick = () => { displayIngrList() } /*use query selector when no id, class only*/
document.querySelector("#ingrFilter .fa-chevron-up").onclick = () => { hideIngrList() }

document.querySelector("#appFilter .fa-chevron-down").onclick = () => { displayAppList() }
document.querySelector("#appFilter .fa-chevron-up").onclick = () => { hideAppList() }

document.querySelector("#ustFilter .fa-chevron-down").onclick = () => { displayUstList() }
document.querySelector("#ustFilter .fa-chevron-up").onclick = () => { hideUstList() }


// -----------------------------------------------------
// LISTENER - DROPDOWN SEARCH BAR
// -----------------------------------------------------

searchIngr.addEventListener("keyup", function () { /*To listen input entered in search to actually run the function*/
    displayIngrList();
    const input = searchIngr.value;
    const resultIngr = recipes.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()) || item.description.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
    showRecipes(resultIngr);
    let suggestion = "";

    if (input != "") { /*if input is not empty */

        tabIngredients.forEach(currentIngredient => { /*to check in all the tab*/

            if (currentIngredient.toLocaleLowerCase().includes(input.toLocaleLowerCase())) { /*and for each ingr if it is what is looked for (we consider that a same word written in lower case  and somewhere else in uppercase will be considered both in lowercase so we can compare and keep it only once in list*/

                suggestion += `
        <p class="suggIngr resultSugg" onclick = "addTag(this,'ingredient')">${currentIngredient}</p>` /* test is the function and this is the arument or parameter i.e. the element html represented by <p class="suggIngr" onclick = "addTag(this,'ingrédient')"*/
            }
        })
    }

    document.getElementById("suggIngr").innerHTML = suggestion;
})

searchApp.addEventListener("keyup", function () { /*To listen input entered in search to actually run the function*/
    displayAppList();
    const inputApp = searchApp.value;
    const resultApp = recipes.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())||item.description.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
    showRecipes(resultApp);
    let suggestion = "";
    if (inputApp != "") { /*if input is not empty */
        tabAppareils.forEach(currentAppareil => { /*on parcourt tout le tableau */
            if (currentAppareil.toLocaleLowerCase().includes(inputApp.toLocaleLowerCase())) { /*et on verifie pour chaque appareil si il correspond à la recherche et on part sur le principe qu'un même mot ecrit en min puis ailleurs en maj va etre considéré les 2 fois en min pour comparer et ne le garder qu'une fois*/
                suggestion += `
            <p class="suggApp  resultSugg" onclick = "addTag(this,'appareil')">${currentAppareil}</p>` /* test est la fonction et this est l'argument ou paramètre cad soit l'élement html représenté par <div class="suggApp" onclick = "addTag(this,'appareil')"*/
            }
        })
    }
    document.getElementById("suggApp").innerHTML = suggestion;
})

searchUst.addEventListener("keyup", function () { /*To listen input entered in search to actually run the function*/
    displayUstList();
    const input = searchUst.value;
    const resultUst = recipes.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()) || item.description.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
    showRecipes(resultUst);
    let suggestion = "";
    if (input != "") { /*if input is not empty */
        tabUstensiles.forEach(currentUstensile => { /*on parcourt tout le tableau */
            if (currentUstensile.toLocaleLowerCase().includes(input.toLocaleLowerCase())) { /*et on verifie pour chaque ustensile si il correspond à la recherche et on part sur le principe qu'un même mot ecrit en min puis ailleurs en maj va etre considéré les 2 fois en min pour comparer et ne le garder qu'une fois*/
                suggestion += `
            <p class="suggUst resultSugg" onclick = "addTag(this,'ustensils')">${currentUstensile}</p>` /* test est la fonction et this est l'argument ou paramètre cad soit l'élement html représenté par <div class="suggUst" onclick = "addTag(this,'iustensile')"*/
            }
        })
    }
    document.getElementById("suggUst").innerHTML = suggestion;
})

// a = [1,2,3,4]
// (4) [1, 2, 3, 4]

// a.splice(1,1)
// [2]

// a
// (3) [1, 3, 4]

// a.splice(1,2)
// (2) [3, 4]

// a
// [1]


// tab = [
//     "tomate",
//     "salade",
//     "pomme"
// ]

// element = "pomme"

    // let count = 0
    // tab.forEach(currentElem => {
    //     if (currentElement == element) {
    //         // remove currentElem
    //     }
    //     count = count + 1
    // })

function removeElement(tab, element) {
    for(let i = 0; i < tab.length; i++){
        if (tab[i] == element) {
            tab.splice(i,1)
            break;
        }
    }
}


// -----------------------------------------------------
// ADD TAGS & REMOVE ELEMENT FROM LIST
// -----------------------------------------------------

function addTag(element, type) {
    if (type == 'ingredient') {
        let tagIngr = document.getElementById('tagIngr'); /*on va chercher le tag qui correspond au type ingredient sur lequel on a cliqué dans les suggestions  */
        tagIngr.style.display = 'block'; /* on fait apparaitre le tag pour annuler le display none du CSS*/

        let label = tagIngr.getElementsByTagName('label')[0]; /*on va chercher le label cad l'élément qui contient le nom de l'ingredient sélectionné*/
        label.innerHTML = element.innerHTML; /*ceci permet de faire remonter le texte du label cad le contenu du label prend pour valeur le contenu de l'élément*/
        
        tabIngredients = getAllIngr(); /*at each event we get new tab with all Ingr even the ones previously tagged*/
        removeElement(tabIngredients, label.innerHTML); /*call the function that removes the Ingr tagged*/
        loadAllIngr(); /*load list of all the Ingr that are not tagged*/    
    }

    else if (type == 'appareil') {
        let tagApp = document.getElementById('tagApp'); /*on va chercher le tag qui correspond au type appareil sur lequel on a cliqué dans les suggestions  */
        tagApp.style.display = 'block'; /* on fait apparaitre le tag pour annuler le display none du CSS*/

        let label = tagApp.getElementsByTagName('label')[0]; /*on va chercher le label cad l'élément qui contient le nom de l'ingredient sélectionné*/
        label.innerHTML = element.innerHTML; /*ceci permet de faire remonter le texte du label cad le contenu du label prend pour valeur le contenu de l'élément*/

        tabAppareils = getAllApp(); /*at each event we get new tab with all App even the ones previously tagged*/
        removeElement(tabAppareils, label.innerHTML); /*call the function that removes the App tagged*/
        loadAllApp(); /*load list of all the App that are not tagged*/    
    }
    else if (type == 'ustensils') {
        let tagUst = document.getElementById('tagUst'); /*on va chercher le tag qui correspond au type appareil sur lequel on a cliqué dans les suggestions  */
        tagUst.style.display = 'block'; /* on fait apparaitre le tag pour annuler le display none du CSS*/

        let label = tagUst.getElementsByTagName('label')[0]; /*on va chercher le label cad l'élément qui contient le nom de l'ingredient sélectionné*/
        label.innerHTML = element.innerHTML; /*ceci permet de faire remonter le texte du label cad le contenu du label prend pour valeur le contenu de l'élément*/

        tabUstensiles = getAllUst(); /*at each event we get new tab with all Ust even the ones previously tagged*/
        removeElement(tabUstensiles, label.innerHTML); /*call the function that removes the Ust tagged*/
        loadAllUst(); /*load list of all the Ust that are not tagged*/    
    }
}

// -----------------------------------------------------
// CLOSE TAGS & SHOW ELEMENT BACK IN LIST
// -----------------------------------------------------

function closeTag(tag) {
    tag.parentNode.style.display = 'none';
   
    tabIngredients = getAllIngr(); /*at each event we get new tab with all Ingr even the ones previously tagged*/
    tabAppareils = getAllApp(); /*at each event we get new tab with all App even the ones previously tagged*/
    tabUstensiles = getAllUst(); /*at each event we get new tab with all Ust even the ones previously tagged*/
    
//     addElement(tabIngredients, label.innerHTML); /*call the function that get back the ingr untagged*/
//         loadAllIngr(); /*load list of all the ingr that are not tagged*/  
}
