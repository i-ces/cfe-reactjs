//Array
const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];
const arr3 = ["hello", "world", "hiii"];

//Array of arrays
const superArr = [arr1, arr2];
console.log(superArr);

//Concatenated Array
const superimposed = arr1.concat(arr2);
console.log(superimposed);

//Superimposed Array using ...(spread operator)
const superimposed1 = [...arr1, ...arr2, ...arr3];
console.log(superimposed1);

//Array methods
console.log(arr1.push(9)); //Adds a element to the array
console.log(arr2.pop()); //Removes the element from last index and return the value
console.log(arr2.shift()); //Removes the element from first index and return the value
console.log(arr2); //Elemets 'a' and 'c' are removed hence it prints just 'a'
console.log(`\n\n\n ${arr2.toString()}`); //converts the arr2 into string
console.log(arr1.join(" ")); //Returns the arr1 as string and join elements with a seperator like: (" ")

//deletes an element from the array of given index and keeps it as null <1 empty item>
delete arr1[1];
console.log(arr1);

//delete element from the array using splice. index and no.of element to delete is given
let spliceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
spliceArr.splice(1, 3);
console.log(spliceArr); //prints [1,5,6,7,8,9]

//adds new element to array
let spliceArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
spliceArr2.splice(1, 0, 23, 45, 56);
console.log(spliceArr2); // Prints [1,2,23,45,56,3,4,5,6,7,8,9]
