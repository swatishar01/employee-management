// src/components/UpdateEmployee.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeService from './EmployeeService';

function UpdateEmployee() {
    const [employee, setEmployee] = useState({ firtName: "",lastName: "", email: "" });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then(res => {
            setEmployee(res.data);
        });
    }, [id]);

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const updateEmployee = async (e) => {
        e.preventDefault();
        await EmployeeService.updateEmployee(id, employee);
        navigate("/");
    };

    return (
        <div className="container">
            <h2>Update Employee</h2>
            <form onSubmit={updateEmployee}>
                <input name="firstName" value={employee.firstName} onChange={handleChange} className="form-control mb-2" />
                <input name="lastName" value={employee.lastName} onChange={handleChange} className="form-control mb-2" />
                <input name="email" value={employee.email} onChange={handleChange} className="form-control mb-2" />
                <button className="btn btn-primary">Update</button>
            </form>
        </div>
    );
}

export default UpdateEmployee;
