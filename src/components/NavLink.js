import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, message, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Text style={styles.signin}>{message}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signin: {
    color: "darkblue",
    textAlign: "center",
    fontSize: 16,
  },
});

export default withNavigation(NavLink);
