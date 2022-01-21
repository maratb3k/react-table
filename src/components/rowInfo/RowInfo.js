import './RowInfo.css';

function RowInfo({row, editRow, deleteRowButton}) { 

    // const deleteRowButton = (rowId) => {
    //     const newRows = [ ...rows];

    //     const ind = newRows.findIndex(row => row.id === rowId);
    //     newRows.splice(ind, 1);
    //     setRows(newRows);
    // };
    
    return (
        <tr>
            <th>{row.userId}</th>
            <th>{row.id}</th>
            <th>{row.title}</th>
            <th>{row.body}</th>
            <th>
                <button onClick={(event) => editRow(event, row)}>Edit</button>
            </th>
            <th>
                <button onClick={(row) => deleteRowButton(row)}>Delete</button>
            </th>
        </tr>
    );
}

export default RowInfo;
