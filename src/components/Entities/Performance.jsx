import React from "react";
import JsonLd from "../JsonLd";

const Performance = ({ performance }) => {
  const jsonData = {
    "@context": {
      hiphop: "https://amir-seraj.github.io/HipHopOntology/hiphop.jsonld#",
    },
    "@type": "hiphop:Performance",
    "hiphop:name": performance.name,
    "hiphop:date": performance.date,
    "hiphop:location": {
      "@type": "hiphop:Place",
      "hiphop:name": performance.location,
    },
    "hiphop:performer": {
      "@type": "hiphop:Artist",
      "hiphop:name": performance.artist,
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
