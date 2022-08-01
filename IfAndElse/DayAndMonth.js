/**Write a program that takes day and month from the command line and prints true if

day of month is between March 20 and June 20, false otherwise. */
const prompt =require("prompt-sync")();

var day,month;
day=prompt("Enter day of the month: "); //day of month should be between 1 to 31
month=prompt("Enter month of the year: "); //month in a year should be between 1 to 12

console.log("Date: ",day,"/",month);
if ((day >=20 && month>=3) && (day<=20 && month<=6) ){
    console.log("True");
}
else console.log("False");