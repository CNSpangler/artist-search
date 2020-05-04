export const fetchArtistData = (artistName) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistName}&fmt=json`)
    .then(res => res.json())
    .then(json => json.artists.map(artist => ({
      artistId: artist.id,
      artistName: artist.name,
      artistBorn: artist.life-span.begin,
      artistDied: artist.life-span.ended
    })))
    .catch(err => console.log(err));
};

export const fetchReleaseData = (artistId) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res => res.json())
    .then(json => json.releases.map(release => ({
      releaseId: release.id,
      releaseTitle: release.title,
      releaseDate: release.date
    })));
};

export const fetchSongs = (releaseId) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`)
    .then(res => res.json())
    .then(json => json.recordings.map(song => ({
      songId: song.id,
      songTitle: song.title,
    })));
};


