const TrackDetails = (props) => {
  if (!props.selected) {
    return <h2>No details to display</h2>;
  }

  return (
    <div>
      <h1>{props.selected.title}</h1>
      <h2>Artist: {props.selected.artist}</h2>
      <button onClick={() => props.handleFormView(props.selected)}>Edit</button>
      <button onClick={() => props.handleRemoveTrack(props.selected._id)}>Delete Track</button>
    </div>
  );
};

export default TrackDetails;
