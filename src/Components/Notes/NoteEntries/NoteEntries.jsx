import { useSelector } from "react-redux";

import NoteEntry from "../NoteEntry";

const NotesEntries = () => {
    const {notes} = useSelector(state => state?.note ?? []);
    
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                notes.map((item) => (
                    <NoteEntry 
                        key={item._id} 
                        id={item._id}
                        item={item}
                    />
                ))
            }
        </div>
    );
}

export default NotesEntries;