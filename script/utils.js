/*jshint esversion: 6 */

// function normString(strToNorm){
//     return (strToNorm.toLowerCase()).normalize("NFD").replace(/\p{Diacritic}/gu, "");
// } : REPLACED BY CLASS UTILS:
class Utils{

    static normString(strToNorm){
        return (strToNorm.toLowerCase()).normalize("NFD").replace(/\p{Diacritic}/gu, "");
    }


    static arrayContainString(array, value){
        console.log(array)
        console.log(value)
        let result=false;
        for (let i=0 ; i<value.length; i++){
            if (array[i].toLowerCase().includes(value.toLowerCase())){
                result=true;
            }
        }
        return result;
    }
    
    
    // renameElement(suggElement){
    //         switch (suggElement) {
    //             case "Bananes":
    //                 return "Banane"
    //             default:
    //                 return suggElement
    //         }
    //     }
}

