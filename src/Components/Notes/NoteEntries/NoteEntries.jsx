import React from "react";

import NoteEntry from "../NoteEntry";

const NotesEntries = () => {
    const notes = [
        {
            title : "Hola",
            body :  "este es un texto para la nota"
        },
        {
            title : "Hola",
            body :  "este es un texto para la nota"
        },
        {
            title : "Hola",
            body :  "este es un texto para la nota"
        },
        {
            title : "Hola",
            body :  "este es un texto para la nota"
        }
    ];

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                notes.map((note, index) => (
                    <NoteEntry 
                        key={index + note.title} 
                        note={note}
                    />
                ))
            }
        </div>
    );
}

export default NotesEntries;