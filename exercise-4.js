// 1. Create an array `names` with at least 3 elements: `'david'`, `'gordon'`, and
//    `'sahil'` and log it to the console
const names = ["david", "gordon", "sahil"];
console.log(names);
// 2. Log the value of the third element in `names` to the console
const thirdName = names[2];
console.log(thirdName);
// 3. Log the value of the `names` array's `length` property to the console
let nameLength = names.length;
console.log(nameLength);
// 4. Set the value of the `length` property to `1`
nameLength = 1;
console.log(nameLength);
// 6. Once again, log the value of the `names` array's `length` property to the
//    console. Did it change?
"Yes it did"

// 7. Log the entire `names` array to the console again
console.log(names);

// 8. Add a few more elements to the array using `push`
names.push("john", "ben", "adam");
console.log(names);
// 9. Log the last element of the array to the console
const lastName = names.length - 1;
console.log(lastName);
console.log(names[lastName]);
// 10. Log the second last element of the array to the console
const secondLastName = names.length - 2;
console.log(secondLastName);
console.log(names[secondLastName]);

// 11. Change the `textContent` property of the _second_ `p` tag on the page to
//    `"JavaScript was here!"`


// 12. Convert the `names` array to a string, with each element separated by a
//    '<br>'. Store it in a new variable called `namesString` e.g. if `names` is
//    `['harry', 'ron', 'dean']` then `namesString` will be `"harry<br>ron<br>dean"`
const element = names.join("<br>");
console.log(element);
// 13. Change the `innerHTML` property of the _first_ `p` tag on the page to
//    `namesString`. What happens when you use `textContent` instead of
//    `innerHTML`?


