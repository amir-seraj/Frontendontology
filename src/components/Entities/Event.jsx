import JsonLd from "../JsonLd";

const Event = ({ event }) => {
  const jsonData = {
    "@context": {
      schema: "http://schema.org/",
      hiphop: "https://amir-seraj.github.io/HipHopOntology/hiphop.jsonld#",
    },
    "@type": "hiphop:Event",
    "hiphop:name": event.name,
    "hiphop:date": event.date,
    "hiphop:location": {
      "@type": "hiphop:Place",
      "hiphop:name": event.location,
    },
  };

  return (
    <div className="Event">
      <JsonLd data={jsonData} />
      <h2>{event.name}</h2>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
    </div>
  );
};

export default Event;
