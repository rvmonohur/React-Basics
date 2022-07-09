import "./App.css";
import React, { useState } from 'react';

// executing a function
function getTitle(title) {
  return `app-title ${title}`;
}

function handleClick() {
  console.log("button click...");
}

const title = "hacker-stories";

// JavaScript Object
const welcome = {
  greeting: "Hey",
  title: "React",
};

const App = () => {
  // Lists in Reacts
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: "Router",
      url: "https://reactrouter.com/",
      author: "Remix",
      num_comments: 10,
      points: 50,
      objectID: 2,
    }
  ];

  return (
    <div>
      <h1> My first react App {title} </h1>

      {/* calling a function */}
      <h3> {getTitle("react js fundamentals")} </h3>
      <hr />

      {/* Lists in React  we return a JSX fragment that renders each item of the stories: */}
      <ul>
        {stories.map((item, index) => (
          <li key={item.objectID}>
            {" "}
            {index} {item.title}{" "}
          </li>
        ))}
      </ul>

      {/* Meet another React Component - Use PascalCase for React components*/}
      {/* creating an instance of List component */}
      <Search />
      <ShowList list = {stories} />
    </div>
  );
};

// Meet another React Component - Use PascalCase for React components
// definition of List component
function ShowList(props) {
  return (
    <div>
      {/* Lists in React  we return a JSX fragment that renders each item of the stories: */}
      <ul>
        {props.list.map((item, index) => (
          <li key={item.objectID}>
            {" "}
            {index} {item.title}{" "}
          </li>
        ))}
      </ul>

      <p>
        We avoid using the index of the item in the array to make sure the key
        attribute is a stable identifier.
      </p>
      <ul>
        {props.list.map((item, index) => (
          <li key={index}>
            {" "}
            {index} {item.title}{" "}
          </li>
        ))}
      </ul>
      <ul>
        {props.list.map((item) => (
          <li key={item.objectID}>
            <span>
              <a href={item.url}> {item.title} </a>
            </span>
            <span>{item.author} </span>
            <span>{item.num_comments} </span>
            <span>{item.points} </span>
          </li>
        ))}
      </ul>

        {/* React Props to List's child component */}
        {
        props.list.map ((item) => (
          <Item key = {item.objectID}   itemStory = {item} />
        ))
        }

    </div>
  );
}


const Item = (props) => (
  <li>
    <span>
      <a href={props.itemStory.url}>{props.itemStory.title}</a>
    </span>
    <span>{props.itemStory.author}</span>
    <span>{props.itemStory.num_comments}</span>
    <span>{props.itemStory.points}</span>
</li> 
);


const Search = () => {
  // Handler Function in JSX - do something in between
  // const handleChange = (event) => {
  //   console.log("event", event);
  //   console.log("event target ", event.target);
  //   console.log("event target value", event.target.value);
  // };

  // let searchTerm = '';
  const [searchTerm, setSearchTerm] = React.useState('');

  function handleChange(event) {

    console.log("event target value", event.target.value);
    // searchTerm = event.target.value;
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      {/* Input field and label combination */}
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" onChange={handleChange} />

      {/* <button type="button" onClick = {handleClick()}> Event Handler </button> */}
      <button type="button" onClick={handleClick}>
        {" "}
        Event Handler{" "}
      </button>

      {/* React State
      Whenever a user types something into an HTML input field, the user may want to see this typed information (state) displayed somewhere else in the application.
      */}
      <p>
        Searching for <strong> {searchTerm} </strong>
      </p>

    </div>
  );
};

export default App;
