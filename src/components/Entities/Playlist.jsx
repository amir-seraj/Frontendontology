import JsonLd from "../JsonLd";

const Playlist = ({ playlist }) => {
  const jsonData = {
    "@context": {
      schema: "http://schema.org/",
      hiphop: "https://your-username.github.io/HipHopOntology/hiphop.jsonld#",
    },
    "@type": "schema:MusicPlaylist",
    "schema:name": playlist.name,
    "schema:numTracks": playlist.numTracks,
    "schema:track": playlist.tracks.map((track) => ({
      "@type": "schema:MusicRecording",
      "schema:name": track.title,
      "schema:byArtist": {
        "@type": "schema:MusicGroup",
        "schema:name": track.artist,
      },
    })),
  };

  return (
    <div className="Playlist">
      <JsonLd data={jsonData} />
      <h2>{playlist.name}</h2>
      <p>Number of Tracks: {playlist.numTracks}</p>
      <div>
        {playlist.tracks.map((track, index) => (
          <div key={index}>
            <p>
              {track.title} by {track.artist}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
