// function return largest value 
 function getMaxvalue(arr){
    if( arr.length  === 0){
          return undefined ;
    }else{
      return Math.max(...arr);}
}
// using Example 
 const num = [33,55,67,454,4344] ;
 console.log(getMaxvalue(num));

