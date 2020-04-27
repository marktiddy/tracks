//import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { FontAwesome } from "@expo/vector-icons";

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  //useCallback - This basically talks our results and return them
  //It only happens when something changes rather than each time a component re-renders
  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );
  const [err] = useLocation(isFocused || state.recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Create a Track</Text>
      <Map></Map>

      {err ? (
        <Text style={styles.error}>Please enable location services</Text>
      ) : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={20} />,
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    textAlign: "center",
  },
});

export default withNavigationFocus(TrackCreateScreen);
