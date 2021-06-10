import "./App.css";
import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
function App() {
  //todos is an array
  const [todos, setTodos] = useState(["take a walk"]);
  //below hook is to take th input that is typed and store it in a state variable called input
  const [input, setInput] = useState("");
  const addTodo = (event) => {
    //this will fire off when we click the button
    console.log(input);

    event.preventDefault(); //will stop the REFRESH

    //the ... is to show that todos will not forget what todo has been added and will further append the new todo, stored in input
    setTodos([...todos, input]);

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
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
