import React from "react";
import LibrarySong from "./LibrarySong";

let Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : "" } `}>
    
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            //all songs
            songs={songs}
            //info de songs
            song={song}
            //function para cambair cancion
            setCurrentSong={setCurrentSong}
            //id de song
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
