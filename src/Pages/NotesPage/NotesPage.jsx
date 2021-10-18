import { useSelector } from "react-redux";

import Modal        from "../../Components/ui/Modal";
import AddBtn       from "../../Components/Notes/AddBtn";
import NotesEntries from "../../Components/Notes/NoteEntries";

const NotesPage = () => {
    const { show } = useSelector(state => state.ui);

    return (
        <>
            <div style={{ padding : "20px" }}>
                <AddBtn />
                <NotesEntries />
            </div>
            { show &&
                <Modal />
            }
        </>
    );
};
export default NotesPage;
