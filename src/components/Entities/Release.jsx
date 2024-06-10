import React from "react";
import JsonLd from "../JsonLd";

const Release = ({ release }) => {
  const jsonData = {
    "@context": {
      hiphop: "https://amir-seraj.github.io/HipHopOntology/hiphop.jsonld#",
    },
    "@type": "hiphop:Release",
    "hiphop:title": release.title,
    "hiphop:release_date": release.releaseDate,
    "hiphop:release_type": release.releaseType,
  };

  return (
    <div className="Release">
      <JsonLd data={jsonData} />
      <h2>{release.title}</h2>
      <p>Release Date: {release.releaseDate}</p>
      <p>Release Type: {release.releaseType}</p>
    </div>
  );
};

export default Release;
