import SpotifyAPI from "../api/spotify.js";
import {getHashParams} from "../helpers/url.js";
import {STATE_KEY} from "../helpers/constants.js";

const USER_PROFILE = document.getElementById('user-profile');
const {access_token, state} = getHashParams();
const storedState = localStorage.getItem(STATE_KEY);

var artist1 = null;
var artist2 = null;

if (!access_token || (state == null || state !== storedState)) {
  window.location = "/";
}


const getArtistOne = document.getElementById('search-btn-one');

getArtistOne.addEventListener('click', async () => {
  const artistOne = document.getElementById('search-txt-one').value;
  artist1 = await SpotifyAPI.getArtist(access_token, artistOne);
  const artistImage = document.querySelector("#artist-one img");
  artistImage.src = artist1.images[0].url;
  const artistName = document.querySelector("#artist-one .artist-name");
  artistName.innerHTML = artist1.name; 
});

const getArtistTwo = document.getElementById('search-btn-two');
 
getArtistTwo.addEventListener('click', async () => {
  const artistTwo = document.getElementById('search-txt-two').value;
  artist2 = await SpotifyAPI.getArtist(access_token, artistTwo);
  const artistImage = document.querySelector("#artist-two img");
  artistImage.src = artist2.images[0].url;
  const artistName = document.querySelector("#artist-two .artist-name");
  artistName.innerHTML = artist2.name;
});

const getBattle = document.getElementById('battle-button');

getBattle.addEventListener('click', () => {
  if(artist1 === null && artist2 === null) {
    alert( "Please fill two artists");
  }
  if(artist1.followers.total > artist2.followers.total ? artist1 : artist2) {
    return artist1.followers.total > artist2.followers.total;
  }
});



