const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

const API_URL = 'http://localhost:3000/tracks';

export const index = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch tracks');
  return response.json();
};

export const create = async (track) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(track),
  });
  if (!response.ok) throw new Error('Failed to create track');
  return response.json();
};

export const updateTrack = async (track, trackId) => {
  const response = await fetch(`${API_URL}/${trackId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(track),
  });
  if (!response.ok) throw new Error('Failed to update track');
  return response.json();
};

export const deleteTrack = async (trackId) => {
  const response = await fetch(`${API_URL}/${trackId}`, { method: 'DELETE' });
  if (!response.ok) throw new Error('Failed to delete track');
  return response.json();
};