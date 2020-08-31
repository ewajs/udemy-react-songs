import { combineReducers } from "redux";
import faker from "faker";

const songsReducer = () => {
  return [
    {
      id: 1,
      title: "Viva la Vida",
      author: "Coldplay",
      duration: "4:13",
      picture: faker.image.image(),
    },
    {
      id: 2,
      title: "Yellow Submarine",
      author: "The Beatles",
      duration: "3:51",
      picture: faker.image.image(),
    },
    {
      id: 3,
      title: "King Without a Crown",
      author: "Matisyahu",
      duration: "5:37",
      picture: faker.image.image(),
    },
    {
      id: 4,
      title: "Starman",
      author: "David Bowie",
      duration: "4:28",
      picture: faker.image.image(),
    },
    {
      id: 0,
      title: "Supermassive Black Hole",
      author: "Muse",
      duration: "6:05",
      picture: faker.image.image(),
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
