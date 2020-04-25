import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.bg}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <View style={styles.container}>
        <AuthForm
          headerText="Sign Up for Tracker"
          errorMessage={state.errorMessage}
          onSubmit={({ email, password }) => signup({ email, password })}
          submitButtonText="Sign Up"
        />
        <NavLink
          message="Already have an account? Sign in instead"
          routeName="Signin"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "lightblue",
    flex: 1,
    justifyContent: "center",
  },
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: "#efefef",
    justifyContent: "center",
    marginBottom: 200,
    borderRadius: 15,
    marginVertical: 5,
    marginHorizontal: 5,
    borderColor: "#2d2d2d",
    borderWidth: 1,
  },
});

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignupScreen;
