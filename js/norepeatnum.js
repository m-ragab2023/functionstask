// function unique number 
function getUniqueNumbers(arr) {
    return Array.from(new Set(arr));
}
// using Example 
const numb = [1,1,1,1,2,2,22,3,44,5,6,7,8,9,6,6,6];
console.log(getUniqueNumbers(numb));