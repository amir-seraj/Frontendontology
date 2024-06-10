import JsonLd from "../JsonLd";

const Artist = ({ artist }) => {
  const jsonData = {
    "@context": {
      schema: "http://schema.org/",
      hiphop: "https://amir-seraj.github.io/HipHopOntology/hiphop.jsonld#",
    },
    "@type": "schema:MusicGroup",
    "schema:name": artist.name,
    "schema:description": artist.bio,
    "schema:url": artist.homepage,
  };

  return (
    <div className="Artist">
      <JsonLd data={jsonData} />
      <h2>{artist.name}</h2>
      <p>Bio: {artist.bio}</p>
      <p>
        Homepage: <a href={artist.homepage}>{artist.homepage}</a>
      </p>
    </div>
  );
};

export default Artist;
