import React, { useEffect } from "react";
import Formulario from './Formulario';
import { useContext } from "react";

export const initialState = {
    loading: true,
    user: {
        token: '',
    },
    menu: []
};

export const ActionTypes = {
    SetToken: 'SET_TOKEN',
    AddPlato: 'ADD_PLATO'
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.SetToken: {
        return { 
            ...state,
             user: action.newValue };
      }


      case ActionTypes.AddPlato: {
        state.menu.push(action.newValue)
        console.log("plato agreado", action.newValue)

        return{
          state
        }
      }
      case ActionTypes.RemovePlato: {
        //remover plato

        return{
          ...state, menu: [2]
        }
      }
      default: {
        return state;
      }
    }
  };

  export const initialContext = {
    contextState: initialState,
    setContextState: () => {},
  };

  const Cont = React.createContext(initialContext);

  export function ContextProvider({ children, initial = initialState }) {
    const [state, dispatch] = React.useReducer(reducer, initial);

    const contextState = state;
    const setContextState = dispatch;

    return <Cont.Provider value={{ contextState, setContextState }}>{children}</Cont.Provider>;
  }

  export const useContextState = () => useContext(Cont);

  

  