import React from "react";
import MusicTrack from "./components/Entities/MusicTrack";
import Album from "./components/Entities/Album";
import Artist from "./components/Entities/Artist";
import Performance from "./components/Entities/Performance";
import Release from "./components/Entities/Release";
import Label from "./components/Entities/Label";
import Playlist from "./components/Entities/Playlist";
import Composition from "./components/Entities/Composition";
import Organization from "./components/Entities/Organization";
import Event from "./components/Entities/Event";
import "./App.css";

const App = () => {
  const tracks = [
    {
      title: "Track 1",
      duration: "PT3M30S",
      artist: "Artist 1",
      isrc: "ISRC001",
    },
    {
      title: "Track 2",
      duration: "PT4M15S",
      artist: "Artist 2",
      isrc: "ISRC002",
    },
  ];

  const album = {
    name: "Album 1",
    artist: "Artist 1",
    releaseDate: "2023-01-01",
    numTracks: 10,
  };
  const artist = {
    name: "Artist 1",
    bio: "A brief bio",
    homepage: "http://artist1.com",
  };
  const performance = {
    name: "Performance 1",
    date: "2023-06-01",
    location: "Venue 1",
    artist: "Artist 1",
  };
  const release = { title: "Release 1", date: "2023-01-01", label: "Label 1" };
  const label = { name: "Label 1", homepage: "http://label1.com" };
  const playlist = { name: "Playlist 1", numTracks: 2, tracks };
  const composition = {
    name: "Composition 1",
    composer: "Composer 1",
    lyricist: "Lyricist 1",
    iswc: "ISWC001",
  };
  const organization = {
    name: "Organization 1",
    address: "123 Street",
    founder: "Founder 1",
    foundingDate: "2000-01-01",
  };
  const event = {
    name: "Event 1",
    startDate: "2023-01-01",
    endDate: "2023-01-02",
    location: "Location 1",
    organizer: "Organizer 1",
    performer: "Performer 1",
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Your Music Website</h1>
        <p>This is a sample web page.</p>
      </header>
      <div className="Content">
        <MusicTrack track={tracks[0]} />
        <Album album={album} />
        <Artist artist={artist} />
        <Performance performance={performance} />
        <Release release={release} />
        <Label label={label} />
        <Playlist playlist={playlist} />
        <Composition composition={composition} />
        <Organization organization={organization} />
        <Event event={event} />
      </div>
    </div>
  );
};

export default App;
