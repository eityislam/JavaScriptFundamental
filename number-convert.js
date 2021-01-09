//string convert to number
var num1 = 25;
var num2 = "15.5";
num2 = parseFloat(num2);
console.log(num1+num2);     //output: 40.5

//integer e rakte chaile
num2 = parseInt(num2)
console.log(num1+num2)      //output: 40

//another syster. convert string to number
num2 = + num2;              //output: 40.5
//''(empty string) no gap .' '(white space) has gap
//srting convert
num1 = '' + num1;
console.log(typeof num1);   //output: string

//special(problem)
var num1 = 0.1;
var num2 = 0.2;
console.log(num1+num2);     //output : 0.30000000000000004

//tofixd - dosomiker por koy gor dakhate chai
var num1 = 0.1;
var num2 = 0.2;
var total = num1 + num2;
var total = total.tofixed(1);
console.log(total);     // output : 0.3