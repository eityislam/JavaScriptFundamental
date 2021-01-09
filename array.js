//set index (0,1,2,3,4......)
var friendAge = [15,17,14,16];
var sonaliAge = friendAge [2];
console.log(sonaliAge);             //output: 14

//value set 
friendAge [1] = 21;
console.log(friendAge);                     //output: [ 15, 21, 14, 16 ]

//find index or position
var position = friendAge.indexOf(16);
console.log(position);                       //output: 3

//push the element at the end
friendAge.push(20);
console.log(friendAge);                    //output:  [ 15, 21, 14, 16,20 ]

//pop the element at the end.
friendAge.pop();
console.log(friendAge);                 //output:  [ 15, 21, 14, 16]

//length of array.
console.log(friendAge.length);          //output: 4

//Remove the element from the beggining.
var friendName = ['Tanjila','Meher','Zinia','Shiuli','Tamanna','zinat'];
friendName.shift();
console.log(friendName);      //output: [ 'Meher', 'Zinia', 'Shiuli', 'Tamanna', 'zinat' ]

//insert the element from the begging.
friendName.unshift('Tanjila');
console.log(friendName);    //output: [ 'Tanjila', 'Meher', 'Zinia', 'Shiuli', 'Tamanna', 'zinat' ]

//slice of array.
var friendName = ['Tanjila','Meher','Zinia','Shiuli','Tamanna','zinat'];
 var part = friendName.slice(0,3);
 console.log(part);             //output: [ 'Tanjila', 'Meher', 'Zinia' ]
 

