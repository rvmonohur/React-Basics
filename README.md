# React-Basics

## 1. React Component Definition (Advanced)
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

## 2. Handler Function in JSX

Example of a function
```
// executing a function
function getTitle(title) {
  return `app-title ${title}`;
}

{/* calling a function */}
<h3> {getTitle("react js fundamentals")} </h3>
```

Handler function example

Always pass functions to these handlers, not the return value of the function, except when the return value is a function.

```
// don't do this
<input
id="search"
type="text" onChange={handleChange()}
/>

// do this instead
<input
id="search" type="text" onChange={handleChange}
/>
```

`
function handleClick(){
  console.log('button click...');
}
`

onload it triggers the function twice
`
<button type="button" onClick = {handleClick()}> Event Handler </button>
`

event handler is only called once when rendering the component for the first time
`
<button type="button" onClick = {handleClick}> Event Handler </button>
`


## 3. React Props
By using so-called props in React, we can pass variables as information from one component to another component.

Example, passing stories from App Compoent to its child, the Showlist Component
**src/App.js:**

```
const App = () => {
  const stories = [ ... ];

  return (
    <div>
      ...
      <ShowList list={stories} />
  </div> );
};


const Showlist = (props) => (
<ul>
    {props.list.map((item) => (
      <li key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
</li> ))}
</ul> );

```
`<List list = {stories} />`
>list -> name [from ShowList we use prop.list]





