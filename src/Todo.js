import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";

function Todo(props) {
  //props means properties
  return (
    <List>
      <ListItem>
        <ListItemText primary="ToDo" secondary={props.text} />
      </ListItem>
    </List>
  );
}

export default Todo;
