import React from "react";

const SongDetail = ({ song }) => {
  return (
    <div class="ui centered card">
      <div class="image">
        <img src={song.picture} />
      </div>
      <div class="content">
        <a class="header">{song.name}</a>
        <div class="meta">
          <span class="date">{song.author}</span>
        </div>
      </div>
      <div class="extra content">
        <a>
          <i class="clock icon"></i>
          {song.duration}
        </a>
      </div>
    </div>
  );
};

export default SongDetail;
