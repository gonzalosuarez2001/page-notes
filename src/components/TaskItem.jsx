import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import "../css/taskItem.css";

export default function TaskItem(props) {
  const deleteNote = useContext(TaskContext);

  return (
    <div className="col-md-5 col-xxl-3 rounded p-4 m-3 taskItem_item">
      <h3 className="text-center border-bottom pb-3">Nota {props.index}</h3>
      <p className="pt-3">{props.content}</p>
      <button
        className="btn btn-danger col-12"
        onClick={() => deleteNote(props.id)}
      >
        Eliminar
      </button>
    </div>
  );
}
