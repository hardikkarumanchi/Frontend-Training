const arr = ["BMW", "Volvo", "Saab", "Ford"];
let text2 = "";
for (let i = 0; i < 4; i++)
{
    text2 += arr[i] + " "
}
alert(text2);

let i = 0; 
let text = "";
do {
  
  text += "The number is " + i;
  i++;
  console.log(i);
}
while (i < 10);

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let k = 0;
let text3 = "";

while (cars[k]) {
  text3 += cars[k];
  k++;
}

