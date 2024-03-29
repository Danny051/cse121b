/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
let fullName = "Hassan Daniel";
let currentYear =  "2024";
let profilePicture = "images/myphoto.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img")


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", `${profilePicture}`);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */
let favoriteFoods = ["Bread and Egg", "Jollof Rice, Fried Rice with Chicken", "Chicken Burger", "Fried Plantain with Egg"];
foodElement.innerHTML = `${favoriteFoods.join(", ")}`;
let newFavoriteFood = " Turkey / Fish / Chicken, and Chips";
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;








