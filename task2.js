
// Exercise 1: Divisible by 3 and 5

let number = 15;

if (number % 3 == 0 && number % 5 == 0) {
    console.log("The number is divisible by both 3 and 5");
}
else {
    console.log("The number is not divisible by both 3 and 5");
}



// Exercise 2: Student Pass Check

let maths = 35;
let science = 20;

if (maths >= 35 || science >= 35) {
    console.log("Student passed in at least one subject");
}
else {
    console.log("Student failed in both subjects");
}


// Exercise 3: Login Validation

let username1 = "admin";
let password = "12345";

if (username == "admin" && password == "12345") {
    console.log("Login Successful");
}
else {
    console.log("Invalid Username or Password");
}


// Exercise 4: Username Validation

let username = "manager";

if (username == "admin" || username == "manager") {
    console.log("Valid Username");
}
else {
    console.log("Invalid Username");
}



// Exercise 5: Senior Citizen Discount

let age = 65;

if (age >= 60) {
    console.log("Eligible for Senior Citizen Discount");
}
else {
    console.log("Not Eligible for Senior Citizen Discount");
}
