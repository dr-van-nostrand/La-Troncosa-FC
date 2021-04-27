import React from "react";

let Song = ({ currentSong, isPlaying }) => {
  return (
    <div className="song-container">
      <img className={`imgSongInactive ${isPlaying ? "imgSong" : "" }` } alt={currentSong.name} src={currentSong.cover}></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
