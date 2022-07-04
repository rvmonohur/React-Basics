# React-Basics

## React Component Definition (Advanced)
Defining React function components with arrow functions makes them more concise:

This can be done on components which does not perform any tasks in between.
Only those who return JSX

**src/App.js:**

```
const App = () => 
(
  <div> 
    ...
  </div>
);

const App = () => {
// perform any task in between
return 
( 
  <div> 
    ...
  </div> 
);};

```