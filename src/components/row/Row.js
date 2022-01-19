import {useEffect, useState, Fragment} from "react";
import './Row.css';
import Button from '../button/Button';

function Row(props) {
    const [rows, setRows] = useState([]);

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

    return (
        <tbody className="table-body">
            {rows.map(row => (
                <Fragment key={row.id}>
                    <tr>
                        <th>{row.userId}</th>
                        <th>{row.id}</th>
                        <th>{row.title}</th>
                        <th>{row.body}</th>
                        <th><Button /></th>
                    </tr>
                </Fragment>
            ))}
        </tbody>
    );
}

export default Row;