import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){
    function handleDelete(){
        props.onDelete(props.Id);
    }
    return (
    <div className="data">
    <div className="note"><div>{props.content}</div><div>{props.title}</div><div>{props.inTime}</div><div>{props.outTime}</div>
    <button onClick={handleDelete}><DeleteIcon /></button>
    </div>
    </div>
    );
}

export default Note;