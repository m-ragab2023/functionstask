// function  reversed string 
function reservdString(txt){
        if(txt.length === 0){
            return undefined;
        }else{
            return txt.reverse(); }
}
// using Example 
let text = [ "Mohamed" , "Ahamed" , "Omer" ,"Zienab" , "Fatima" , "sayed "];
console.log(reservdString(text));
