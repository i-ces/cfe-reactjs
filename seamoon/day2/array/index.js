// defining an array

const arr1 = [1, 2, 3, 4, 5];
// arr1 => [1, 2, 3, 4, 5]

const arr2 = ["a", "b", "c", "d", "e"];
// arr2 => ["a", "b", "c", "d", "e"]

const arr3 = ["hello", "world"];
// arr3 => ["hello", "world"]

const str = "hello world";

const diverseArr = [1, "a", "hello", 2, "b", "world", 3, "c", "d", "e"];

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
