/**Read a Number and Display the week day (Sunday, Monday,...)*/
const prompt=require("prompt-sync")();
var day;
day=parseInt(prompt("Enter number of the day in a week: "));
if(day==0){
    console.log("Sunday");
}else if(day==1){
    console.log("Monday");
}else if(day==2){
    console.log("Tuesday");
}else if(day==3){
    console.log("Wednesday");
}else if(day==4){
    console.log("Thursday");
}
else if(day==5){
    console.log("Friday");
}else{
    console.log("Saturday");
}