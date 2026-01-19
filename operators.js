let x = 5;
x += 10;
let y = 2;

let z = x + y + "hello";
document.getElementById("demo2").innerHTML = "The sum of x + y is: " + z;

let a = true; 
a &&= 10;
alert(a); 

let b = true; 
b ||= 10; 
alert(b);

let c = null;  
c ??= 20; 
alert(c);