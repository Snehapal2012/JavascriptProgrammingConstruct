/**Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,... */
const prompt=require("prompt-sync")();
var unit;
unit=parseInt(prompt("Enter units: "));
if(unit==1){
    console.log("Unit");
}else if(unit==10){
    console.log("Ten");
}else if(unit==100){
    console.log("Hundred");
}else if(unit==1000){
    console.log("Thousand");
}else if(unit==10000){
    console.log("Ten thousand");
}else if(unit==100000){
    console.log("1 Lakh");
}else if(unit==1000000){
    console.log("Ten Lakh");
}else if(unit==10000000){
    console.log("1 crore");
}else if(unit==100000000){
    console.log("Ten crore");
}else if(unit==1000000000){
    console.log("hundred crore");
}