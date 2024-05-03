import { MdDeleteForever } from "react-icons/md";

const Note = ({ note,handeleNote }) => {
  const { id, text, date } = note;
  console.log(note);
  return (
    <div className="bg-[#fef68a] rounded-lg p-3 flex flex-col justify-between min-h-56 w-full">
      <span>{text}</span>

      <div className="flex items-center justify-between">
        <small className="text-[15px] font-medium">{date}</small>
        <MdDeleteForever
        onClick={()=>handeleNote(id)}
          size="1.5em"
          className="cursor-pointer"
        ></MdDeleteForever>
      </div>
    </div>
  );
};

export default Note;
