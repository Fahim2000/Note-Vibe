import { useState } from "react";
import "../App.css";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200

  const handleChange = (e) => {
    // console.log(e.target.value);
    if(characterLimit - e.target.value.length >=0){
        setNoteText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="bg-[#67d7cc] rounded p-3 flex flex-col justify-between min-h-44">
      <textarea
        className="bg-[#67d7cc]"
        rows="8"
        cols="10"
        placeholder="Type to add a note"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="flex items-center justify-between">
        <small className="text-[18px] font-medium">{characterLimit - noteText.length} characters remaining</small>
        <button
          onClick={handleSaveClick}
          className="bg-[#e1e1e1] rounded-full py-2 px-6"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
