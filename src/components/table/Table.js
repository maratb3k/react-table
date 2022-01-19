import Row from "../row/Row";
import './Table.css';


function Table(props) {

    return (
        <div className="table">
            <table>
                <thead className="tableHead">
                    <tr>
                        <th>userId</th>
                        <th>№</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <Row rows={props.rows} setRows={props.setRows} />
            </table>
        </div>
    );
}

export default Table;