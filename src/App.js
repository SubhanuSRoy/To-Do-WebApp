import "./App.css";
import React, { useState,useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase"
import firebase from "firebase"
function App() {
  //todos is an array
  const [todos, setTodos] = useState([]);
  //below hook is to take th input that is typed and store it in a state variable called input
  const [input, setInput] = useState("");


  //when the app loads we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    //this code here fires whne the app.js loads

    //every single time the database changes we want to firebase to take a snapshot, here docs is the list of todos in the firebase. doc means one single todo, and doc.data() is an object and we want the property of the object called todo(defined when we made a collection in firebase)
    // to order the todos by timestamp so that the most recent addition appears at the top we need to use the orderby function
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [])

  const addTodo = (event) => {
    //this will fire off when we click the button
    console.log(input);

    event.preventDefault(); //will stop the REFRESH

    //the below snippet with db is to add the input which user types direcly into our database, doing this we dont need to use the setTodos([...todos, input]); statement.
    //we add the timstamp property so that we can order the todos based the server time of the firebase server
    db.collection('todos').add(
      {
        todo:input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      }
    )

    //the ... is to show that todos will not forget what todo has been added and will further append the new todo, stored in input
    // setTodos([...todos, input]);

    setInput(""); //clear up the i/o afer hitting submit
  };
  return (
    <div className="App">
      <h1>Hello I am Subhanu</h1>
      {/* the value attribute of the input tag is made to be the input state variable as declared above in line 8. then we use the onChange attribute to the take in whatever we type (called event), by using the setInput hook to take the value of the event. */}

      <FormControl>
        <InputLabel>Add a To Do Task</InputLabel>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          // means when no input then the button will be disabled
          disabled={!input}
        >
          Add Todo
        </Button>
      </FormControl>

      {/* to make add the task if we press enter we need to put this in side a form or formcontrol and make the button type as submit */}

      <ul>
        {/* curly braces in jsx is used to write js snippets. so her we use the todos.map function to map through al the todo elments in the todos array and then print each inside a list */}
        {todos.map((todo) => (
          <Todo text={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
