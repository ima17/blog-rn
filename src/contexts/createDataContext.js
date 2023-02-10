import React from "react";

const CreateDataContext = (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{ state }}>
          {children}
        </Context.Provider>
      );
  };

  return {createContext , Provider};

  
};
