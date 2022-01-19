import './Button.css';

function Button() {
    return (
        <div className="app-button">
            <button>Update</button>
            <button>Delete</button>
            {/* <button onClick={() => deleteItem(items.id)} */}
        </div>
    );
}

export default Button;

