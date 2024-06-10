import JsonLd from "../JsonLd";

const Label = ({ label }) => {
  const jsonData = {
    "@context": {
      schema: "http://schema.org/",
      hiphop: "https://amir-seraj.github.io/HipHopOntology/hiphop.jsonld#",
    },
    "@type": "hiphop:Label",
    "hiphop:name": label.name,
    "hiphop:founding_date": label.foundingDate,
    "hiphop:affiliated_to": {
      "@type": "hiphop:Organization",
      "hiphop:name": label.affiliatedTo,
    },
  };

  return (
    <div className="Label">
      <JsonLd data={jsonData} />
      <h2>{label.name}</h2>
      <p>Founding Date: {label.foundingDate}</p>
      <p>Affiliated To: {label.affiliatedTo}</p>
    </div>
  );
};

export default Label;
