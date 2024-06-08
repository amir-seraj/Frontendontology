import JsonLd from "../JsonLd";

const Performance = ({ performance }) => {
  const jsonData = {
    "@context": {
      schema: "http://schema.org/",
      hiphop: "https://your-username.github.io/HipHopOntology/hiphop.jsonld#",
    },
    "@type": "schema:Event",
    "schema:name": performance.name,
    "schema:startDate": performance.date,
    "schema:location": {
      "@type": "schema:Place",
      "schema:name": performance.location,
    },
    "schema:performer": {
      "@type": "schema:MusicGroup",
      "schema:name": performance.artist,
    },
  };

  return (
    <div className="Performance">
      <JsonLd data={jsonData} />
      <h2>{performance.name}</h2>
      <p>Artist: {performance.artist}</p>
      <p>Date: {performance.date}</p>
      <p>Location: {performance.location}</p>
    </div>
  );
};

export default Performance;
