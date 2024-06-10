import JsonLd from "../JsonLd";

const Composition = ({ composition }) => {
  const jsonData = {
    "@context": {
      schema: "http://schema.org/",
      hiphop: "https://amir-seraj.github.io/HipHopOntology/hiphop.jsonld#",
    },
    "@type": "schema:MusicComposition",
    "schema:name": composition.name,
    "schema:composer": {
      "@type": "schema:Person",
      "schema:name": composition.composer,
    },
    "schema:lyricist": {
      "@type": "schema:Person",
      "schema:name": composition.lyricist,
    },
    "schema:iswcCode": composition.iswc,
  };

  return (
    <div className="Composition">
      <JsonLd data={jsonData} />
      <h2>{composition.name}</h2>
      <p>Composer: {composition.composer}</p>
      <p>Lyricist: {composition.lyricist}</p>
      <p>ISWC: {composition.iswc}</p>
    </div>
  );
};

export default Composition;
