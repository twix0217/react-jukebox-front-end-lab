
import React from 'react';

const NowPlaying = ({ track }) => {
  if (!track) return null;

  return (
    <div>
      <h2>Now Playing:</h2>
      <p>Artist: {track.artist}</p>
      <p>Title: {track.title}</p>
    </div>
  );
};

export default NowPlaying;
