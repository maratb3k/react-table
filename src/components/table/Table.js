import Row from "../row/Row";
import './Table.css';


function Table(props) {

    return (
        <div className="table">
            <form>
                <table>
                    <thead className="tableHead">
                        <tr>
                            <th>userId</th>
                            <th>№</th>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <Row rows={props.rows} setRows={props.setRows} 
                        isEditMode={props.isEditMode} setIsEditMode={props.setIsEditMode} 
                        forChangingData={props.forChangingData}
                        editFormData={props.editFormData} setEditFormData={props.setEditFormData}
                        editId={props.editId} setEditId={props.setEditId} forSavingEdit={props.forSavingEdit}
                        deleteRowButton={props.deleteRowButton}
                    />
                </table>
            </form>
        </div>
    );
}

export default Table;