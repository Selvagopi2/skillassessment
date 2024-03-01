import React, { useState, useEffect } from 'react';
import { ref, get } from 'firebase/database';
import database from '../firebaseConfig';
import  Table  from 'react-bootstrap/Table';
import  Dropdown  from 'react-bootstrap/Dropdown';

const EmployeeDataFetcher = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const dataRef = ref(database, 'employeesdata');
    get(dataRef).then((snapshot) => {
      if (snapshot.exists()) {
        const usersArray = Object.entries(snapshot.val()).map(([id, data]) => ({
          id,
          ...data,
        }));
        setEmployeeData(usersArray);
      } else {
        console.log('No data available')
      }
    }).catch((error) => {
      console.error(error)
    })
  }, []);

  const handleRowsPerPageChange = (rows) => {
    setRowsPerPage(rows);
  };

  return (
    <div>
      <h1>Employees Data</h1>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Number of Rows
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleRowsPerPageChange(5)}>5</Dropdown.Item>
        <Dropdown.Item onClick={() => handleRowsPerPageChange(10)}>10</Dropdown.Item>
        <Dropdown.Item onClick={() => handleRowsPerPageChange(15)}>15</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Experience</th>
            <th>Coding Software</th>
            <th>Area of Interest</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.slice(0, rowsPerPage).map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.experience}</td>
              <td>{employee.codingsoftware}</td>
              <td>{employee.areaofinterest}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeDataFetcher;



