import JsonLd from "../JsonLd";

const Release = ({ release }) => {
  const jsonData = {
    "@context": {
      schema: "http://schema.org/",
      hiphop: "https://amir-seraj.github.io/HipHopOntology/hiphop.jsonld#",
    },
    "@type": "schema:MusicRelease",
    "schema:name": release.title,
    "schema:datePublished": release.date,
    "schema:recordLabel": {
      "@type": "schema:Organization",
      "schema:name": release.label,
    },
  };

  return (
    <div className="Release">
      <JsonLd data={jsonData} />
      <h2>{release.title}</h2>
      <p>Release Date: {release.date}</p>
      <p>Label: {release.label}</p>
    </div>
  );
};

export default Release;
