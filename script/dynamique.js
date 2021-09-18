// -----------------------------------------------------
// CONSTANTS
// -----------------------------------------------------

const searchIngr = document.getElementById("userIngr"); /*tells what is to be listened: the user input i.e. userIngr*/
const searchUst = document.getElementById("userUst"); 
const searchApp = document.getElementById("userApp"); 


// -----------------------------------------------------
// VARIABLES
// -----------------------------------------------------

/*To create tables in which will be stoked the elements INGR, APP & UST */

let tabIngredients = getAllIngr(); /*Tab with all Ingr*/
let tabSelectIngr = []; /*Tab of Ingr selected as tag only*/

let tabAppareils = getAllApp();
let tabSelectApp = [];

let tabUstensiles = getAllUst();
let tabSelectUst = []; 

// -----------------------------------------------------
// FUNCTIONS
// -----------------------------------------------------

function renameElement(suggElement){
    switch (suggElement) {
        case "Bananes":
            return "Banane"
        default:
            return suggElement
    }
}

// .....................................................
// Tables containing element list
// .....................................................

// NB
//function normString(strToNorm){
//     return (strToNorm.toLowerCase()).normalize("NFD").replace(/\p{Diacritic}/gu, "");
// } is REPLACED BY CLASS "Utils" in dedicated file

function getAllIngr() {
    let tabAllIngr = []; /*to create an empty tab that will contain all the App*/
    recipes.forEach(recette => { /*to go through all the recipes 1 by 1 with the variable "recette" that is the current recipe, beginning by the recipe  index 0 then index 0 etc...till the end of tab*/
        recette.ingredients.forEach(currentIngredient => {   /*current ingredient is each box containing ingredient+qty+unit in the main tab of the ingr of a given recipe*/
            /*currentIngredient exists for this loop ONLY: it is a local variable so we can reuse the name for another loop, function etc... it will be a different thing*/
            let ingr = currentIngredient.ingredient; /*variable pour éviter les répétitions de currentingredient.infgredient dans cette même boucle locale*/
            if (!tabAllIngr.find(i=>Utils.normString(i)===Utils.normString(ingr))){  /*if one Ingr of one of the recipes is not yet (negative shown by "!") listed in the Ingr table, then  it is displayed*/
               /* whatever the way word is written in recipe, we get it all in lowercase; then we use CSS text transform capitalize pour display words starting by uppercase*/
                tabAllIngr.push(ingr.toLowerCase()); /*push: at each loop, we add the Ingr if it is what we are searching for*/
            }
        })
    })
    tabAllIngr.sort();
    return tabAllIngr;
}

function getAllApp() {
    let tabAllApp = []; 
    recipes.forEach(recette => { 
        let app = recette.appliance; 
        if (!tabAllApp.find(i=>Utils.normString(i)===Utils.normString(app))){  
            tabAllApp.push(app.toLowerCase()); 
        }
    })
    tabAllApp.sort();
    return tabAllApp;
}

function getAllUst() {
    let tabAllUst = []; 
    recipes.forEach(recette => { 
        recette.ustensils.forEach(currentUstensile => {
            let ust = currentUstensile; 
            if (!tabAllUst.find(i=>Utils.normString(i)===Utils.normString(ust))){  
                tabAllUst.push(ust.toLowerCase()); 
            }
        })
    })
    tabAllUst.sort();
    return tabAllUst;
}

// .....................................................
// 
// .....................................................

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


// .....................................................
// Show or hide all the element lists / list closed when another open
// .....................................................

function displayIngrList() { /*to show the all ingredient list*/
    loadAllIngr();
    document.getElementById("suggIngr").style.display = "flex"; /*flex to allow suggIngr to appear in column*/
    document.querySelector("#ingrFilter .fa-chevron-up").style.display = "block"; /*CSS: block-> parent space & as many children created*/
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
    loadAllApp();
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
    loadAllUst();
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
// Show & hide Placeholder text
// .....................................................

function displayIngrInput2() { /*to show placeholder text input2*/
    document.getElementById("userIngr").placeholder = "Rechercher un ingrédient"; 
}

function hideIngrInput2() { /*to hide placeholder text input2*/
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

// -----------------------------------------------------
// Placeholder change on click
// -----------------------------------------------------

document.querySelector("#ingrFilter .fa-chevron-down").addEventListener("click", displayIngrInput2); 
document.querySelector("#ingrFilter .fa-chevron-up").addEventListener("click", hideIngrInput2);  

document.querySelector("#appFilter .fa-chevron-down").addEventListener("click", displayAppInput2); 
document.querySelector("#appFilter .fa-chevron-up").addEventListener("click", hideAppInput2);

document.querySelector("#ustFilter .fa-chevron-down").addEventListener("click", displayUstInput2); 
document.querySelector("#ustFilter .fa-chevron-up").addEventListener("click", hideUstInput2);

// -----------------------------------------------------
//OPEN  or CLOSE element list when click on dropdown harrow
// -----------------------------------------------------

// let btnDownIngr = document.querySelector("#ingrFilter .fa-chevron-down")
// btnDownIngr.onclick = function() {
//     let suggIngr = document.getElementById("suggIngr");
//     suggIngr.style.display = "block";
// }   
//REPLACED BY:

document.querySelector("#ingrFilter .fa-chevron-down").addEventListener("click", displayIngrList); 
document.querySelector("#ingrFilter .fa-chevron-up").addEventListener("click", hideIngrList);

document.querySelector("#appFilter .fa-chevron-down").addEventListener("click", displayAppList); 
document.querySelector("#appFilter .fa-chevron-up").addEventListener("click", hideAppList);

document.querySelector("#ustFilter .fa-chevron-down").addEventListener("click", displayUstList); 
document.querySelector("#ustFilter .fa-chevron-up").addEventListener("click", hideUstList);


// -----------------------------------------------------
// Element list when user input entered in dropdown search bar
// -----------------------------------------------------

searchIngr.addEventListener("keyup", function () { /*To listen input entered in search to actually run the function*/
    displayIngrList();
    const inputIngr = searchIngr.value;
    let suggestion = "";
    tabIngredients.forEach(currentIngredient => { /*to browse & check in all the tab */
        if (currentIngredient.toLocaleLowerCase().includes(inputIngr.toLocaleLowerCase())) { /*and for each ingr if it is what is looked for (we consider that a same word written in lower case  and somewhere else in uppercase will be considered both in lowercase so we can compare and keep it only once in list*/
            suggestion += `
            <p class="suggIngr resultSugg" onclick = "addTag(this,'ingredient')">${currentIngredient}</p>` /* test is the function and this is the arument or parameter i.e. the element html represented by <p class="suggIngr" onclick = "addTag(this,'ingrédient')"*/
        }
    })
    document.getElementById("suggIngr").innerHTML = suggestion;
})

searchApp.addEventListener("keyup", function () { 
    displayAppList();
    const inputApp = searchApp.value;
    let suggestion = "";
    tabAppareils.forEach(currentAppareil => { 
        if (currentAppareil.toLocaleLowerCase().includes(inputApp.toLocaleLowerCase())) { 
            suggestion += `
            <p class="suggApp resultSugg" onclick = "addTag(this,'appareil')">${currentAppareil}</p>` 
        }
    })
    document.getElementById("suggApp").innerHTML = suggestion;
})

searchUst.addEventListener("keyup", function () { 
    displayUstList();
    const inputUst = searchUst.value;
    let suggestion = "";
    tabUstensiles.forEach(currentUstensile => { 
        if (currentUstensile.toLocaleLowerCase().includes(inputUst.toLocaleLowerCase())) { 
            suggestion += `
            <p class="suggUst resultSugg" onclick = "addTag(this,'ustensile')">${currentUstensile}</p>` 
        }
    })
    document.getElementById("suggUst").innerHTML = suggestion;
})


// searchApp.addEventListener("keyup", function () { /*To listen input entered in search to actually run the function*/
//     displayAppList();
//     const inputApp = searchApp.value;
//      const resultApp = recipes.filter(item => item.appliance.toLocaleLowerCase().includes(inputApp.toLocaleLowerCase()));
//     showRecipes(resultApp);
//     let suggestion = "";

//     if (inputApp != "") { /*if input is not empty */
//         tabAppareils.forEach(currentAppareil => { /*to browse & check in all the tab */
//             if (currentAppareil.toLocaleLowerCase().includes(inputApp.toLocaleLowerCase())) { /*et on verifie pour chaque appareil si il correspond à la recherche et on part sur le principe qu'un même mot ecrit en min puis ailleurs en maj va etre considéré les 2 fois en min pour comparer et ne le garder qu'une fois*/
//                 suggestion += `
//                 <p class="suggApp  resultSugg" onclick = "addTag(this,'appareil')">${currentAppareil}</p>` /* test est la fonction et this est l'argument ou paramètre cad soit l'élement html représenté par <div class="suggApp" onclick = "addTag(this,'appareil')"*/
//             }
//         })
//     }
//     document.getElementById("suggApp").innerHTML = suggestion;
// })

// searchUst.addEventListener("keyup", function () { /*To listen input entered in search to actually run the function*/
//     displayUstList();
//     const inputUst = searchUst.value;
//     const resultUst = recipes.filter(item => item.name.toLocaleLowerCase().includes(inputUst.toLocaleLowerCase()) || item.description.toLocaleLowerCase().includes(inputUst.toLocaleLowerCase()));
//      // const resultUst = recipes.filter(item => item.ustensils.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
//     showRecipes(resultUst);
//     let suggestion = "";

//     if (inputUst != "") { /*if input is not empty */
//         tabUstensiles.forEach(currentUstensile => { /*to browse & check in all the tab */
//             if (currentUstensile.toLocaleLowerCase().includes(inputUst.toLocaleLowerCase())) { /*et on verifie pour chaque ustensile si il correspond à la recherche et on part sur le principe qu'un même mot ecrit en min puis ailleurs en maj va etre considéré les 2 fois en min pour comparer et ne le garder qu'une fois*/            
//                 suggestion += `
//                 <p class="suggUst resultSugg" onclick = "addTag(this,'ustensile')">${currentUstensile}</p>` /* test est la fonction et this est l'argument ou paramètre cad soit l'élement html représenté par <div class="suggUst" onclick = "addTag(this,'iustensile')"*/
//             }
//         })
//     }
//     document.getElementById("suggUst").innerHTML = suggestion;
// })

function removeElementFromTab(tab, searchElement) {
    for(let i = 0; i < tab.length; i++){
        if (tab[i] == searchElement) {
            tab.splice(i,1) // splice(index_debut_suppr, nombre_element_a_suppr)
            break;
        }
    }
}

// -----------------------------------------------------
// CREATION & DISPLAY TAG ZONE
// -----------------------------------------------------
function displayTags(idTagZone, tabSelect){
    let tagZone = document.getElementById(idTagZone);
    tagZone.innerHTML = "" 

    tabSelect.forEach(currentElement => {
        let div = document.createElement("div")
        div.className = "inner-tag"

        let label = document.createElement("label")
        label.innerHTML = currentElement;
        div.appendChild(label);

        let button = document.createElement("button")
        button.className = "tagBtn far fa-times-circle"

        switch (idTagZone) {
            case "tagIngr":
                button.setAttribute('onclick',`closeTag(this,"${currentElement}","ingr")`)
                break;
            case "tagApp":
                button.setAttribute('onclick',`closeTag(this,"${currentElement}","app")`)
                break;
            default:
                button.setAttribute('onclick',`closeTag(this,"${currentElement}","ust")`)
                break;
        }

        div.appendChild(button);
        tagZone.appendChild(div);
    })
}

function moveElementFromTabToTab(fromTab, toTab, elem){
    if (fromTab.includes(elem)) {
        removeElementFromTab(fromTab, elem);  
        toTab.push(elem);
    }
}

// -----------------------------------------------------
// ADD TAGS & REMOVE ELEMENT FROM LIST
// -----------------------------------------------------


// <div class="inner-tag">
    // <label>mot clé</label>
    // <button class="tagBtn far fa-times-circle" type="button" onclick="closeTag(this)"></button>
// </div>

 
function addTag(element, type) {
    if (type == 'ingredient') {
        // tabIngredients = getAllIngr(); /*at each event we get new tab with all Ingr even the ones previously tagged*/
        removeElementFromTab(tabIngredients, element.innerHTML); 
        tabSelectIngr.push(element.innerHTML);
        displayTags("tagIngr", tabSelectIngr);
        loadAllIngr(); /*load list of all the Ingr that are not tagged*/
        const filteredRecipes =[];
        recipes.forEach(rTagged => {
            const ingredientsNames = rTagged.ingredients.map(rMap => rMap.ingredient.toLocaleLowerCase())
            let nbTag = 0;
            tabSelectIngr.forEach(ingrTag => {
                if (ingredientsNames.includes(ingrTag)){
                    nbTag++
                }
            })
            if (nbTag===tabSelectIngr.length){
                filteredRecipes.push(rTagged);
            }
        })
        showRecipes(filteredRecipes);

    }

    else if (type == 'appareil') {
        removeElementFromTab(tabAppareils, element.innerHTML); 
        tabSelectApp.push(element.innerHTML);
        displayTags("tagApp", tabSelectApp);
        loadAllApp();
        const filteredRecipes =[];
        recipes.forEach(rTagged => {
            const appareilsNames = rTagged.appareil.map(rMap => rMap.appareil.toLocaleLowerCase())
            let nbTag = 0;
            tabSelectApp.forEach(appTag => {
                if (appareilsNames.includes(appTag)){
                    nbTag++
                }
            })
            if (nbTag===tabSelectApp.length){
                filteredRecipes.push(rTagged);
            }
        })
        showRecipes(filteredRecipes);
    }

    else if (type == 'ustensile') {
        removeElementFromTab(tabUstensiles, element.innerHTML); 
        tabSelectUst.push(element.innerHTML);
        displayTags("tagUst", tabSelectUst);
        loadAllUst(); 
        const filteredRecipes =[];
        recipes.forEach(rTagged => {
            const ustensilesNames = rTagged.ustensile.map(rMap => rMap.ustensile.toLocaleLowerCase())
            let nbTag = 0;
            tabSelectUst.forEach(ustTag => {
                if (ustensilesNames.includes(ustTag)){
                    nbTag++
                }
            })
            if (nbTag===tabSelectUstr.length){
                filteredRecipes.push(rTagged);
            }
        })
        showRecipes(filteredRecipes);

    }
}

// -----------------------------------------------------
// CLOSE TAGS & SHOW ELEMENT BACK IN SUGGESTION LIST
// -----------------------------------------------------

function closeTag(btn_close, element, type) {
    btn_close.parentNode.style.display = 'none';

    if(type == "ingr") {
        moveElementFromTabToTab(tabSelectIngr, tabIngredients,element);
        tabIngredients.sort()
        loadAllIngr(); 
    } else if(type == "app") {
        moveElementFromTabToTab(tabSelectApp, tabAppareils,element);
        tabAppareils.sort();
        loadAllApp();
    } else {
        moveElementFromTabToTab(tabSelectUst, tabUstensiles,element);
        tabUstensiles.sort()
        loadAllUst();
    }
}

