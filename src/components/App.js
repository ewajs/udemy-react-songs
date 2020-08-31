import React, { useState } from "react";
import SongDetail from "./SongDetail";
import SongList from "./SongList";
import faker from "faker";

const songs = [
  {
    id: 1,
    name: "Viva la Vida",
    author: "Coldplay",
    duration: "4:13",
    picture: faker.image.image(),
  },
  {
    id: 2,
    name: "Yellow Submarine",
    author: "The Beatles",
    duration: "3:51",
    picture: faker.image.image(),
  },
  {
    id: 3,
    name: "King Without a Crown",
    author: "Matisyahu",
    duration: "5:37",
    picture: faker.image.image(),
  },
  {
    id: 4,
    name: "Starman",
    author: "David Bowie",
    duration: "4:28",
    picture: faker.image.image(),
  },
  {
    id: 0,
    name: "Supermassive Black Hole",
    author: "Muse",
    duration: "6:05",
    picture: faker.image.image(),
  },
];

const App = () => {
  const [selectedSong, setSelectedSong] = useState(songs[0]);
  return (
    <div className="container">
      <div className="ui segment">
        <h1 className="ui header">Songs</h1>
        <div className="ui grid">
          <div className="eight wide column">
            <SongList songs={songs} onSongSelect={setSelectedSong} />
          </div>
          <div className="eight wide column">
            <SongDetail song={selectedSong} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
