/**Write a program that takes User Inputs and does Unit Conversion of different Length units
1. Feet to Inch                   3. Inch to Feet
2. Feet to Meter                  4. Meter to Feet */
const prompt =require("prompt-sync")();
let select = parseInt(prompt("enter what you want to do = \n1-feet to inch \n2-inch to feet \n3-feet to meter \n4-meter to feet \n"));
switch(select){
    case 1 :
        let feet = parseInt(prompt("Enter value in feet -> "))
        console.log("the converted value in inch = "+ feet*12);
        break;
    case 2 :
        let inch = parseInt(prompt("Enter length in inch -> "))
        console.log("The converted value in feet is = "+ inch/12);
    case 3 :
        let feet1 = parseInt(prompt("Enter lenght in feet -> "))
        console.log("the converted value in meter is = "+ feet1/3.25);
    case 4 :
        let meter = parseInt(prompt("Enter value in meter -> "));
        console.log("the converted value in feet is =" + meter*3.28);
    default :
    console.log("please select correct oprtion");
} 