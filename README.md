# Class notes

- In react we can't use `class` rather we use `className` because `class` is a reserved keyword in javascript.
- To terminate the running server in the terminal presst `ctrl + c`.

## hooks used

- useState: to manage the state of the component.
- useEffect: to perform side effects in the component. -- preloaded when the page is first rendered -- when the dependencies is updated
  syntax:

```javascript
useEffect(() => {
  // code here
}, [dependency1, dependency2..., dependcyN]);
```
