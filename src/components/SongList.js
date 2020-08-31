import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

export class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.id}>
          <div className="right floated content">
            <div
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </div>
          </div>
          <div className="content">
            <p className="header">{song.title}</p>
            <div className="description">{song.author}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Song List</h1>
        <div className="ui divided list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectSong,
})(SongList);
