/* Task #1 */
let string = "jessica";
string = string.charAt(0).toUpperCase() + string.slice(1);
alert(string);
console.log(string[0].toUpperCase() + string.substring(1));
document.write("<h1>" + string[0].toUpperCase() + string.substring(1) +"</h1>");

/* Task #2 */
let myString = `Result: ${60 + 60}`;
console.log(myString);
document.write("<h2>" + myString + "</h2>");

/* Task #3 */
let firstName = prompt("Hello, I am A Computer. What is your name?");
let userAge = prompt("Nice to meet you. How old are you?");
document.write("<h3> Hi! My name is "+ firstName + "</h3>");
document.write("<h3> I am " + userAge + " years old.</h3>");
document.write("<h3> Oh Wow! You are already " + userAge + "</h3>");

/* Task #4 */ 
let num = "12345678";
console.log(num.substring(4, 9));
document.write("<h3> Your credit card's numbers: " + "****" + num.substring(4, 9) + "</h3>");