
function EditButton(props) {

    return (
        <tr>
            <td>
                <input type="text" name="userId" 
                    value={props.editFormData.userId} 
                    onChange={(event) => props.forChangingData(event, "edit")} 
                />
            </td>
            <td>
                <input type="text" name="id" 
                    value={props.editFormData.id} 
                    onChange={(event) => props.forChangingData(event, "edit")} 
                />
            </td>
            <td>
                <input type="text" name="title" 
                    value={props.editFormData.title} 
                    onChange={(event) => props.forChangingData(event, "edit")} 
                />
            </td>
            <td>
                <input type="text" name="body" 
                    value={props.editFormData.body} 
                    onChange={(event) => props.forChangingData(event, "edit")} 
                />
            </td>
            <td>
                <button onClick={(event) => props.forSavingEdit(event)}>Save</button>
            </td>
        </tr>  
    )
}

export default EditButton;