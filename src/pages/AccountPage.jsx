import React, { useState, useEffect } from 'react';

// Utility functions to manage localStorage
const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

const AccountPage = ({ userType }) => {
  const [userData, setUserData] = useState(getFromLocalStorage(userType));
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(userData?.tasks || []);
  const [review, setReview] = useState('');
  const [appointments, setAppointments] = useState(userData?.appointments || []);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null); // Track the selected appointment ID
  
  useEffect(() => {
    if (userData) {
      setAppointments(userData.appointments);
      setTasks(userData.tasks);
    }
  }, [userData]);

  const handleTaskChange = (e) => setTask(e.target.value);

  const addTask = () => {
    if (task) {
      const updatedTasks = [...tasks, task];
      setTasks(updatedTasks);
      saveToLocalStorage(userType, { ...userData, tasks: updatedTasks });
      setTask('');
    }
  };

  const handleReviewChange = (e) => setReview(e.target.value);

  const selectAppointment = (appointmentId) => {
    setSelectedAppointmentId(appointmentId);
    const appointment = appointments.find(app => app.id === appointmentId);
    setReview(appointment?.review || ''); // Set the existing review if any
  };

  const submitReview = () => {
    if (!selectedAppointmentId || !review) return;

    const updatedAppointments = appointments.map(appointment =>
      appointment.id === selectedAppointmentId
        ? { ...appointment, review: review }
        : appointment
    );
    setAppointments(updatedAppointments);
    saveToLocalStorage(userType, { ...userData, appointments: updatedAppointments });
    setReview('');
    setSelectedAppointmentId(null); // Reset the selected appointment
  };

  const handleLogout = () => {
    localStorage.removeItem(userType);
    window.location.reload(); // or redirect to login page
  };

  return (
    <div>
      <h1>{userType === 'doctor' ? 'Doctor' : 'Patient'} Account Page</h1>
      <button onClick={handleLogout}>Logout</button>

      <h2>Appointments</h2>
      {appointments.map(appointment => (
        <div key={appointment.id}>
          <p>{appointment.details}</p>
          {userType === 'doctor' && !appointment.review && (
            <>
              <button onClick={() => selectAppointment(appointment.id)}>Review Appointment</button>
            </>
          )}
          {userType === 'doctor' && appointment.id === selectedAppointmentId && !appointment.review && (
            <>
              <textarea 
                placeholder="Write your review" 
                value={review} 
                onChange={handleReviewChange} 
              />
              <button onClick={submitReview}>Submit Review</button>
            </>
          )}
        </div>
      ))}

      <h2>To-Do List</h2>
      <input 
        type="text" 
        value={task} 
        onChange={handleTaskChange} 
        placeholder="Add new task" 
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default AccountPage;
