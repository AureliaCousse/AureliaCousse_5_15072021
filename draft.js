/* version 1  lente: on ne crée pas de tab; on va directement dans les recettes et on vérifie les ingrédients un par un recette par recette pour afficher les ing correspondant à la recherche
/* version 2 + rapide:  on crée la tab contenant tous les ingrédients pour ne les charger qu'une seule fois dans le tableau puis la fonction servira à n'afficher que ceux correspondant à la recherche


/*INGREDIENT TAB*/

/*on crée le tableau vide où seront stockés ensuite tous les ingrédients*/
let tabIngredients = getAllIngr();

/*on écoute ce qui est dans le tableau*/

const searchIngr = document.getElementById("userIngr"); /*on dit ce que l'on va écouter i.e. l'input du user, soit userIngr*/

searchIngr.addEventListener("keyup", function(){

    const input = searchIngr.value;

    let suggestion = "";

    if (input !=""){ /*if input is not empty */
    
       tabIngredients.forEach(currentIngredient=>{ /*on parcourt tout le tableau */

        if (currentIngredient.toLocaleLowerCase().includes(input.toLocaleLowerCase())){ /*et on verifie pour chaque ingredient si il correspond à la recherche et on part sur le principe qu'un même mot ecrit en min puis illeurs en maj va etre considéré les 2 fois en min pour comparer et ne le garder qu'une fois*/

        suggestion += `
        <div class="suggIngr" onclick = "addTag(this,'ingredient')">${currentIngredient}</div>` /* test est la fonction et this est l'argument ou paramètre cad soit l'élement html représenté par <div class="suggIngr" onclick = "addTag(this,'ingrédient')"*/
            
        }  
    }) 
    }
    
    document.getElementById("suggIngr").innerHTML = suggestion;
})

function getAllIngr(){

    let tabAllIngr = []; /*on crée un tableau vide contenant tous les ingredients*/

    recipes.forEach(recette=>{ /*=on parcourt les recettes 1 à 1 avec la variable "recette" qui représente la recette courante en commencant par la recette indice 0 puis indice 1 etc... jusque fin du tableau*/

        recette.ingredients.forEach(currentIngredient=>{   /*current ingredient représente chaque pavé ingredient+qty+unit dans le tableau général des ingrédients d'une recette donnéee*/
        /*currentIngredient n'existe que pour cette boucle: c'est une variable locale donc on peut réutliser le terme dans une autre boucle, fonction etc...*/

        let ingr = currentIngredient.ingredient; /*variable pour éviter les répétitions de currentingredient.infgredient dans cette même boucle locale*/

            if (!tabAllIngr.includes(ingr.toLowerCase())){  /*si un ingrédient d'une des recettes n'est pas déjà (négation traduite par !) listé dans le tableau des ingrédients, on l'affiche*/
                /* quelque soit la facon dont est écrit le mot dans la recette, on le fait remonter en tout en miniscules; on utilise CSS text transorm capitalize pour afficher mots avec 1ère lettre en majuscule*/
            
                tabAllIngr.push(ingr.toLowerCase()); /*push: à chaque boucle, on ajoute l' ingrédient si correspondant à la recherche*/ 
            } 
        })   
    }) 

    return tabAllIngr;
}

function addTag(element,type){
    if(type=='ingredient'){
        let tagIngr = document.getElementById('tagIngr'); /*on va chercher le tag qui correspond au type ingredient sur lequel on a cliqué dans les suggestions  */
        tagIngr.style.display = 'block'; /* on fait apparaitre le tag pour annuler le display none du CSS*/

        let label = tagIngr.getElementsByTagName('label')[0]; /*on va chercher le label cad l'élément qui contient le nom de l'ingredient sélectionné*/
        label.innerHTML = element.innerHTML; /*ceci permet de faire remonter le texte du label cad le contenu du label prend pour valeur le contenu de l'élément*/
    }
    else if(type=='ingredient'){
    }   
} 

/*Close Tag*/

const tagBtn = document.querySelectorAll(".tagBtn");

tagBtn.forEach((Btn) => Btn.addEventListener("click", closeTag));

function closeTag(){
    tagIngr.style.display = 'none'; 
}



