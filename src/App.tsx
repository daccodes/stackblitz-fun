import * as React from 'react';
import EditableTable from './EditableTable';
import './style.css';

export default function App() {
  const frameworks = [
    { name: 'React', logo: 'react-logo.png' },
    { name: 'Vue.js', logo: 'vue-logo.png' },
    { name: 'Angular', logo: 'angular-logo.png' },
    // Add more frameworks and their respective logos here
  ];
  return (
    <div className="App">
      <h1>Latest Frontend JavaScript Frameworks</h1>
      <div className="frameworks-container">
        {frameworks.map((framework, index) => (
          <div className="framework-panel" key={index}>
            <img src={`./${framework.logo}`} alt={framework.name} />
            <h2>{framework.name}</h2>
          </div>
        ))}
      </div>
      <EditableTable />
    </div>
  );
}
