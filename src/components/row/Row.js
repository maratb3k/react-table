import {useEffect, Fragment, useState} from "react";
import './Row.css';
import RowInfo from '../rowInfo/RowInfo';
import EditButton from '../editButton/EditButton';

function Row(props) {
    const {rows, setRows, forChangingData, editFormData, setEditFormData, editId, setEditId} = props;

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setRows(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);

    const editRow = (event, row) => {
        event.preventDefault();
        setEditId(row.id);      
        const editValues = {
            userId: row.userId,
            id: row.id,
            title: row.title,
            body: row.body
        };
        setEditFormData(editValues);
    };

    return (
        <tbody className="table-body">
            {rows.map(row => (
                <Fragment key={row.id}>
                    {editId === row.id ? (
                        <EditButton editFormData={editFormData} setEditFormData={setEditFormData} 
                            forChangingData={forChangingData} forSavingEdit={props.forSavingEdit}
                        />
                    ) : (
                        <RowInfo row={row} editRow={editRow} />
                    )}
                </Fragment>
            ))}
        </tbody>
    );
}

export default Row;