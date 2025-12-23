import React, { useEffect, useState } from 'react';
import '../styles/DoctorProfile.css';

const DoctorProfile = () => {
  const [doctorData, setDoctorData] = useState(null);
  const [newTask, setNewTask] = useState('');
  
  // Fetch doctor data from localStorage when the component mounts
  useEffect(() => {
    const storedDoctor = localStorage.getItem('loggedInUser');
    if (storedDoctor) {
      setDoctorData(JSON.parse(storedDoctor));
    }
  }, []);
  
  // Handle adding a new task
  const handleTaskAdd = () => {
    if (!newTask) return;
    const updatedTasks = [...doctorData.tasks, { text: newTask, done: false }];
    const updatedDoctor = { ...doctorData, tasks: updatedTasks };
    setDoctorData(updatedDoctor);
    localStorage.setItem('loggedInUser', JSON.stringify(updatedDoctor));
    setNewTask('');
  };
  
  // Toggle task completion status
  const toggleTask = (index) => {
    const updatedTasks = doctorData.tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    const updatedDoctor = { ...doctorData, tasks: updatedTasks };
    setDoctorData(updatedDoctor);
    localStorage.setItem('loggedInUser', JSON.stringify(updatedDoctor));
  };

  // If doctor data is not loaded, show loading message
  if (!doctorData) return <p>Loading doctor profile...</p>;

  return (
    <div className="doctor-profile-container">
      <h2>Welcome Dr. {doctorData.name}</h2>
      <p>Specialty: {doctorData.specialty || 'General Medicine'}</p>

      {/* Appointments Section */}
      <div className="section-box">
        <h3>Appointments</h3>
        <ul>
          {doctorData.appointments.length > 0 ? (
            doctorData.appointments.map((appt, i) => <li key={i}>{appt}</li>)
          ) : (
            <li>No appointments yet.</li>
          )}
        </ul>
      </div>

      {/* Handled Patients Section */}
      <div className="section-box">
        <h3>Handled Patients</h3>
        <ul>
          {doctorData.patients?.length > 0 ? (
            doctorData.patients.map((p, i) => <li key={i}>{p}</li>)
          ) : (
            <li>No patient records yet.</li>
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
          {doctorData.tasks.map((task, i) => (
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

export default DoctorProfile;
