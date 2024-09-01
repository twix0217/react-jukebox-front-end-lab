
import React from 'react';

const TrackList = ({ trackList, updateSelected, handleFormView, isFormOpen, handlePlayTrack }) => {
  const tracks = (trackList || []).map((track) => (
    <li key={track._id}>
      <span>{track.title} by {track.artist}</span>
      <button onClick={() => updateSelected(track)}>Edit</button>
      <button onClick={() => deleteTrack(track._id)}>Delete</button>
      <button onClick={() => handlePlayTrack(track)}>Play</button> 
    </li>
  ));

  return (
    <div>
      <h2>Track List</h2>
      {!trackList || !trackList.length ? (
        <h2>No Tracks Yet!</h2>
      ) : (
        <ul>{tracks}</ul>
      )}
      <button onClick={handleFormView}>
        {isFormOpen ? 'Close Form' : 'New Track'}
      </button>
    </div>
  );
};

export default TrackList;
