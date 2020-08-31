import React from "react";
import SongItem from "./SongItem";
const SongList = ({ songs, onSongSelect }) => {
  const renderedSongs = songs.map((song) => (
    <SongItem song={song} key={song.id} onSongSelect={onSongSelect} />
  ));

  return <div class="ui relaxed divided list">{renderedSongs}</div>;
};

export default SongList;
