var student = {id:143,phone:1745,name:"Abir"}; //id:143  property:value
var student2 = {id:150,phone:87662,name:"Emam"};
//specific one property.3 way ber kora jay.
//one way 
var phoneNo = student.phone;
console.log(phoneNo);                   //output: 1745
console.log(student2);          //output: { id: 150, phone: 87662, name: 'Emam' }

//second way property
var phoneNo = student['phone']
console.log(phoneNo);                   //output: 1745

//third way property.
var phonePropNo = "phone";
var phoneNo = student [phonePropNo];
console.log(phoneNo);                   //output: 1745

//update property value
student2.phone = 5786;

//add property.
student2.dress = "red";



