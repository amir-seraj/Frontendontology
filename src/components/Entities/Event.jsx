import JsonLd from "../JsonLd";

const Event = ({ event }) => {
  const jsonData = {
    "@context": {
      schema: "http://schema.org/",
      hiphop: "https://amir-seraj.github.io/HipHopOntology/hiphop.jsonld#",
    },
    "@type": "schema:Event",
    "schema:name": event.name,
    "schema:startDate": event.startDate,
    "schema:endDate": event.endDate,
    "schema:location": {
      "@type": "schema:Place",
      "schema:name": event.location,
    },
    "schema:organizer": {
      "@type": "schema:Organization",
      "schema:name": event.organizer,
    },
    "schema:performer": {
      "@type": "schema:Person",
      "schema:name": event.performer,
    },
  };

  return (
    <div className="Event">
      <JsonLd data={jsonData} />
      <h2>{event.name}</h2>
      <p>Start Date: {event.startDate}</p>
      <p>End Date: {event.endDate}</p>
      <p>Location: {event.location}</p>
      <p>Organizer: {event.organizer}</p>
      <p>Performer: {event.performer}</p>
    </div>
  );
};

export default Event;
