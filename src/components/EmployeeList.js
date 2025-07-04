// src/components/EmployeeList.js
import React, { useEffect, useState } from 'react';
import EmployeeService from './EmployeeService';
import { Link } from 'react-router-dom';

function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        try {
            const res = await EmployeeService.getAllEmployees();
            setEmployees(res.data);
            setError('');
        } catch (err) {
            setError('Failed to load employees');
            console.error('Error loading employees:', err);
        }
    };

    const deleteEmployee = async (id) => {
        if (window.confirm('Are you sure you want to delete this employee?')) {
            try {
                await EmployeeService.deleteEmployee(id);
                await loadEmployees();
                alert('Employee deleted successfully!');
            } catch (err) {
                setError('Failed to delete employee');
                console.error('Error deleting employee:', err);
            }
        }
    };

    return (
        <div className="container">
            <h2>Employee List</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <Link to="/create" className="btn btn-primary mb-2">Add Employee</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.email}</td>
                            <td>
                                <Link to={`/update/${emp.id}`} className="btn btn-info btn-sm me-2">Edit</Link>
                                <button
                                    onClick={() => deleteEmployee(emp.id)}
                                    className="btn btn-danger btn-sm">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;
