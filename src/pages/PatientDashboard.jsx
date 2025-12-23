import React, { useEffect, useState } from 'react';
import '../styles/PatientDashboard.css';
import PatientReviews from "../components/PatientReviews";

<PatientReviews />

const PatientDashboard = () => {
  const [patientData, setPatientData] = useState(null);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const storedPatient = localStorage.getItem('patient');
    if (storedPatient) {
      setPatientData(JSON.parse(storedPatient));
    }
  }, []);

  // Handle adding a new task
  const handleTaskAdd = () => {
    if (!newTask) return;
    const updatedTasks = [...patientData.tasks, { text: newTask, done: false }];
    const updatedPatient = { ...patientData, tasks: updatedTasks };
    setPatientData(updatedPatient);
    localStorage.setItem('patient', JSON.stringify(updatedPatient));
    setNewTask('');
  };

  // Toggle task completion
  const toggleTask = (index) => {
    const updatedTasks = patientData.tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    const updatedPatient = { ...patientData, tasks: updatedTasks };
    setPatientData(updatedPatient);
    localStorage.setItem('patient', JSON.stringify(updatedPatient));
  };

  if (!patientData) return <p>Loading patient dashboard...</p>;

  return (
    <div className="patient-dashboard-container">
      <h2>Welcome {patientData.username}</h2>
      <p>Age: {patientData.age || 'N/A'}</p>
      <p>Gender: {patientData.gender || 'N/A'}</p>

      {/* Medical Reports Section */}
      <div className="section-box">
        <h3>Medical Reports</h3>
        <ul>
          {patientData.reports?.length > 0 ? (
            patientData.reports.map((r, i) => <li key={i}>{r}</li>)
          ) : (
            <li>No reports available.</li>
          )}
        </ul>
      </div>

      {/* To-Do Tasks Section */}
      <div className="section-box">
        <h3>To-Do Tasks</h3>
        <div className="task-input">
          <input
            type="text"
            placeholder="New task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleTaskAdd}>Add Task</button>
        </div>
        <ul>
          {patientData.tasks.map((task, i) => (
            <li
              key={i}
              className={task.done ? 'done' : ''}
              onClick={() => toggleTask(i)}
            >
              {task.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientDashboard;
