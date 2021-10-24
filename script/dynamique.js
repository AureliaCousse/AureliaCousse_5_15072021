/*jshint esversion: 6 */
//When relying upon ECMAScript 6 features such as const, set this option so JSHint doesn't raise unnecessary warnings.

// -----------------------------------------------------
// CONSTANTS: tells what is to be listened: the user input i.e. userIngr
//a common convention is to use all-uppercase letters
// -----------------------------------------------------

const SEARCH_INGR = document.getElementById("userIngr");
const SEARCH_UST = document.getElementById("userUst");
const SEARCH_APP = document.getElementById("userApp");
const SEARCH_INPUT = document.getElementById("searchInput");

// -----------------------------------------------------
// VARIABLES: To create tables in which will be stoked the elements INGR, APP & UST
// -----------------------------------------------------

let tabIngredients = getAllIngr(); /*Tab with all Ingr*/
let tabSelectIngr = []; /*Tab of Ingr selected as tag only*/

let tabAppareils = getAllApp();
let tabSelectApp = [];

let tabUstensiles = getAllUst();
let tabSelectUst = [];

// -----------------------------------------------------
// FUNCTIONS
// -----------------------------------------------------

// .....................................................
// Tables containing element list
// .....................................................

function getAllIngr() {
    let tabAllIngr = []; /*to create an empty tab that will contain all the Ingr*/
    recipes.forEach(recette => { /*to go through all the recipes 1 by 1 with the variable "recette" that is the current recipe, beginning by the recipe  index 0 then index 0 etc...till the end of tab*/
        recette.ingredients.forEach(currentIngredient => {   /*current ingredient is each box containing ingredient+qty+unit in the main tab of the ingr of a given recipe*/
            let ingr = currentIngredient.ingredient; /*variable pour éviter les répétitions de currentingredient.ingredient dans cette même boucle*/
            if (!tabAllIngr.find(i => Utils.normString(i) === Utils.normString(ingr))) {  /*if one Ingr of one of the recipes is not yet (negative shown by "!") listed in the Ingr table, then  it is displayed*/
                /* whatever the way word is written in recipe, we get it all in lowercase; then we use CSS text transform capitalize pour display words starting by uppercase*/
                tabAllIngr.push(Utils.normString(ingr)); /*push: at each loop, we add the Ingr if it is what we are searching for*/
            }
        });
    });
    tabAllIngr.sort(Intl.Collator().compare);
    return tabAllIngr;
}

function getAllApp() {
    let tabAllApp = [];
    recipes.forEach(recette => {
        let app = recette.appliance;
        if (!tabAllApp.find(i => Utils.normString(i) === Utils.normString(app))) {
            tabAllApp.push(Utils.normString(app));
        }
    });
    tabAllApp.sort(Intl.Collator().compare);
    return tabAllApp;
}

function getAllUst() {
    let tabAllUst = [];
    recipes.forEach(recette => {
        recette.ustensils.forEach(currentUstensile => {
            let ust = currentUstensile;
            if (!tabAllUst.find(i => Utils.normString(i) === Utils.normString(ust))) {
                tabAllUst.push(Utils.normString(ust));
            }
        });
    });
    tabAllUst.sort(Intl.Collator().compare);
    return tabAllUst;
}

// .....................................................
// LOAD LISTS OF INGR - APP & UST + reduced list when recipes filtered
// .....................................................

function loadFilteredIngr() {

    let allIngr = "";
    let tabIngrDisplayedR = [];
    let tabDisplayedR = selectAllFilteredRecipes(); /*displayedR takes as value the return value of the function selectfilteredRecipes*/
    const INPUT_INGR = SEARCH_INGR.value;

    tabDisplayedR.forEach(currentRecipe => {
        currentRecipe.ingredients.forEach(currentIngredient => {
            if (!tabIngrDisplayedR.includes(Utils.normString(currentIngredient.ingredient))) {
                tabIngrDisplayedR.push(Utils.normString(currentIngredient.ingredient));
            }
            tabIngrDisplayedR.sort(Intl.Collator().compare);
        });
    });

    removeTabElSelectFromTabElDisplayedR(tabSelectIngr, tabIngrDisplayedR);

    tabIngrDisplayedR.forEach(currentIngredient => {
        if (Utils.normString(currentIngredient).includes(Utils.normString(INPUT_INGR))) {
            allIngr += `<p class="suggIngr resultSugg" onclick = "addTag(this,'ingredient')">${currentIngredient}</p>`;
        }             //on click: so later we can click and create tag
    });
    document.getElementById("suggIngr").innerHTML = allIngr;
}

function loadFilteredApp() {

    let allApp = "";
    let tabAppDisplayedR = [];
    let tabDisplayedR = selectAllFilteredRecipes();
    const INPUT_APP = SEARCH_APP.value;

    tabDisplayedR.forEach(currentRecipe => {
        [currentRecipe.appliance].forEach(currentAppareil => {
            if (!tabAppDisplayedR.includes(Utils.normString(currentAppareil))) {
                tabAppDisplayedR.push(Utils.normString(currentAppareil));
            }
            tabAppDisplayedR.sort(Intl.Collator().compare);
        });
    });

    removeTabElSelectFromTabElDisplayedR(tabSelectApp, tabAppDisplayedR);

    tabAppDisplayedR.forEach(currentAppareil => {
        if (Utils.normString(currentAppareil).includes(Utils.normString(INPUT_APP))) {
            allApp += `<p class="suggApp resultSugg" onclick = "addTag(this,'appareil')">${currentAppareil}</p>`;
        }
    });
    document.getElementById("suggApp").innerHTML = allApp;
}

function loadFilteredUst() {

    let allUst = "";
    let tabUstDisplayedR = [];
    let tabDisplayedR = selectAllFilteredRecipes();
    const INPUT_UST = SEARCH_UST.value;

    tabDisplayedR.forEach(currentRecipe => {
        currentRecipe.ustensils.forEach(currentUstensile => {
            if (!tabUstDisplayedR.includes(Utils.normString(currentUstensile))) {
                tabUstDisplayedR.push(Utils.normString(currentUstensile));
            }
            tabUstDisplayedR.sort(Intl.Collator().compare);
        });
    });

    removeTabElSelectFromTabElDisplayedR(tabSelectUst, tabUstDisplayedR);

    tabUstDisplayedR.forEach(currentUstensile => {
        if (Utils.normString(currentUstensile).includes(Utils.normString(INPUT_UST))) {
            allUst += `<p class="suggUst resultSugg" onclick = "addTag(this,'ustensile')">${currentUstensile}</p>`;
        }
    });
    document.getElementById("suggUst").innerHTML = allUst;
}

// .....................................................
// Show or hide all the element lists / list closed when another open
// .....................................................

function displayIngrList() { /*to show the all ingredient list*/
    loadFilteredIngr();
    document.getElementById("suggIngr").style.display = "flex"; /*flex to allow suggIngr to appear in column*/
    document.querySelector("#ingrFilter .fa-chevron-up").style.display = "block";
    document.querySelector("#ingrFilter .fa-chevron-down").style.display = "none";

    document.getElementById("suggApp").style.display = "none";
    document.querySelector("#appFilter .fa-chevron-down").style.display = "block";
    document.querySelector("#appFilter .fa-chevron-up").style.display = "none";

    document.getElementById("suggUst").style.display = "none";
    document.querySelector("#ustFilter .fa-chevron-down").style.display = "block";
    document.querySelector("#ustFilter .fa-chevron-up").style.display = "none";
}

function hideIngrList() { /*to hide the all ingredient list*/
    document.getElementById("suggIngr").style.display = "none";
    document.querySelector("#ingrFilter .fa-chevron-up").style.display = "none";
    document.querySelector("#ingrFilter .fa-chevron-down").style.display = "block";
}

function displayAppList() {
    loadFilteredApp();
    document.getElementById("suggApp").style.display = "flex";
    document.querySelector("#appFilter .fa-chevron-up").style.display = "block";
    document.querySelector("#appFilter .fa-chevron-down").style.display = "none";


    document.getElementById("suggIngr").style.display = "none";
    document.querySelector("#ingrFilter .fa-chevron-down").style.display = "block";
    document.querySelector("#ingrFilter .fa-chevron-up").style.display = "none";

    document.getElementById("suggUst").style.display = "none";
    document.querySelector("#ustFilter .fa-chevron-down").style.display = "block";
    document.querySelector("#ustFilter .fa-chevron-up").style.display = "none";
}

function hideAppList() {
    document.getElementById("suggApp").style.display = "none";
    document.querySelector("#appFilter .fa-chevron-up").style.display = "none";
    document.querySelector("#appFilter .fa-chevron-down").style.display = "block";
}

function displayUstList() {
    loadFilteredUst();
    document.getElementById("suggUst").style.display = "flex";
    document.querySelector("#ustFilter .fa-chevron-up").style.display = "block";
    document.querySelector("#ustFilter .fa-chevron-down").style.display = "none";

    document.getElementById("suggIngr").style.display = "none";
    document.querySelector("#ingrFilter .fa-chevron-down").style.display = "block";
    document.querySelector("#ingrFilter .fa-chevron-up").style.display = "none";

    document.getElementById("suggApp").style.display = "none";
    document.querySelector("#appFilter .fa-chevron-down").style.display = "block";
    document.querySelector("#appFilter .fa-chevron-up").style.display = "none";
}

function hideUstList() {
    document.getElementById("suggUst").style.display = "none";
    document.querySelector("#ustFilter .fa-chevron-up").style.display = "none";
    document.querySelector("#ustFilter .fa-chevron-down").style.display = "block";
}

// .....................................................
// Show / Hide Placeholder text
// .....................................................

function displayIngrInput2() {
    document.getElementById("userIngr").placeholder = "Rechercher un ingrédient";
}

function hideIngrInput2() {
    document.getElementById("userIngr").placeholder = "Ingrédients";
}

function displayAppInput2() {
    document.getElementById("userApp").placeholder = "Rechercher un appareil";
}

function hideAppInput2() {
    document.getElementById("userApp").placeholder = "Appareils";
}

function displayUstInput2() {
    document.getElementById("userUst").placeholder = "Rechercher un ustensile";
}

function hideUstInput2() {
    document.getElementById("userUst").placeholder = "Ustensiles";
}

// .....................................................
// Placeholder change on click
// .....................................................

document.querySelector("#ingrFilter .fa-chevron-down").addEventListener("click", displayIngrInput2);
document.querySelector("#ingrFilter .fa-chevron-up").addEventListener("click", hideIngrInput2);

document.querySelector("#appFilter .fa-chevron-down").addEventListener("click", displayAppInput2);
document.querySelector("#appFilter .fa-chevron-up").addEventListener("click", hideAppInput2);

document.querySelector("#ustFilter .fa-chevron-down").addEventListener("click", displayUstInput2);
document.querySelector("#ustFilter .fa-chevron-up").addEventListener("click", hideUstInput2);

// .....................................................
//OPEN  or CLOSE element list when click on dropdown harrow
// .....................................................

document.querySelector("#ingrFilter .fa-chevron-down").addEventListener("click", displayIngrList);
document.querySelector("#ingrFilter .fa-chevron-up").addEventListener("click", hideIngrList);

document.querySelector("#appFilter .fa-chevron-down").addEventListener("click", displayAppList);
document.querySelector("#appFilter .fa-chevron-up").addEventListener("click", hideAppList);

document.querySelector("#ustFilter .fa-chevron-down").addEventListener("click", displayUstList);
document.querySelector("#ustFilter .fa-chevron-up").addEventListener("click", hideUstList);

// .....................................................
// Element list when user input entered in DROPDOWN search bar
// .....................................................

SEARCH_INGR.addEventListener("keyup", function () { /*To listen input entered in search to actually run the function*/
    displayIngrList();
    loadFilteredIngr();
});

SEARCH_APP.addEventListener("keyup", function () {
    displayAppList();
    loadFilteredApp();
});

SEARCH_UST.addEventListener("keyup", function () {
    displayUstList();
    loadFilteredUst();
});

function removeElementFromTab(tab, searchElement) {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] == searchElement) {
            tab.splice(i, 1); // splice(index_debut_suppr, nombre_element_a_suppr)
            break;
        }
    }
}

function removeTabElSelectFromTabElDisplayedR(tab1, tab2) {
    for (let i = 0; i < tab1.length; i++) {
        for (let k = 0; k < tab2.length; k++) {
            if (tab1[i] == tab2[k]) {
                tab2.splice(k, 1);
                break;
            }
        }
    }
}

// .....................................................
// CREATION & DISPLAY TAG ZONE
// .....................................................

function displayTags(idTagZone, tabSelect) {
    let tagZone = document.getElementById(idTagZone);
    tagZone.innerHTML = "";

    tabSelect.forEach(currentElement => {
        let div = document.createElement("div");
        div.className = "inner-tag";

        let label = document.createElement("label");
        label.innerHTML = currentElement;
        div.appendChild(label);

        let button = document.createElement("button");
        button.className = "tagBtn far fa-times-circle";

        switch (idTagZone) {
            case "tagIngr":
                button.setAttribute('onclick', `closeTag(this,"${currentElement}","ingr")`);
                break;
            case "tagApp":
                button.setAttribute('onclick', `closeTag(this,"${currentElement}","app")`);
                break;
            default: /*i.e. "tagUst"*/
                button.setAttribute('onclick', `closeTag(this,"${currentElement}","ust")`);
                break;
        }

        div.appendChild(button);
        tagZone.appendChild(div);
    });
}

function moveElementFromTabToTab(fromTab, toTab, elem) {
    if (fromTab.includes(elem)) {
        removeElementFromTab(fromTab, elem);
        toTab.push(elem);
    }
}

// .....................................................
// Check each recipe & see if it contains Search Bar input or Tag INGR, APP or UST
// .....................................................

function selectAllFilteredRecipes() { /*Nota bene: Parameters (ingrFilter, appFilter, ustFilter) deleted since not red */

    const INPUT = SEARCH_INPUT.value;
    let result = [];

      if (INPUT.length > 2) {

        /* Search to find input in title, description or ingredient list of the recipe*/

        // ALGO 1 *********************************
        result = recipes.filter(item =>
            Utils.normString(item.name).includes(Utils.normString(INPUT)) ||
            item.ingredients.map(rMap => Utils.normString(rMap.ingredient)).join(',').includes(Utils.normString(INPUT))|| /*.join to create a string containing all elements ingredients all together so element TRUE when element="pate"+"brisee" for ex */
            Utils.normString(item.description).includes(Utils.normString(INPUT)));
        // ALGO 1 *********************************


        // ALGO 2 *********************************
        // for (let i = 0; i < recipes.length; i++){
        //     let item=recipes[i];
        //     if ( Utils.normString(item.name).includes(Utils.normString(INPUT))||
        //         Utils.normString(item.description).includes(Utils.normString(INPUT))){
        //             result.push(recipes[i]);
        //             continue;
        //     }
        //     for (let j=0; j < item.ingredients.length; j++){
        //         if (Utils.normString(item.ingredients[j].ingredient).includes(Utils.normString(INPUT))){
        //             result.push(recipes[i]);
        //             break;                        
        //         }
        //     }
        // }
        // ALGO 2 *********************************
    }
    else {
        result=[...recipes]; /*to get all the recipes displayed when less than 3 digits */
    }

    let filteredRecipes = [];

    result.forEach(currentRecipe => {
        const ingrNames = currentRecipe.ingredients.map(rMap => Utils.normString(rMap.ingredient));
        const appNames = Utils.normString(currentRecipe.appliance);
        const ustNames = currentRecipe.ustensils.map(rMap => Utils.normString(rMap));

        let nbTagIngr = 0;
        let nbTagApp = 0;
        let nbTagUst = 0;

        tabSelectIngr.forEach(ingrTag => {
            if (ingrNames.includes(ingrTag)) {
                nbTagIngr++;
            }
        });

        tabSelectApp.forEach(appTag => {
            if (appNames.includes(appTag)) {
                nbTagApp++;
            }
        });

        tabSelectUst.forEach(ustTag => {
            if (ustNames.includes(ustTag)) {
                nbTagUst++;
            }
        });

        if (nbTagApp === tabSelectApp.length &&
            nbTagIngr === tabSelectIngr.length &&
            nbTagUst === tabSelectUst.length) {
            filteredRecipes.push(currentRecipe);
        }
    });
    return filteredRecipes;
}

SEARCH_INPUT.addEventListener("keyup", function () {
    let allSelect = selectAllFilteredRecipes(tabSelectIngr, tabSelectApp, tabSelectUst);
    showRecipes(allSelect);
});

// .....................................................
// ADD TAGS & REMOVE ELEMENT FROM LIST
// .....................................................

function addTag(element, type) {
    if (type == 'ingredient') {
        removeElementFromTab(tabIngredients, element.innerHTML);
        tabSelectIngr.push(element.innerHTML);
        displayTags("tagIngr", tabSelectIngr);
        loadFilteredIngr(); /*load list of all the Ingr that are not tagged*/
    }
    else if (type == 'appareil') {
        removeElementFromTab(tabAppareils, element.innerHTML);
        tabSelectApp.push(element.innerHTML);
        displayTags("tagApp", tabSelectApp);
        loadFilteredApp();
    }
    else if (type == 'ustensile') {
        removeElementFromTab(tabUstensiles, element.innerHTML);
        tabSelectUst.push(element.innerHTML);
        displayTags("tagUst", tabSelectUst);
        loadFilteredUst();
    }
    showRecipes(selectAllFilteredRecipes(tabSelectIngr, tabSelectApp, tabSelectUst));
}

// .....................................................
// CLOSE TAGS & SHOW ELEMENT BACK IN SUGGESTION LIST
// .....................................................

function closeTag(btn_close, element, type) {
    btn_close.parentNode.style.display = 'none';

    if (type == "ingr") {
        moveElementFromTabToTab(tabSelectIngr, tabIngredients, element);
        tabIngredients.sort(Intl.Collator().compare);
        loadFilteredIngr();
    } else if (type == "app") {
        moveElementFromTabToTab(tabSelectApp, tabAppareils, element);
        tabAppareils.sort(Intl.Collator().compare);
        loadFilteredApp();
    } else {
        moveElementFromTabToTab(tabSelectUst, tabUstensiles, element);
        tabUstensiles.sort(Intl.Collator().compare);
        loadFilteredUst();
    }
    showRecipes(selectAllFilteredRecipes(tabSelectIngr, tabSelectApp, tabSelectUst));
}