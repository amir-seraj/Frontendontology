import JsonLd from "../JsonLd";

const MusicTrack = ({ track }) => {
  const jsonData = {
    "@context": {
      schema: "http://schema.org/",
      hiphop: "https://amir-seraj.github.io/HipHopOntology/hiphop.jsonld#",
    },
    "@type": "schema:MusicRecording",
    "schema:name": track.title,
    "schema:duration": track.duration,
    "schema:byArtist": {
      "@type": "schema:MusicGroup",
      "schema:name": track.artist,
    },
    "schema:isrcCode": track.isrc,
  };

  return (
    <div className="MusicTrack">
      <JsonLd data={jsonData} />
      <h2>{track.title}</h2>
      <p>Artist: {track.artist}</p>
      <p>Duration: {track.duration}</p>
      <p>ISRC: {track.isrc}</p>
    </div>
  );
};

export default MusicTrack;
