let text = "12345";
let min = Math.min(...text);
let max = Math.max(...text);

document.getElementById("demo3").innerHTML =
"Minimum is: " + min + "<br>Maximum is: " + max;

let x = 123;
x.toString();
x.toExponential(2);

 x = 9.656;
x.toPrecision();
x.toPrecision(2); 

Number(false);
Number("10");
Number("John"); //NaN

parseInt("-10.33"); //-10
parseInt("10.33");  //10
parseInt("10 20 30"); //10 returns first number only
parseInt("10 years"); //10
parseInt("years 10"); //NaN

Number.isInteger(10);
Number.isFinite(123);
Number.isNaN("123yjk");

x = Number.EPSILON;
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

