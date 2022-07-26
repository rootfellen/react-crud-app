import { useState, useEffect } from "react";
import Axios from "axios";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    country: "",
    position: "",
    wage: "",
  });

  const [employeeList, setEmployeeList] = useState([]);

  function addEmployee() {
    Axios.post("http://localhost:3000/create", { formData }).then(() => {
      console.log("Success");
    });
  }

  function getEmployees() {
    Axios.get("http://localhost:3000/employees").then((response) => {
      setEmployeeList(response.data);
    });
  }

  function handleChange(e) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormData((prevData) => {
      return {
        ...prevData,
        name: "",
        age: "",
        country: "",
        position: "",
        wage: "",
      };
    });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="information">
        <label>Name:</label>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Age:</label>
        <input
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
        />
        <label>Country:</label>
        <input
          name="country"
          type="text"
          value={formData.country}
          onChange={handleChange}
        />
        <label>Position:</label>
        <input
          name="position"
          type="text"
          value={formData.position}
          onChange={handleChange}
        />
        <label>Wage (year):</label>
        <input
          name="wage"
          type="number"
          value={formData.wage}
          onChange={handleChange}
        />
        <button onClick={addEmployee}>Add employee</button>
        <button onClick={getEmployees}>Show Employee</button>
        {employeeList.map((emp) => {})}
      </form>
      <div>
        {employeeList.map((emp) => {
          return (
            <div key={emp.id}>
              <h3>{emp.name}</h3>
              <p>{emp.country}</p>
              <p>{emp.age}</p>
              <p>{emp.position}</p>
              <p>{emp.wage}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
