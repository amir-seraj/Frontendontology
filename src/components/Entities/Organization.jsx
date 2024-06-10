import JsonLd from "../JsonLd";

const Organization = ({ organization }) => {
  const jsonData = {
    "@context": {
      schema: "http://schema.org/",
      hiphop: "https://amir-seraj.github.io/HipHopOntology/hiphop.jsonld#",
    },
    "@type": "hiphop:Organization",
    "hiphop:name": organization.name,
    "hiphop:founding_date": organization.foundingDate,
    "hiphop:number_of_employees": organization.numberOfEmployees,
  };

  return (
    <div className="Organization">
      <JsonLd data={jsonData} />
      <h2>{organization.name}</h2>
      <p>Founding Date: {organization.foundingDate}</p>
      <p>Number of Employees: {organization.numberOfEmployees}</p>
    </div>
  );
};

export default Organization;
