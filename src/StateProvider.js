import React, { createContext, useContext, useReducer }
from "react";

// Prepares data layer
export const StateContext = createContext();


//wrap the app and provide the data layer
export const StateProvider = ({ reducer, initialState, children}) =>
( <StateContext.Provider value={useReducer (reducer, initialState)}>
    {children}
</StateContext.Provider>
);

//pull the data from the data layer
export const useStateValue = () => useContext(StateContext);