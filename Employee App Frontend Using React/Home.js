// src/pages/Home.js

import React, { useEffect, useState } from 'react';

const Home = () => {
  const [employees, setEmployees] = useState([]);

  // Fetch employee data from API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setEmployees(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Employee Dashboard</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
