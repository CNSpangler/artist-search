export const fetchArtistData = (artistName) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistName}&fmt=json`)
    .then(res => res.artists.json())
    .then(json => json.artists.map(artist => ({
      artistId: artist.id,
      artistName: artist.name,
      artistBorn: artist.life-span.begin,
      artistDied: artist.life-span.ended
    })))
    .catch(err => console.log(err));
};
