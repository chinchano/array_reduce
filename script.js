var ratings = [100,900,435,1,23,909,2000];

	// Return sum 
var summedUp = ratings.reduce((accum, current) => accum + current);
//console.log(summedUp);
		
//Return largest number
var largestNum = ratings.reduce((prev, current) => {
     if(current > prev){
  return current;
} else {
  return prev;
  }
});
console.log(largestNum);