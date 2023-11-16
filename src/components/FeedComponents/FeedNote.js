import { MdPublic } from "react-icons/md";

const FeedNote = ({ title, content, visibility, date }) => {
  const isVisibilityChecked = visibility === "1";
  return (
    <div className="note">
      <div className="note-header">
        <div className="note-title">
          <span>{title}</span>
        </div>
        <div>{!isVisibilityChecked && <MdPublic size="1.3em" />}</div>
      </div>
      <div className="note-content">
        <span>{content}</span>
      </div>
      <div className="note-footer">
        <small>{date}</small>
      </div>
    </div>
  );
};

export default FeedNote;
