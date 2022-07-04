import "./App.css";

// executing a function
function getTitle(title) {
  return `app-title ${title}`;
}

// Lists in Reacts
const list = [
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
];

const title = "hacker-stories";

// JavaScript Object
const welcome = {
  greeting: "Hey",
  title: "React",
};

const App = () => (
  <div>
    <h1> My first react App {title} </h1>

    {/* calling a function */}
    <h3> {getTitle("react js fundamentals")} </h3>
    <hr />

    {/* Lists in React  we return a JSX fragment that renders each item of the list: */}
    <ul>
      {list.map((item, index) => (
        <li key={item.objectID}>
          {" "}
          {index} {item.title}{" "}
        </li>
      ))}
    </ul>

    {/* Meet another React Component - Use PascalCase for React components*/}
    {/* creating an instance of List component */}
    <Search />
    <ShowList />
  </div>
);

// Meet another React Component - Use PascalCase for React components
// definition of List component
function ShowList() {
  return (
    <div>
      {/* Lists in React  we return a JSX fragment that renders each item of the list: */}
      <ul>
        {list.map((item, index) => (
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
        {list.map((item, index) => (
          <li key={index}>
            {" "}
            {index} {item.title}{" "}
          </li>
        ))}
      </ul>
      <ul>
        {list.map((item) => (
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
    </div>
  );
}

const Search = () => {
  // Handler Function in JSX - do something in between
  // const handleChange = (event) => {
  //   console.log("event", event);
  //   console.log("event target ", event.target);
  //   console.log("event target value", event.target.value);
  // };

  function handleChange(event) {
    console.log("event", event);
    console.log("event target ", event.target);
    console.log("event target value", event.target.value);
  }

  return (
    <div>
      {/* Input field and label combination */}
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

export default App;
