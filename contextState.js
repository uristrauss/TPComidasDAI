import react, { useEffect } from "react";

export const initialState = {
    loading: true,
    user: {
        token: '',
    },
};

export const ActionTypes = {
    SetToken: 'SET_TOKEN',
};

export const reducer = (state = {}, action) => {
    switch (action.type) {
      case ActionTypes.SetToken: {
        return { 
            ...state,
             user: token.newValue };
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

  /*
  const Formulario = ()=>{
    const {contextState , setContextState} = useContextState();

    useEffect(()=>{
        setContextState({
            type :ActionTypes.SetToken,
            value : 18,
        });
      
    },[])
  }
  */