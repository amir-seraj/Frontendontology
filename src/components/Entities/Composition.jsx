import JsonLd from "../JsonLd";

const Composition = ({ composition }) => {
  const jsonData = {
    "@context": {
      schema: "http://schema.org/",
      hiphop: "https://amir-seraj.github.io/HipHopOntology/hiphop.jsonld#",
    },
    "@type": "hiphop:Composition",
    "hiphop:name": composition.name,
    "hiphop:composer": {
      "@type": "hiphop:Artist",
      "hiphop:name": composition.composer,
    },
    "hiphop:ISWC": composition.iswc,
  };

  return (
    <div className="Composition">
      <JsonLd data={jsonData} />
      <h2>{composition.name}</h2>
      <p>Composer: {composition.composer}</p>
      <p>ISWC: {composition.iswc}</p>
    </div>
  );
};

export default Composition;
