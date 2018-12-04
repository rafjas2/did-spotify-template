const getUserData = (accessToken) => {
  return fetch(`https://api.spotify.com/v1/me`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
  }).then(response => response.json())
};

export default {
  getUserData
}

const getArtistsData = (accessToken) => {
  return fetch(`https://api.spotify.com/v1/search`, {
      headers: {
        'Authorization': `Bearer ${BQAZQGPWn5m3mAMbOFPZXUgl-ZilnevObBB_RCE865RGQ2i3uRHIQoSTfyPKizeG39VTFE15on7OuiB3peLQMCl31aStTkArTaGvMUpx-IrwZI9hwEKT-g18ceZN1X9b1BQetGHLXoOHXQ2Zbsv69zVpvabNbBWC6rBktw}`
      }
  }).then(response => response.json())
};

export default {
  getArtistsData
}