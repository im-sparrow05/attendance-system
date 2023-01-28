import React,{ useState } from "react";
import AddIcon from '@mui/icons-material/Add';
function CreatArea(props){
    const [strength,setStrength] = useState(0);

    const [note,setNote] = useState({
        title: "",
        content: "",
        inTime: "",
        outTime: ""
    });
    function handleChange(event){
        const {name,value} = event.target ;
        setNote(prevNote =>{
            return {
            ...prevNote,
            [name] : value
            
        };});
    }
    function summitNote(event){
        setStrength(strength+1);


        event.preventDefault();
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
            inTime: "",
            outTime: ""
        });

    }
    
    return (
    <div>
        <div className="strength">Class Strength : {strength}</div>
        <form className="create-note">
            {<input name="title" onChange={handleChange} value={note.title} placeholder="Name" />}
            <textarea name="content" onChange={handleChange} value={note.content} placeholder="Roll Number" rows="1" />
            <field className="check_in">
            <label for="appt">In Time :</label>
            <label for="appt">Out Time :</label>
            <input type="time" onChange={handleChange} value={note.inTime} id="appt" placeholder="check-in" name="inTime"/>
            <input type="time" onChange={handleChange} value={note.outTime} id="appt" placeholder="check-in" name="outTime" />
            </field>
            <button onClick={summitNote}>
                <i class="fa-solid fa-plus fa-xl"></i></button>
        </form>
    </div>
        );
}

export default CreatArea;