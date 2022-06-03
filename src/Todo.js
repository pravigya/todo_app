import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { db } from "./firebase_config";
import Button from '@mui/material/Button';

export default function TodoListItem({ todo, inprogress, id }) {
  function toggleInProgress() {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  }

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }

  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? "In Progress" : "Completed"}
        />
      </ListItem>

      <ListItemButton onClick={toggleInProgress}>
        {inprogress ? "Done" : "UnDone"}
      </ListItemButton>
      <Button onClick={deleteTodo}>X</Button>
    </div>
  );
}