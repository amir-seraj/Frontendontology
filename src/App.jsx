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
      title: "Lose Yourself",
      duration: "PT5M26S",
      artist: "Eminem",
      isrc: "USUM70200763",
    },
    {
      title: "N.Y. State of Mind",
      duration: "PT4M54S",
      artist: "Nas",
      isrc: "USSM19904782",
    },
  ];

  const album = {
    name: "The Eminem Show",
    artist: "Eminem",
    releaseDate: "2002-05-26",
    numTracks: 20,
  };

  const artist = {
    name: "Eminem",
    bio: "Eminem, is an American rapper, songwriter, and record producer.",
    homepage: "http://eminem.com",
  };

  const performance = {
    name: "Eminem Live at Coachella",
    date: "2023-04-15",
    location: "Coachella Valley Music and Arts Festival",
    artist: "Eminem",
  };

  const release = {
    title: "Slim Shady LP",
    releaseDate: "1999-02-23",
    releaseType: "Album",
  };

  const label = {
    name: "Shady Records",
    foundingDate: "1999-01-01",
    affiliatedTo: "Interscope Records",
  };

  const playlist = {
    name: "Hip Hop Essentials",
    datePublished: "2023-06-01",
    numTracks: 2,
    tracks: tracks,
  };

  const composition = {
    name: "Stan",
    composer: "Eminem",
    iswc: "T-072246387-3",
  };

  const organization = {
    name: "Aftermath Entertainment",
    foundingDate: "1996-03-22",
    numberOfEmployees: 50,
  };

  const event = {
    name: "Rolling Loud Festival",
    date: "2023-07-23",
    location: "Miami, FL",
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
