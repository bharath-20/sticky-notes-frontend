import { MdDeleteForever, MdEditNote, MdPublic } from "react-icons/md";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Note = ({ id, title, content, visibility, date, handleDeleteNote }) => {
  const isVisibilityChecked = visibility === 1;
  const navigate = useNavigate();
  return (
    <div className="note">
      <div className="note-header">
        <div className="note-title">
          <span>{title}</span>
        </div>
        <div>
          {isVisibilityChecked && <RiGitRepositoryPrivateFill size="1.3em" />}
          {!isVisibilityChecked && <MdPublic size="1.3em" />}
        </div>
      </div>
      <div className="note-content">
        <span>{content}</span>
      </div>
      <div className="note-footer">
        <small>{date}</small>
        <MdEditNote
          onClick={() => navigate('/home/edit', { state: {id :id,title:title,content:content, visibility:visibility} })}
          className="edit-icon"
          size="1.3em"
        />
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
