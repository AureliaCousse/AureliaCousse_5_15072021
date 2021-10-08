// ALGO 2 on main Search Bar only

function selectAllFilteredRecipes(){ /*Nota bene: Parameters (ingrFilter, appFilter, ustFilter) deleted since not red */

    const input = searchinput.value;
    let result = recipes.slice(); /*slice is to get a part of a array ie slice(2) we will get all objects of array from element index 2 till the end*/
    
    if (input.length>2 || input.length===0){ /*===0 so in case input is deleted, no more filter and so all 50 recipes are displayed*/

        /* Search to find input in title, description or ingredient list of the recipe*/
        result = recipes.filter(item => 
            item.name.toLowerCase().includes(input.toLowerCase())
            ||item.ingredients.map(rMap=> rMap.ingredient.toLowerCase()).includes(input.toLowerCase())
            ||item.description.toLowerCase().includes(input.toLowerCase()));
    }
    
    let filteredRecipes = [];
    
    result.forEach(currentRecipe => { 
        const ingrNames = currentRecipe.ingredients.map(rMap => rMap.ingredient.toLowerCase());    
        const appNames = currentRecipe.appliance.toLowerCase();
        const ustNames = currentRecipe.ustensils.map(rMap => rMap.toLowerCase());

        let nbTagIngr = 0;
        let nbTagApp = 0;
        let nbTagUst = 0;
        
            tabSelectIngr.forEach(ingrTag => {
                if (ingrNames.includes(ingrTag)){
                    nbTagIngr++;
                }
            });

            tabSelectApp.forEach(appTag => {
                if (appNames.includes(appTag)){
                    nbTagApp++;
                }
            });

            tabSelectUst.forEach(ustTag => {
                if (ustNames.includes(ustTag)){
                    nbTagUst++;
                }                
            });

            if (nbTagApp===tabSelectApp.length 
                &&  nbTagIngr===tabSelectIngr.length
                && nbTagUst===tabSelectUst.length)
            {
                filteredRecipes.push(currentRecipe);
            }   
        });
        return filteredRecipes;    
    }
 
searchinput.addEventListener("keyup", function(){
    let allSelect = selectAllFilteredRecipes(tabSelectIngr, tabSelectApp, tabSelectUst);
        showRecipes(allSelect); 
        removeTabElSelectFromTabElDisplayedR(tabSelectIngr, tabIngrDisplayedR);     
});