// import { Component, useState } from "react";
import "./App.css";
import { Checkbox, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
function App() {
  let todos = {
    todos: [
      { id: 1, taskname: "Make bed" },
      { id: 2, taskname: "Cook dinner" },
      { id: 3, taskname: "Read books" },
      { id: 4, taskname: "Laundry" },
      { id: 5, taskname: "Watch Oppenheimer" },
      { id: 6, taskname: "Coding " },
      { id: 7, taskname: "Watch tv show" },
    ],
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="top">
        <h1 className="heading">TODO</h1>
        <div className="todo-container">
          <div className="add">
            <Checkbox
              {...label}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            />{" "}
            <TextField></TextField>
          </div>
          <div className="tasks">
            {todos.map((el, i) => {
              return (
                <div className="all-tasks">
                  <Checkbox
                    sx={{
                      "& .MuiSvgIcon-root": { fontSize: 30 },
                    }}
                  ></Checkbox>
                  <h4>{el.taskname}</h4>
                  <CloseIcon className="close" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default App;
