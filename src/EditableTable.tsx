import React, { useState } from 'react';

const EditableTable = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 },
  ]);

  const handleEdit = (id, field, value) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>
              <input
                type="text"
                value={item.name}
                onChange={(e) => handleEdit(item.id, 'name', e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                value={item.age}
                onChange={(e) => handleEdit(item.id, 'age', e.target.value)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default EditableTable;
