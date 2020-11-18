
function diceGame(matrix){
  let sum=0;
 for(let i=0;i<matrix.length;i++){
   if(matrix[i][0]===matrix[i][1]){
     sum=0;
     return sum;
   }
   sum+=matrix[i][0]+matrix[i][1];
 }
 return sum;
}
console.log(diceGame([[1, 2], [3, 4], [5, 6]])); // should return 21
console.log(diceGame([[5, 6], [6, 4],[1, 1]])); // should return 0
console.log(diceGame([[4, 5], [4, 5], [4, 5]])); // should return 27