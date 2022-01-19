import "./AddRow.css";

function AddRow() {
    return (
        <div className="addRow">
            <form className="add-form">
                <div className="add-inputs">
                    <div className="add-input-num">
                        <label for="userId">UserId</label>
                        <input type="text" name="userId" />
                    </div>

                    <div className="add-input-num">
                        <label for="№">№</label>
                        <input type="text" name="№" />
                    </div>

                    <div className="add-input">
                        <label for="title">Title</label>
                        <input type="text" name="title" />
                    </div>

                    <div className="add-input">
                        <label for="description">Description</label>
                        <input type="text" name="description" />
                    </div>

                    <div className="add-input-button">
                        <button>Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddRow;