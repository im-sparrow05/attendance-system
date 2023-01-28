import React,{ useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreatArea from "./creatArea";
import Noteheader from "./nHeader";




function App(){
    const [notes, setNotes] = useState([]);
    function addNote(newNote){
        setNotes(prevNotes => {
            return [...prevNotes,newNote];
        });
    }
    function deleteNote(Id){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem,index) =>{
                return index !== Id;
            });
        });
    }
    return ( 
    <div>
        <Header />
        
        <CreatArea 
        onAdd = {addNote}
        />
        <Noteheader />
        {notes.map((noteItem, index) =>{
            return<Note 
            key = {index}
            Id = {index}
            title ={noteItem.title}
            content = {noteItem.content}
            inTime = {noteItem.inTime}
            outTime = {noteItem.outTime}
            onDelete = {deleteNote}
            

            />
        })}
        <Footer />
    </div>
    );
}

export default App;