import JsonLd from "../JsonLd";

const Playlist = ({ playlist }) => {
  const jsonData = {
    "@context": {
      schema: "http://schema.org/",
      hiphop: "https://amir-seraj.github.io/HipHopOntology/hiphop.jsonld#",
    },
    "@type": "hiphop:Playlist",
    "hiphop:name": playlist.name,
    "hiphop:date_published": playlist.datePublished,
    "hiphop:num_tracks": playlist.numTracks,
    "hiphop:main_entity": playlist.tracks.map((track) => ({
      "@type": "hiphop:Track",
      "hiphop:name": track.name,
      "hiphop:artist": {
        "@type": "hiphop:Artist",
        "hiphop:name": track.artist,
      },
    })),
  };

  return (
    <div className="Playlist">
      <JsonLd data={jsonData} />
      <h2>{playlist.name}</h2>
      <p>Date Published: {playlist.datePublished}</p>
      <p>Number of Tracks: {playlist.numTracks}</p>
      <ul>
        {playlist.tracks.map((track, index) => (
          <li key={index}>
            {track.name} by {track.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
