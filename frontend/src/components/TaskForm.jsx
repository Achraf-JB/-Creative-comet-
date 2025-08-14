import { useState, useEffect } from "react";
import { createTask, updateTask } from "../services/taskService";

export default function TaskForm({ onTaskAdded, editingTask, onCancelEdit }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "TODO",
    priority: "MEDIUM",
    due_date: "",
  });

  useEffect(() => {
    if (editingTask) setForm(editingTask);
  }, [editingTask]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingTask) await updateTask(editingTask._id, form);
    else await createTask(form);
    onTaskAdded();
    setForm({ title: "", description: "", status: "TODO", priority: "MEDIUM", due_date: "" });
    if (editingTask) onCancelEdit();
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} style={styles.input} required />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} style={styles.textarea} />
      <div style={styles.row}>
        <select name="status" value={form.status} onChange={handleChange} style={styles.select}>
          <option value="TODO">TODO</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>
        <select name="priority" value={form.priority} onChange={handleChange} style={styles.select}>
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
        <input type="date" name="due_date" value={form.due_date} onChange={handleChange} style={styles.date} />
      </div>
      <div style={styles.buttonRow}>
        <button type="submit" style={styles.button}>{editingTask ? "Update Task" : "Add Task"}</button>
        {editingTask && <button type="button" onClick={onCancelEdit} style={styles.cancel}>Cancel</button>}
      </div>
    </form>
  );
}

const styles = {
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  row: { display: "flex", gap: "10px", justifyContent: "space-between" },
  input: { padding: "12px", borderRadius: "10px", border: "1px solid #ccc", fontSize: "1rem" },
  textarea: { padding: "12px", borderRadius: "10px", border: "1px solid #ccc", minHeight: "80px", fontSize: "1rem" },
  select: { padding: "12px", borderRadius: "10px", border: "1px solid #ccc", flex: 1 },
  date: { padding: "12px", borderRadius: "10px", border: "1px solid #ccc", flex: 1 },
  buttonRow: { display: "flex", gap: "10px" },
  button: {
    flex: 1,
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#4CAF50",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s",
  },
  cancel: {
    flex: 1,
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#f44336",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s",
  },
};
