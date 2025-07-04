// src/components/AddEmployee.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from './EmployeeService';

function AddEmployee() {
    const [employee, setEmployee] = useState({ firstName: "",lastName: "", email: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const saveEmployee = async (e) => {
        e.preventDefault();
        await EmployeeService.createEmployee(employee);
        navigate("/");
    };

    return (
        <div className="container">
            <h2>Add Employee</h2>
            <form onSubmit={saveEmployee}>
                <input name="firstName" value={employee.firstName} onChange={handleChange} placeholder="FirstName" className="form-control mb-2" />
                <input name="lastName" value={employee.lastName} onChange={handleChange} placeholder="LastName" className="form-control mb-2" />
                <input name="email" value={employee.email} onChange={handleChange} placeholder="Email" className="form-control mb-2" />
                <button className="btn btn-success">Save</button>
            </form>
        </div>
    );
}

export default AddEmployee;
