import "./AddRow.css";


function AddRow(props) {
    const {addFormData, setAddFormData, rows, setRows, forChangingData} = props;

    const getNewData = (event) => {
        // event.preventDefault();

        // const fieldName = event.target.getAttribute("name");
        // const fieldValue = event.target.value;

        // const newFormData = { ...addFormData};
        // newFormData[fieldName] = fieldValue;
        // setAddFormData(newFormData);
        forChangingData(event, "add");
    };

    const addNewDataButton = (event) => {
        event.preventDefault();
        const found = rows.find(row => row.id == addFormData.id);
        if(found != undefined) {
            alert("You already have the row with this ID!!!")
        }
        else {
            const newRows = [ ...rows, addFormData];
            setRows(newRows);
        }
    };
    
    return (
        <div className="addRow">
            <form className="add-form">
                <div className="add-inputs">
                    <div className="add-input-num">
                        <label htmlFor="userId">UserId</label>
                        <input type="text" name="userId" onChange={getNewData} />
                    </div>

                    <div className="add-input-num">
                        <label htmlFor="id">ID</label>
                        <input type="text" name="id" onChange={getNewData} />
                    </div>

                    <div className="add-input">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" onChange={getNewData} />
                    </div>

                    <div className="add-input">
                        <label htmlFor="body">Description</label>
                        <input type="text" name="body" onChange={getNewData} />
                    </div>

                    <div className="add-input-button">
                        <button onClick={addNewDataButton}>Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddRow;