import Modal        from "../../Components/ui/Modal";
import AddBtn       from "../../Components/Notes/AddBtn";
import NotesEntries from "../../Components/Notes/NoteEntries";

const NotesPage = () => {
    return (
        <>
            <div style={{ padding : "20px" }}>
                <AddBtn />
                <NotesEntries />
            </div>
            { false &&
                <Modal />
            }
        </>
    );
};
export default NotesPage;
