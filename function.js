function myself(){                      // function name()
    console.log('I am eity');           
    console.log('I am a good woman');    

}
myself();  //function call                   //output: I am eity
                                            //       I am a good woman

//function k onnak ber call kora
myself();                           //output: I am eity
var date = 14;                      //       I am a good woman
var place = "Restaurent";
myself();                           //output: I am eity
                                    //       I am a good woman

//function parameter.
function doubleIt (num){
    var result = num*2;
    console.log(result);
}      
doubleIt(5);                        //output: 10
doubleIt(10);                       //output: 20
doubleIt(100);                      //output: 200

//function return
function doubleIt(num){
    var result = num*2;
    return result;
}
var first = doubleIt(5);
var second = doubleIt(50);
console.log(first,second); //one or more output print     //output: 10 100
var total = first + second;
console.log(total);                     //output: 110

//multiple parameter pass
function add(num1, num2){
    var result = num1 + num2;
    return result;
}
var sum = add(15,17);
console.log(sum);                       //output: 32