import JsonLd from "../JsonLd";

const Label = ({ label }) => {
  const jsonData = {
    "@context": {
      schema: "http://schema.org/",
      hiphop: "https://amir-seraj.github.io/HipHopOntology/hiphop.jsonld#",
    },
    "@type": "schema:Organization",
    "schema:name": label.name,
    "schema:url": label.homepage,
  };

  return (
    <div className="Label">
      <JsonLd data={jsonData} />
      <h2>{label.name}</h2>
      <p>
        Homepage: <a href={label.homepage}>{label.homepage}</a>
      </p>
    </div>
  );
};

export default Label;
