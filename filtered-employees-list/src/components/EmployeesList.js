import React, { useState } from "react";

function EmployeesList({ employees }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filterMethod = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <React.Fragment>
      <div className="controls">
        <input
          type="text"
          className="filter-input"
          data-testid="filter-input"
          onChange={filterMethod}
        />
      </div>
      <ul className="employees-list">
        {employees.map((employee) => {
          if (employee.name.toLowerCase().includes(searchTerm)) {
            return (
              <li key={employee.name} data-testid="employee">
                {employee.name}
              </li>
            );
          }
          return null;
        })}
      </ul>
    </React.Fragment>
  );
}

export default EmployeesList;
