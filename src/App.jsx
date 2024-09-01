import React, { useState, useEffect } from 'react';
import { index, create, updateTrack, deleteTrack } from './services/trackService';
import TrackList from './components/TrackList';
import TrackForm from './components/TrackForm';
import TrackDetails from './components/TrackDetails';
import NowPlaying from './components/NowPlaying'; // Import NowPlaying

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    fetchTracks();
  }, []);

  const fetchTracks = async () => {
    try {
      const data = await index();
      setTracks(data);
    } catch (error) {
      console.error('Error fetching tracks:', error);
    }
  };

  const handleCreateTrack = async (newTrack) => {
    try {
      const createdTrack = await create(newTrack);
      setTracks([...tracks, createdTrack]);
      setIsFormOpen(false);
      setSelectedTrack(createdTrack);
    } catch (error) {
      console.error('Error creating track:', error);
    }
  };

  const handleUpdateTrack = async (updatedTrack) => {
    try {
      const track = await updateTrack(updatedTrack, selectedTrack._id);
      setTracks(tracks.map(t => (t._id === track._id ? track : t)));
      setSelectedTrack(track);
      setIsFormOpen(false);
    } catch (error) {
      console.error('Error updating track:', error);
    }
  };

  const handleDeleteTrack = async (trackId) => {
    try {
      await deleteTrack(trackId);
      setTracks(tracks.filter(t => t._id !== trackId));
      setSelectedTrack(null);
    } catch (error) {
      console.error('Error deleting track:', error);
    }
  };

  const handleFormView = (track = null) => {
    setSelectedTrack(track);
    setIsFormOpen(!isFormOpen);
  };

  const handlePlayTrack = (track) => {
    setNowPlaying(track);
  };

  return (
    <div>
      <h1>React Jukebox</h1>
      <NowPlaying track={nowPlaying} /> 
      <TrackList
        trackList={tracks}
        updateSelected={setSelectedTrack}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
        handlePlayTrack={handlePlayTrack} 
      />
      {isFormOpen && (
        <TrackForm
          selectedTrack={selectedTrack}
          handleCreateTrack={handleCreateTrack}
          handleUpdateTrack={handleUpdateTrack}
        />
      )}
      <TrackDetails
        selected={selectedTrack}
        handleFormView={handleFormView}
        handleRemoveTrack={handleDeleteTrack}
      />
    </div>
  );
};

export default App;
