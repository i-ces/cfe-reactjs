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
