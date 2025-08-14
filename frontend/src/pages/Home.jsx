import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Home() {
  const [refresh, setRefresh] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const refreshTasks = () => setRefresh(!refresh);

  return (
    <div style={styles.container}>
      <div style={styles.taskTracker}>
        {/* Left Form */}
        <div style={styles.formSection}>
          <h1 style={styles.title}>🚀 Task Tracker</h1>
          <TaskForm
            onTaskAdded={refreshTasks}
            editingTask={editingTask}
            onCancelEdit={() => setEditingTask(null)}
          />
        </div>

        {/* Right Task List */}
        <div style={styles.listSection}>
          <TaskList refresh={refresh} onEdit={(task) => setEditingTask(task)} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #e0f0ff, #c3d8ff)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "20px",
  },
  taskTracker: {
    display: "flex",
    width: "100%",
    maxWidth: "1200px",
    minHeight: "80vh",
    height: "80vh",       // set a fixed height
    borderRadius: "20px",
    overflow: "hidden",   // keep form visible, list scrolls inside
    boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
    background: "#fff",
  },
  
  listSection: {
    flex: 1.5,
    background: "#fff",
    padding: "30px",
    overflowY: "auto",   // scrollable only
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "25px",
    color: "#333",
    textAlign: "center",
    textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
  },
  formSection: {
    flex: 1,
    background: "#f0f8ff",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    borderRight: "2px solid #e0e0e0",
  },
  // listSection: {
  //   flex: 1.5,
  //   background: "#fff",
  //   padding: "30px",
  //   overflowY: "auto",
  //   display: "flex",
  //   flexDirection: "column",
  //   gap: "20px",
  // },

  "@media (max-width: 768px)": {
    taskTracker: { flexDirection: "column" },
    formSection: { borderRight: "none", borderBottom: "2px solid #e0e0e0" },
  },
};
