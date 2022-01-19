import './Button.css';
import {useState} from 'react';

function Button() {
    const [isEditMode, setIsEditMode] = useState(false); 

    return (
        <div className="app-button">
            {(!isEditMode) ? 
                <div className="app-button">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            :
                <button>Save</button>
            }
            
        </div>
    );
}

export default Button;
