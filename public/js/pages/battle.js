import SpotifyAPI from "../api/spotify.js";
import {getHashParams} from "../helpers/url.js";
import {STATE_KEY} from "../helpers/constants.js";

const {access_token, state} = getHashParams();
const storedState = localStorage.getItem(STATE_KEY);

var artist1 = null;
var artist2 = null;

if (!access_token || (state == null || state !== storedState)) {
  window.location = "/";
}

/*========================= Geting Data of First Artist =============================*/

const getArtistOne = document.getElementById('search-btn-one');
const artistImageOne = document.querySelector("#artist-one img");
const artistNameOne = document.querySelector("#artist-one .artist-name");
const searchArtistOne = document.getElementById('search-box-one');

getArtistOne.addEventListener('click', async () => {
  const artistOne = document.getElementById('search-txt-one').value;
  artist1 = await SpotifyAPI.getArtist(access_token, artistOne);
  artistImageOne.src = artist1.images[0].url;
  artistNameOne.innerHTML = artist1.name; 
  searchArtistOne.reset();
  searchArtistOne.style.display = "none";
});

/*========================= Geting Data of Secend Artist =============================*/

const getArtistTwo = document.getElementById('search-btn-two');
const artistImageTwo = document.querySelector("#artist-two img");
const artistNameTwo = document.querySelector("#artist-two .artist-name");
const searchArtistTwo = document.getElementById('search-box-two');
 
getArtistTwo.addEventListener('click', async () => {
  const artistTwo = document.getElementById('search-txt-two').value;
  artist2 = await SpotifyAPI.getArtist(access_token, artistTwo);
  artistImageTwo.src = artist2.images[0].url;
  artistNameTwo.innerHTML = artist2.name;
  searchArtistTwo.reset();
  searchArtistTwo.style.display = "none";
});

/*======================== Compering Artists ====================================*/

 const getBattle = document.getElementById('battle-button');
 const container = document.getElementById("container-two");
 const winner = document.getElementById("winner");
 const winnerName = document.querySelector('#winner .artist-name');
 const winnerImage = document.querySelector("#winner img");
 const winnerFallowers = document.querySelector('#winner .fallowers');
 const logo = document.getElementById('logo');
 
 getBattle.addEventListener('click', () => {
  if(artist1 === null || artist2 === null) {
    swal({title: "Please Add The Artists"});
    return getBattle;
  }

  if(artist1.followers.total > artist2.followers.total) {
    winnerImage.src = artist1.images[0].url;
    winnerName.innerHTML = artist1.name;
    winnerFallowers.innerHTML = artist1.followers.total; 
  }
  else {
    winnerImage.src = artist2.images[0].url;
    winnerName.innerHTML = artist2.name;
    winnerFallowers.innerHTML = artist2.followers.total; 
  }
 
  container.style.display = "none";
  backToBattle.style.display = "block";
  logo.style.display = "none";
  winner.style.display = "block";
  artistImageOne.src = "../img/spartan-one.png"; 
  artistImageTwo.src = "../img/spartan-two.png";
  artistNameOne.innerHTML = "";
  artistNameTwo.innerHTML = "";  
  artist1 = null;
  artist2 = null;
});

/*=================== Back To The Buttle Again ======================*/

const backToBattle = document.getElementById('back-button');

backToBattle.addEventListener('click', () => {
  backToBattle.style.display = "none";
  container.style.display = "block";
  logo.style.display = "block";
  winner.style.display = "none";
  winnerImage.src = "";
  winnerName.innerHTML = "";
  winnerFallowers.innerHTML = "";
  searchArtistOne.style.display = "block";
  searchArtistTwo.style.display = "block";
});

