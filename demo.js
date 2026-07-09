let name = "Rishikesh";
let sname= "sambare"; 

console.log(name);
let b  = name.charAt(0);
console.log(b)

console.log(name[1])   // i -- using index


console.log(name.length)   //9 

console.log(name.toLowerCase())    //rishikesh
console.log(name.toUpperCase())   //RISHIKESH

console.log(name.slice(0,5))     //Rishi

console.log(name.slice(-1))    // h 

console.log(name.slice(-1,0))  

let c = name.concat(" ",sname);
console.log(c);