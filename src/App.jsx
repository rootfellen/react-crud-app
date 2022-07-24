import { useState } from "react";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: null,
    country: "",
    position: "",
    wage: null,
  });

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
        age: null,
        country: "",
        position: "",
        wage: null,
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
        <button>Add employee</button>
      </form>
    </div>
  );
}

export default App;
