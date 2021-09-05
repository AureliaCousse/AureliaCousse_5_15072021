class Utils{
    static normString(strToNorm){
        return (strToNorm.toLowerCase()).normalize("NFD").replace(/\p{Diacritic}/gu, "");
    }
}
