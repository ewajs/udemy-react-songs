import React from "react";

const SongItem = ({ song, onSongSelect }) => {
  return (
    <div class="item" onClick={() => onSongSelect(song)}>
      <i class="large github middle aligned icon"></i>
      <div class="content">
        <a class="header">{song.name}</a>
        <div class="description">{song.author}</div>
      </div>
    </div>
  );
};

export default SongItem;
