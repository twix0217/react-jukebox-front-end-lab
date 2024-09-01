import React, { useState, useEffect } from 'react';

const TrackForm = ({ selectedTrack, handleCreateTrack, handleUpdateTrack }) => {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
  });

  useEffect(() => {
    if (selectedTrack) {
      setFormData({ title: selectedTrack.title || '', artist: selectedTrack.artist || '' });
    } else {
      setFormData({ title: '', artist: '' });
    }
  }, [selectedTrack]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTrack && selectedTrack._id) {
      handleUpdateTrack(formData, selectedTrack._id);
    } else {
      handleCreateTrack(formData);
    }
    setFormData({ title: '', artist: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Track Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Artist:
        <input
          type="text"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">{selectedTrack ? 'Update Track' : 'Add Track'}</button>
    </form>
  );
};


export default TrackForm;
