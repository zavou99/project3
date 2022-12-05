let diagonal_square=(a,b) => a/2;
console.log("the diagonal of square is : "+diagonal_square(9));

let side1 = 5; 
let side2 = 6; 
let side3 = 7; 

let semi_parameter=(side1+side2+side3)/2;
let area= Math.sqrt(semi_parameter*((semi_parameter-side1)*(semi_parameter-side2)*(semi_parameter-side3)));
console.log("the parameter is :"+area);

let radious = 4;
let p_cycle = 3.14;

let circumference = (2*p_cycle*radious);
console.log("the circumference of cycle is : "+circumference);
let  surfacearea = 4*p_cycle* Math.pow(radious,2);
console.log("the surfacearea of cycle is : "+surfacearea);