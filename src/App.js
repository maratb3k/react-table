import './App.css';
import Table from './components/table/Table';
import AddRow from './components/addRow/AddRow';
import {useState} from 'react';

function App() {
  // const [isEditMode, setIsEditMode] = useState(false);
  const [rows, setRows] = useState([]);
  const [editId, setEditId] = useState(null); 
  const [addFormData, setAddFormData] = useState({
    userId: null,
    id: null,
    title: "",
    body: ""
  });
  const [editFormData, setEditFormData] = useState({
    userId: null,
    id: null,
    title: "",
    body: ""
  });


  const forChangingData = (event, mode) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    if(mode === "add") {
      const newFormData = { ...addFormData};
      newFormData[fieldName] = fieldValue;
      setAddFormData(newFormData);
    }
    else if(mode === "edit") {
      const newFormData = { ...editFormData};
      newFormData[fieldName] = fieldValue;
      setEditFormData(newFormData);
    } 
  }

  const forSavingEdit = (event) => {
    event.preventDefault();
    const editedData = {
      userId: editFormData.userId,
      id: editId,
      title: editFormData.title,
      body: editFormData.body
    }
    const newRows = [...rows];
    const found = rows.findIndex(row => row.id === editId);
    newRows[found] = editedData;
    setRows(newRows);
    setEditId(null);
  }

  const deleteRowButton = (deletedRow) => {
    const newRows = [...rows];
    const ind = rows.findIndex(row => row.id === deletedRow.id);
    newRows.splice(ind, 1);
    setRows(newRows);
  }

  return (
    <div className="App">
      <AddRow addFormData={addFormData} setAddFormData={setAddFormData} rows={rows} setRows={setRows} 
        forChangingData={forChangingData} 
      />
      <Table rows={rows} setRows={setRows} editFormData={editFormData} setEditFormData={setEditFormData} 
        forChangingData={forChangingData} editId={editId} setEditId={setEditId} forSavingEdit={forSavingEdit}
        deleteRowButton={deleteRowButton}
      />
    </div>
  );
}

export default App;
