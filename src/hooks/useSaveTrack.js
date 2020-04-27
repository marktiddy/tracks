//This will let us save a track
import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, name },
  } = useContext(LocationContext);

  //calls create track from one context and passes data from another
  const saveTrack = () => {
    createTrack(name, locations);
  };

  //returns our function in an array. This lets us expand later if we want
  return [saveTrack];
};
