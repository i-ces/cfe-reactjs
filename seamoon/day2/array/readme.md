# Array

An array is a set of similar data types stored in a single variable. It is a data structure that stores a collection of elements of the same data type. It is a container that holds multiple values in a single variable.

- index starts from zero
- can be accessed by the array_name[index]
- array can be anything like int, float, char, etc.
- array also can be array of arrays
- accessing a nested array is array_name[][]...
- in JS array can also hold values with different data types

## Spread operator

```js

... - is called spread operator has a very important role and a lot of use

```

example:

```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arrSuper = [...arr1, ...arr2];
// results arrSuper => [1,2,3,4,5,6]
```

## Types of Array

- One Dimensional Array
- Multi Dimensional Array

## Array methods <!-- given by javascript itself -->

- push() - add an element at the end of the array
- pop() - remove an element from the end of the array, and return the element
- shift() - remove an element from the beginning of the array, and return the element
- unshift() - add an element at the beginning of the array

NOTE: return type methods/functions are those which return some value after execution ie: that aren't void

- toString() - converts an array to a string of (comma separated) array values

- join() - joins all array elements into a string with a separator
- delete() - deletes the element at index
- concat() - joins two or more arrays, and returns a copy of the joined arrays
- sort() - sorts the elements of an array

NOTE: When JS handles multiple data types at once, it tries to convert all the primitives to the higher order of data type

- splice() - splice removes and adds elements to the array, it takes 3 arguments
  - index - where to start the operation
  - how many elements to remove
  - elements to add

```js
let arr = [1, 2, 3, 4, 5];

arr.splice(1, 0, 55, 60); // it removes 0 elements and adds 55, 60 at index 1
// arr => [1, 55, 60, 2, 3, 4, 5]
```

- slice() :slice method is a return type function/method operated in the array, it takes 2 arguments
  - start index
  - end index

```js
let arr = [1, 2, 3, 4, 5];
const newArr = arr.slice(1, 3); // it returns a new array with elements from index 1 to 3
console.log(newArr); // [2, 3]
```

- filter() : filter method is a return type function/method operated in the array, it takes a callback function as an argument
  - callback function takes 3 arguments - element - index - array
    NOTE: What is a callback function?
    A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.
