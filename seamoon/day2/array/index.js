// defining an array

const arr1 = [1, 2, 3, 4, 5];
// arr1 => [1, 2, 3, 4, 5]

const arr2 = ["a", "b", "c", "d", "e"];
// arr2 => ["a", "b", "c", "d", "e"]

const arr3 = ["hello", "world"];
// arr3 => ["hello", "world"]

const str = "hello world";

const diverseArr = [1, "a", "hello", 2, 100, "b", "world", 3, "c", "d", "e"];

const superArr = [arr1, arr2, arr3];

// console.log("combined array start");

// console.log(superArr);

// console.log("combined array end");

/* accessing the array */

// console.log(arr1[0]); // 1
// console.log(arr2[1]); // b
// console.log(arr3[0]); // hello

/* flattening the array */

const superImpose = [100, 200, 300, ...arr1, ...arr2, ...arr3];

console.log(superImpose);

// type of

console.log(typeof arr1[0]);

/** array methods **/

// push
arr1.push(6);

console.log(arr1);

//pop
arr1.pop();

console.log(arr1);

// unshift
arr1.unshift(0);

console.log(arr1);

// shift
arr1.shift();

console.log(arr1);

// toString

console.log(`\n\n\n\n${arr1.toString()}`);

// join
// returns a string of the array elements separated by the separator passed as an argument in the join
console.log(arr1.join(" ")); // 1 2 3 4 5
console.log(arr1.join(",")); // 1,2,3,4,5
console.log(arr1.join("|")); // 1|2|3|4|5

/**delete- deletes the element at the given index **/

delete arr1[2]; // result => [1, 2, empty, 4, 5]
console.log(arr1);

/** concat **/
let a1 = [1, 2, 3];
let a2 = [2, 3, 4];
let a3 = [3, 4, 5, 6];

let a4 = a1.concat(a2, a3); //returns a new array as [1, 2, 3, 2, 3, 4, 3, 4, 5, 6]

console.log(a4);

/**sort **/

a4.sort(); // sorts the array in ascending order
console.log(a4);

//diverse array case

diverseArr.sort();
console.log(diverseArr);

/** splice **/

let spliceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

spliceArr.splice(2, 3); // removes 3 elements starting from index 2
console.log(spliceArr);

/**slice **/

let sliceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let res = sliceArr.slice(1, 3);

console.log(res);

/**filter **/

let filterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filteredArr = filterArr.filter((item) => item % 2 === 0);

console.log(filteredArr);
