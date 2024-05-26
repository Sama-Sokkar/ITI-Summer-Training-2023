///////////// Task1 /////////////
alert("Welcome to my site!");
var res = prompt("Enter your Name:");
var color = prompt("Choose color from red, green or blue to display your Name");
if (color === "red" || color === "green" || color === "blue") 
{
    document.write("<h1><p style='color: " + color + "'> Welcome " + res + "!</p></h1>");
} 
else 
{
    alert("Please choose either red, green, or blue.");
}


///////////// Task2 /////////////
// var text = prompt("Say anything!");
// for(var i=1 ; i<7 ; i++)
// {
//     document.write("<h" + i + ">" + text + "</h" + i + ">");
// }

