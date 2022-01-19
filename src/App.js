import './App.css';
import Table from './components/table/Table';
import AddRow from './components/addRow/AddRow';
import {useState} from 'react';

function App() {
  const [rows, setRows] = useState([]);
  const [addFormData, setAddFormData] = useState({
    userId: 0,
    id: 0,
    title: "",
    body: ""
  });

  return (
    <div className="App">
      <AddRow addFormData={addFormData} setAddFormData={setAddFormData} rows={rows} setRows={setRows} />
      <Table rows={rows} setRows={setRows} />
    </div>
  );
}

export default App;
