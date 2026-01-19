let age = 5;
if(age > 18)
    alert("you can view this page");
else
    alert("you are not allowed to view this page")

let age1 = 16;
let text1 = (age1 < 18) ?  "Minor" : "Adult";
alert(text1);

let isMember = false;
let discount = isMember ? 0.2 : 0; //if falase, 0 is assigned to discount
isMember = true; 
let newdiscount = isMember ? 0.2: 0; //if true 0.2 is assigned to discount

let date = Date.getDay(); 
let day; 

switch (date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

alert("Today is "+day);