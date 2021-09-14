// function normString(strToNorm){
//     return (strToNorm.toLowerCase()).normalize("NFD").replace(/\p{Diacritic}/gu, "");
// } : REPLACED BY CLASS UTILS:
class Utils{
    static normString(strToNorm){
        return (strToNorm.toLowerCase()).normalize("NFD").replace(/\p{Diacritic}/gu, "");
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

