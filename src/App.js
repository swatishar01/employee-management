// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<EmployeeList />} />
            <Route path="/create" element={<AddEmployee />} />
            <Route path="/update/:id" element={<UpdateEmployee />} />

          </Routes>
        </div>
      </Router>
  );
}

export default App;
