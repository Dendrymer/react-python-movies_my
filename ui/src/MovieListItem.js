export default function MovieListItem(props) {
    return (
        <div>
            <div>
                <strong>{props.movie.title}</strong>
                {' '}
                <span>({props.movie.year})</span>
                {' '}
                directed by {props.movie.director}
                {' '}
                <a onClick={props.onDelete}>Delete</a>
            </div>
            {props.movie.description}
            {props.movie.actors && props.movie.actors.trim() !== "" && (
                <div style={{ marginTop: "5px" }}>
                    <strong>Actors:</strong> {props.movie.actors}
                </div>
            )}

        </div>
    );
}
