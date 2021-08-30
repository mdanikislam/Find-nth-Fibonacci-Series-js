/* function fibonacci(n) {
    return n < 1 ? 0
         : n <= 2 ? 1
         : fibonacci(n - 1) + fibonacci(n - 2);
 }
 
 console.log(fibonacci(4)); */



/* function recursiveFibonacci(n){
	// base case
	if(n === 0) return 0
  	if(n === 1) return 1
  
  	// recursioin base
  	return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}
console.log(recursiveFibonacci(8)); */

 /* function fibonacci(n) {
    if (n < 2){
        return 1;
    }else{
        return fibonacci(n-2) + fibonacci(n-1);
    }
}

console.log(fibonacci(7)); */
function fibonacci(n) {
    return n < 1 ? 0
         : n <= 2 ? 1
         : fibonacci(n - 1) + fibonacci(n - 2)
 }
 
 console.log(fibonacci(4))