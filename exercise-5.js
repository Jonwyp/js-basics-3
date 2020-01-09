// 1. Create a new array `shoppingList` with a few string elements
const shoppingList = ["table", "chair","cabinet"];
console.log(shoppingList);
// 2a. Using for loop to log every element
for (let i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i]);
}; 
// 2b. Using `forEach`, log every element of the `shoppingList` array to the console
shoppingList.forEach(i => console.log(i));
// 3. For each element in the `shoppingList` array, create an `<li>` node and
//    append it to the `<ul>` element on the page (use `document.createElement`
//    and `.appendChild`)


// 4. Create a new array `numbers` with a few numeric elements
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// 5a. Using `for` on the `numbers` array, create a new array called
//    `squareNumbers` where each element is the square of the corresponding
//    element in the `numbers` array

let newNumbers = []; 
for (let i = 0; i < numbers.length; i++) {
    newNumbers.push(numbers[i]**2);
}
console.log(newNumbers);
// 5b. Using `map` on the `numbers` array, create a new array called
//    `squareNumbers` where each element is the square of the corresponding
//    element in the `numbers` array
const squareNumbers = numbers.map(number => number ** 2);
// const squareNumbers = numbers.map(function(number){
//     return number ** 2;
// };
console.log(squareNumbers);
