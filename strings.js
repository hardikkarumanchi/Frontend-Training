let text = "john doe"; 

//string length
const len = text.length; 

//escape characters

text = "We are the so-called \"Vikings\" from the north.";

//string object

let str = new String("hello"); 

let char = text.charAt(0); 
let char1 = text.charCodeAt(0);

const name = "W3Schools";
let letter = name.at(2);
letter = name[3]; 


let text5 = "Please locate where 'locate' occurs!";
let index = text5.indexOf("locate");
let index1 = text5.lastIndexOf("locate", 15);


let text6 = "The rain in SPAIN stays mainly in the plain";
text6.match("ain");

let firstName = "hardik";
let lastName = "   K ";
firstName = firstName.toUpperCase();
lastName = lastName.trim();