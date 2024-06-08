import JsonLd from "../JsonLd";

const Album = ({ album }) => {
  const jsonData = {
    "@context": {
      schema: "http://schema.org/",
      hiphop: "https://your-username.github.io/HipHopOntology/hiphop.jsonld#",
    },
    "@type": "schema:MusicAlbum",
    "schema:name": album.name,
    "schema:byArtist": {
      "@type": "schema:MusicGroup",
      "schema:name": album.artist,
    },
    "schema:datePublished": album.releaseDate,
    "schema:numTracks": album.numTracks,
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
