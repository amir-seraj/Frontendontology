import JsonLd from "../JsonLd";

const Album = ({ album }) => {
  const jsonData = {
    "@context": {
      schema: "http://schema.org/",
      hiphop: "https://amir-seraj.github.io/HipHopOntology/hiphop.jsonld#",
    },
    "@type": "hiphop:Album",
    "hiphop:name": album.name,
    "hiphop:artist": {
      "@type": "hiphop:Artist",
      "hiphop:name": album.artist,
    },
    "hiphop:date_published": album.releaseDate,
    "hiphop:num_tracks": album.numTracks,
  };

  return (
    <div className="Album">
      <JsonLd data={jsonData} />
      <h2>{album.name}</h2>
      <p>Artist: {album.artist}</p>
      <p>Release Date: {album.releaseDate}</p>
      <p>Number of Tracks: {album.numTracks}</p>
    </div>
  );
};
export default Album;
