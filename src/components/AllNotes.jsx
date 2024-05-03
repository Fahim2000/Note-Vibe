import AddNote from "./AddNote";
import Note from "./Note";

const AllNotes = ({ notes, handleAddNote, handeleNote }) => {
  return (
    <>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        {notes.map((note) => (
          <Note note={note} handeleNote={handeleNote}></Note>
        ))}
        <AddNote handleAddNote={handleAddNote}></AddNote>
      </div>
    </>
  );
};

export default AllNotes;