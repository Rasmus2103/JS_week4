//Functions and Callbacks 

function add(n1, n2){
    return n1 + n2
 }
 
const sub = function(n1,n2){
   return n1 - n2
 } 
 
const cb = function(n1,n2, callback){
    if(typeof n1 !== "number") {
        throw new Error("1. has to be a number")
    }
    if(typeof n2 !== "number"){
        throw new Error("2. has to be a number");
    }
    if(typeof callback !== "function") {
        throw new Error("3. has to be a function");
    }
   return "Result from the two numbers: " + n1 + " + " + n2+ " = " + callback(n1,n2);
 };
 
//  console.log( add(1,2) )     // What will this print?
//  console.log( add )          // What will it print and what does add represent?
//  console.log( add(1,2,3) ) ; /* What will it print -- It will print out the sum of the function which is '3', because it the 
//                                function will only take 2 of the arguments, because the funtion only has 2 arguments to begin with .*/
//  console.log( add(1) );	    // What will it print 	
//  console.log( cb(3,3,add) ); // What will it print
//  console.log( cb(4,3,sub) ); // What will it print

//  try {
//     console.log(cb(3,3,add())); // What will it print (and what was the problem)
//  } catch (error) {
//     console.log("Error occurred: " + error.message);
//  }
 
//  console.log(cb(3,"hh",add));// What will it print

 //--More Callbacks 

 //4
 function mul(n1, n2) {
    return n1 * n2;
}

console.log(cb(5, 5, (mul)));

// 5 - We call the function back with an anymous function =>
console.log(cb(10, 2,(n1, n2) => n1 / n2));







 