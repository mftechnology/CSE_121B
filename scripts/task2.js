/* Lesson 2 * development by Marcelo Duarte/

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myname = "Marcelo Santos Duarte";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = myname;

// Step 3: declare and instantiate a variable to hold the current year
let nowyear = "2022";

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = nowyear;

// Step 5: declare and instantiate a variable to hold the name of your picture
let filename = "images/family.jpg";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', filename);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const myfoods = ['apple strudell', 'barbecue','cakes','ice cream'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = myfoods;

// Step 3: declare and instantiate a variable to hold another favorite food
let xfood = "pizza";

// Step 4: add the variable holding another favorite food to the favorite food array
myfoods.push(xfood);

// Step 5: repeat Step 2
document.querySelector('#food').textContent = myfoods;

// Step 6: remove the first element in the favorite foods array
myfoods.shift();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = myfoods;

// Step 8: remove the last element in the favorite foods array
myfoods.pop();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = myfoods;


