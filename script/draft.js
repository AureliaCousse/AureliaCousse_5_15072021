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