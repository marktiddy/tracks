import React, { useReducer } from "react";

//default value is default state
//Create a reducer, actions and default actions into a function
export default (reducer, actions, defaultValue) => {
  //Create context using hook
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    //Loop over our actions
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
