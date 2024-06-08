import JsonLd from "../JsonLd";

const Organization = ({ organization }) => {
  const jsonData = {
    "@context": {
      schema: "http://schema.org/",
      hiphop: "https://your-username.github.io/HipHopOntology/hiphop.jsonld#",
    },
    "@type": "schema:Organization",
    "schema:name": organization.name,
    "schema:address": organization.address,
    "schema:founder": {
      "@type": "schema:Person",
      "schema:name": organization.founder,
    },
    "schema:foundingDate": organization.foundingDate,
  };

  return (
    <div className="Organization">
      <JsonLd data={jsonData} />
      <h2>{organization.name}</h2>
      <p>Founder: {organization.founder}</p>
      <p>Founding Date: {organization.foundingDate}</p>
      <p>Address: {organization.address}</p>
    </div>
  );
};

export default Organization;
