const getArtist = (accessToken, q) => {
  return fetch(`https://api.spotify.com/v1/search?query=${q}&type=artist&market=IE&offset=0&limit=1`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
  }).then(response => response.json())
    .then(data => data.artists.items[0]);
};

export default {
  getArtist
}