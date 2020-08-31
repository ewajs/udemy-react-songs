import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return "No song selected";
  }
  return (
    <div className="ui centered card">
      <div className="image">
        <img src={song.picture} alt={song.title} />
      </div>
      <div className="content">
        <p className="header">{song.title}</p>
        <div className="meta">
          <span className="date">{song.author}</span>
        </div>
      </div>
      <div className="extra content">
        <p>
          <i className="clock icon"></i>
          {song.duration}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
