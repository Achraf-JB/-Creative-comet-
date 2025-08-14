import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../services/taskService";

export default function TaskList({ refresh, onEdit }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = () => getTasks().then(res => setTasks(res.data));

  useEffect(() => { loadTasks(); }, [refresh]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      await deleteTask(id);
      loadTasks();
    }
  };

  const statusColors = {
    TODO: "#ff9800",
    IN_PROGRESS: "#2196F3",
    DONE: "#4CAF50",
  };

  return (
    <div style={styles.container}>
      {tasks.length === 0 && <p style={{ textAlign: "center", color: "#888" }}>No tasks yet</p>}
      {tasks.map(task => (
        <div key={task._id} style={styles.card}>
          <div style={styles.header}>
            <h3>{task.title}</h3>
            <div>
              <button onClick={() => onEdit(task)} style={styles.edit}>Edit</button>
              <button onClick={() => handleDelete(task._id)} style={styles.delete}>Delete</button>
            </div>
          </div>
          <p>{task.description}</p>
          <div style={styles.footer}>
            <span style={{ color: statusColors[task.status] }}>Status: <strong>{task.status}</strong></span>
            <span>Priority: <strong>{task.priority}</strong></span>
            <span>Due: <strong>{task.due_date ? new Date(task.due_date).toLocaleDateString() : "-"}</strong></span>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: { display: "flex", flexDirection: "column", gap: "20px" },
  card: { 
    width: "100%", 
    background: "#fefefe", 
    padding: "20px", 
    borderRadius: "15px", 
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  footer: { display: "flex", justifyContent: "space-between", marginTop: "12px", fontSize: "0.9rem", color: "#555" },
  edit: { marginRight: "10px", background: "#2196F3", color: "white", padding: "6px 12px", border: "none", borderRadius: "8px", cursor: "pointer" },
  delete: { background: "#f44336", color: "white", padding: "6px 12px", border: "none", borderRadius: "8px", cursor: "pointer" },
};
