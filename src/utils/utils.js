export function toCapitalize(str){
    if (str.lenght === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}