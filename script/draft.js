/* version 1  lente: on ne crée pas de tab; on va directement dans les recettes et on vérifie les ingrédients un par un recette par recette pour afficher les ing correspondant à la recherche
/* version 2 + rapide:  on crée la tab contenant tous les ingrédients pour ne les charger qu'une seule fois dans le tableau puis la fonction servira à n'afficher que ceux correspondant à la recherche*/



// accentsTidy = function(s){
//     var r=s.toLowerCase();
//     r = r.replace(new RegExp(/\s/g),"");
//     r = r.replace(new RegExp(/[àáâãäå]/g),"a");
//     r = r.replace(new RegExp(/æ/g),"ae");
//     r = r.replace(new RegExp(/ç/g),"c");
//     r = r.replace(new RegExp(/[èéêë]/g),"e");
//     r = r.replace(new RegExp(/[ìíîï]/g),"i");
//     r = r.replace(new RegExp(/ñ/g),"n");                
//     r = r.replace(new RegExp(/[òóôõö]/g),"o");
//     r = r.replace(new RegExp(/œ/g),"oe");
//     r = r.replace(new RegExp(/[ùúûü]/g),"u");
//     r = r.replace(new RegExp(/[ýÿ]/g),"y");
//     r = r.replace(new RegExp(/\W/g),"");
//     return r;
// };
// console.log(accentsTidy);

// str.normalize("NFD").replace(/\p{Diacritic}/gu, "")

// document.querySelector("#ingrFilter .fa-chevron-up").onclick = () => { hideIngrInput2() } 
/*DO NOT USE .onclick c'est librairie JQUERY - ne plus utiliser*/



// let btnDownIngr = document.querySelector("#ingrFilter .fa-chevron-down")
// btnDownIngr.onclick = function() {
//     let suggIngr = document.getElementById("suggIngr");
//     suggIngr.style.display = "block";
// }   
//REPLACED BY:
// document.querySelector("#ingrFilter .fa-chevron-down").addEventListener("click", displayIngrList); /*use querySelector when no id but class only*/
// document.querySelector("#ingrFilter .fa-chevron-up").addEventListener("click", hideIngrList);


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
    // tab.forEach(currentElem  {
    //     if (currentElement == element) {
    //         // remove currentElem
    //     }
    //     count = count + 1
    // })

// function normString(strToNorm){
//     return (strToNorm.toLowerCase()).normalize("NFD").replace(/\p{Diacritic}/gu, "");
// } : REPLACED BY CLASS UTILS

// document.querySelector("#ingrFilter .fa-chevron-down").addEventListener("click", displayIngrInput2); /*Attention: ici pas de () à la fin*/


// tabIngredients = getAllIngr(); /*at each event we get new tab with all Ingr even the ones previously tagged*/
    // tabAppareils = getAllApp(); /*at each event we get new tab with all App even the ones previously tagged*/
    // tabUstensiles = getAllUst(); /*at each event we get new tab with all Ust even the ones previously tagged*/

