import FeedNote from "./FeedNote";

const FeedList = ({
	notes,
}) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<FeedNote
					id={note.id}
					title={note.title}
					content={note.content}
					visibility={note.visibility}
					date={note.updated_at}
				/>
			))}
		</div>
	);
};

export default FeedList;