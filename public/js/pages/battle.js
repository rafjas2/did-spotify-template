import SpotifyAPI from "../api/spotify.js";
import {getHashParams} from "../helpers/url.js";
import {STATE_KEY} from "../helpers/constants.js";

const USER_PROFILE = document.getElementById('user-profile');
const {access_token, state} = getHashParams();
const storedState = localStorage.getItem(STATE_KEY);


const outputTemplate = ({display_name, id, email, uri, external_urls, images, country}) =>`<h1>Logged in as </h1>
  <div class="media">
    <div class="pull-left">
      <img class="media-object" width="150" src="">
    </div>
    <div class="media-body">
      <dl class="dl-horizontal">
        <dt>Display name</dt><dd class="clearfix">${display_name}</dd>
        <dt>Id</dt><dd>${id}</dd>
        <dt>Email</dt><dd>${email}</dd>
        <dt>Spotify URI</dt><dd><a href="${uri}">${uri}</a></dd>
        <dt>Link</dt><dd><a href="${external_urls.spotify}">${external_urls.spotify}</a></dd>
        <dt>Profile Image</dt><dd class="clearfix"><a href=""></a></dd>
        <dt>Country</dt><dd>${country}</dd>
      </dl>
    </div>
  </div>`


if (!access_token || (state == null || state !== storedState)) {
  window.location = "/";
} else {
  SpotifyAPI.getUserData(access_token).then(data => {
    USER_PROFILE.innerHTML = outputTemplate(data);
  });
}

const ARTIST_PROFILE = document.getElementById('search-btn-one');

ARTIST_PROFILE.addEventListener('click', () => {
  const artistOne = document.getElementById('search-txt-one').value;
  alert(artistOne);
  });

const artistTemplate = ({display_name, id, images}) =>`<h1>Logged in as </h1>
<div class="media">
  <div class="pull-left">
    <img class="media-object" width="150" src="">
  </div>
  <div class="media-body">
    <dl class="dl-horizontal">
      <dt>Display name</dt><dd class="clearfix">${display_name}</dd>
      <dt>Id</dt><dd>${id}</dd>
      <dt>Spotify URI</dt><dd><a href="${uri}">${uri}</a></dd>
    </dl>
  </div>
</div>`



if (!access_token || (state == null || state !== storedState)) {
  window.location = "/";
} else {
  SpotifyAPI.getArtistsData(access_token).then(data => {
    ARTIST_PROFILE.innerHTML = artistTemplate(data);
  });
}





 
getArtistOne.addEventListener('click', () => {
                        const artistOne = document.getElementById('search-txt-one').value;
                        alert(artistOne);
                        });

const getArtistTwo = document.getElementById('search-btn-two');
 
getArtistTwo.addEventListener('click', () => {
                        const artistTwo = document.getElementById('search-txt-two').value;
                        alert(artistTwo);
                        });


// function getArtist() {
//   fetch('https://api.spotify.com/v1/search')
//   .then((res) => res.json())
//   .then((data) => {
//     let output = '<h3>Artists</h3>';
//     console.log(data);
//   })
// }

