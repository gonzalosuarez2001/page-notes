import React, { useState, useEffect, createRef } from "react";
import { TaskContext } from "../contexts/TaskContext";
import TaskItem from "./TaskItem.jsx";
import "../css/taskCreator.css";

export default function TaskCreator() {
  const [noteList, setNoteList] = useState([]);
  const [note, setNote] = useState("");
  const [noteId, setNoteId] = useState(0);

  const inputRef = createRef();

  function handleInput(e) {
    setNote(e.target.value);
  }

  function addNote(e) {
    e.preventDefault();
    if (inputRef.current.value !== "") {
      setNoteId(noteId + 1);
      setNoteList([...noteList, { id: noteId, content: note }]);
      inputRef.current.value = "";
      setNote("");
    }
  }

  function deleteNote(id) {
    let newNoteList = noteList.filter((note) => {
      return note.id !== id;
    });
    setNoteList(newNoteList);
  }

  useEffect(() => {
    console.log(noteList);
  }, [noteList]);

  return (
    <TaskContext.Provider value={deleteNote}>
      <div className="container col-11 justify-content-center">
        <form className="col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 row form-group justify-content-center">
          <input
            ref={inputRef}
            onChange={(e) => handleInput(e)}
            type="text"
            placeholder="Ingrese una Nota"
            className="col-12 form-controls mt-3 text-center"
          ></input>
          <button
            onClick={(e) => addNote(e)}
            className="col-12 btn btn-primary my-2"
          >
            Guardar
          </button>
        </form>
        <div className="row justify-content-center">
          {noteList.map((note, index) => {
            return (
              <TaskItem
                key={note.id}
                id={note.id}
                content={note.content}
                index={index + 1}
              />
            );
          })}
        </div>
      </div>
    </TaskContext.Provider>
  );
}
