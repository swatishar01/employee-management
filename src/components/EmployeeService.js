// src/components/EmployeeService.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    }
});

class EmployeeService {
    getAllEmployees() {
        return axiosInstance.get('/api/employees/allEmployees');
    }

    createEmployee(employee) {
        return axiosInstance.post('/api/employees/create', employee);
    }

    getEmployeeById(id) {
        return axiosInstance.get(`/api/employees/${id}`);
    }

    updateEmployee(id, employee) {
        return axiosInstance.put(`/api/employees/update/${id}`, employee);
    }

    deleteEmployee(id) {
        return axiosInstance.delete(`/api/employees/delete/${id}`);
    }
}

export default new EmployeeService();
