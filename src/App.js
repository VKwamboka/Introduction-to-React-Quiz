import React from "react";
// import logo from './logo.svg';
import './App.css';

// import images from './images.svg'

/**
  Challenge: Display all users to the browser
**/
function Users(){
const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

const usersElements = users.map((user) => {
  return <li key={user.id}>{user.name}</li>
})

return (
  <div>
  <h3>Users</h3>
  <ol>
  {usersElements}
  </ol>
  </div>
)
}


// comment this out after completion and uncomment code below it to proceed
//REACT CHILDREN QUIZ

// function Child(props) {
//   return <div>{props.text}</div>;
// }



  // Challenge: Uncomment this code to complete quiz
  //CHILD CLICK QUIZ

function Child({onClickText}) {
  // console.log(onClickText)
  return (
    <>
      <div>Child</div>
      <button onClick={onClickText}>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  function handleText() {
    const newText = "I was changed by my child";
    setValue(newText); 
    if(value === newText){
      setValue("I need to be updated from my child")
    }
  }

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child onClickText = {handleText }/>
      </div>
    </>
  );
}
// Uncomment this to tackle quiz


// Comment out after completion
//REACT CHILDREN QUIZ

// function Parent() {
//   return (
    
//     <div>
//       <h3>Parent Component</h3>
//       <Child text = "This is children content"/>
//     </div>
//   );
// }
// Comment above code after completion

function App() {
  const [view,setView] = React.useState(true);
  return (
    
    <>
    <div>
    {/* my own image */}
      <img src={process.env.PUBLIC_URL + "logo.png"} className="App-logo" alt="logo" />
    </div>

    
      <h3>JSX is cool!</h3>
      <ul></ul>

    {/* TOGGLE */}
      <div>
      <button onClick={()=>setView(!view)}>Hide Element Below</button>
      {
        view? <div>Toggle Challenge</div>:null
      }
      </div>

      <Parent>
      <Child />
    </Parent>
    </>
  );
}

export {App, Users};
