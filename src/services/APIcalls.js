// returns array of artists
export const fetchArtistData = (searchedArtist) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchedArtist}&fmt=json&limit=25`)
    .then(res => res.json())
    .then(json => json.artists.map(artist => ({
      artistId: artist.id,
      artistName: artist.name,
      artistBorn: artist['life-span'].begin,
      artistDied: artist['life-span'].ended
    })))
    .catch(err => console.log(err));
};

// returns array of releases
export const fetchReleaseData = (artistId) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res => res.json())
    .then(json => json.releases.map(release => ({
      releaseId: release.id,
      releaseTitle: release.title,
      releaseDate: release.date
    })))
    .catch(err => console.log(err));
};

// returns array of songs
export const fetchSongs = (releaseId) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`)
    .then(res => res.json())
    .then(json => json.recordings.map(song => ({
      songId: song.id,
      songTitle: song.title,
    })))
    .catch(err => console.log(err));
};

// returns object with lyrics: "fa la la la la"
export const fetchLyrics = (artistName, songTitle) => {
  return fetch(`https://api.lyrics.ovh/v1/${artistName}/${songTitle}`)
    .then(res => res.lyrics)
    .catch(err => console.log(err));
};
