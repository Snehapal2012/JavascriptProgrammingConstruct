/**Write a program that takes a year as input and outputs the Year is a Leap Year or not
a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
divisible by 400. */
const prompt= require("prompt-sync")();

var year;
year=prompt("Enter a 4 digit year: ");
if(((year%4==0) && (year%100!=0)) || (year%400==0)){
    console.log("Year is Leap year!");
}
else{
    console.log("Year is not Leap year!");
}