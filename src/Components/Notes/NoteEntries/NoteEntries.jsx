import { useSelector } from "react-redux";

import NoteEntry from "../NoteEntry";

const NotesEntries = () => {
    const {notes} = useSelector(state => state?.note ?? []);

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