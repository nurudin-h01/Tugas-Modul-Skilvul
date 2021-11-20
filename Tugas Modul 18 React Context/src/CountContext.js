import React from 'react';
import { createContext, useContext, useReducer } from 'react';



const CountContext = createContext();

const countReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case 'increment': 
      newState = {count: state.count + 1}
      break;
    
    case 'decrement': {
      newState = {count: state.count - 1}
      break;
      // code here
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
  return newState
}

const CountProvider = ({ children }) => {
  // useReducer

  // Make variable `value` and assign state & dispatch
  const [state, dispatch] = useReducer(countReducer, {count: 0});

  const value = {
    s: state,
    d: dispatch,


  }

  return <CountContext.Provider value={value}>
    {children}
    </CountContext.Provider>
}

const useCount = () => {
  // fill the default value of useContext
  const context = useContext(CountContext);

  if (context === 'undefined') {
    throw new Error('useCount must be used within a CountProvider')
  }

  return context;
}

export { CountProvider, useCount } 