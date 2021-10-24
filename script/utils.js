/*jshint esversion: 6 */
//When relying upon ECMAScript 6 features such as const, set this option so JSHint doesn't raise unnecessary warnings.

// function normString(strToNorm){
//     return (strToNorm.toLowerCase()).normalize("NFD").replace(/\p{Diacritic}/gu, "");
// } : REPLACED BY CLASS UTILS:   Utils.normString(elem)
class Utils{

    static normString(strToNorm){
        return (strToNorm.toLowerCase()).normalize("NFD").replace(/\p{Diacritic}/gu, "");
    }
}