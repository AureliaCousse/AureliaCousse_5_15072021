/* version 1  lente: on ne crée pas de tab; on va directement dans les recettes et on vérifie les ingrédients un par un recette par recette pour afficher les ing correspondant à la recherche
/* version 2 + rapide:  on crée la tab contenant tous les ingrédients pour ne les charger qu'une seule fois dans le tableau puis la fonction servira à n'afficher que ceux correspondant à la recherche



/*INGREDIENT TAB*/

/*on crée le tableau vide où seront stockés ensuite tous les ingrédients*/
let tabIngredients = [];

/* Boucle qui permet de remplir le tableau avec tous les ingrédients en évitant les doublons*/
recipes.forEach(recette=>{ /*=on parcourt les recettes 1 à 1 avec la variable "recette" qui représente la recette courante en commencant par la recette indice 0 puis indice 1 etc... jusque fin du tableau*/

    recette.ingredients.forEach(currentIngredient=>{   /*current ingredient représente chaque pavé ingredient+qty+unit dans le tableau général des ingrédients d'une recette donnéee*/
      /*currentIngredient n'existe que pour cette boucle: c'est une variable locale donc on peut réutliser le terme dans une autre boucle, fonction etc...*/

      let ingr = currentIngredient.ingredient; /*variable pour éviter les répétitions de currentingredient.infgredient dans cette même boucle locale*/

        if (!tabIngredients.includes(ingr.charAt(0).toUpperCase() + ingr.slice(1))){  /*si un ingrédient d'une des recettes n'est pas déjà (négation traduite par !) listé dans le tableau des ingrédients, on l'affiche*/
            /* quelque soit la facon dont est écrit le mot dans la recette, on verifie si ce mot écrit avec 1ere lettre maj puis autres en min existe deja dans notre tab ingrédients*/
           
            tabIngredients.push(ingr.charAt(0).toUpperCase() + ingr.slice(1)); /*push: à chaque boucle, on ajoute l' ingrédient si correspondant à la recherche*/ 
        } 
    }) 

})

/*on écoute ce qui est dans le tableau*/

const searchIngr = document.getElementById("userIngr"); /*on dit ce que l'on va écouter i.e. l'input du user, soit userIngr*/

searchIngr.addEventListener("keyup", function(){

    const input = searchIngr.value;

    let suggestion = "";

    if (input !=""){ /*if input is not empty */
    
       tabIngredients.forEach(currentIngredient=>{ /*on parcourt tout le tableau */

        if (currentIngredient.toLocaleLowerCase().includes(input.toLocaleLowerCase())){ /*et on verifie pour chaque ingredient si il correspond à la recherche et on part sur le principe qu'un même mot ecrit en min puis illeurs en maj va etre considéré les 2 fois en min pour comparer et ne le garder qu'une fois*/

        suggestion += `
        <div class="suggestionsIngr">${currentIngredient}</div>`
            
        }  
    }) 
    }
    console.log(suggestion);
    document.getElementById("suggestionsIngr").innerHTML = suggestion;
})




