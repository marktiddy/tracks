import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context } from "../context/AuthContext";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.bg}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <View style={styles.container}>
        <AuthForm
          headerText="Sign into Tracker"
          errorMessage={state.errorMessage}
          onSubmit={signin}
          submitButtonText="Sign In"
        />
        <NavLink
          message="Don't have an account yet? Sign up instead"
          routeName="Signup"
        />
      </View>
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
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

export default SigninScreen;
