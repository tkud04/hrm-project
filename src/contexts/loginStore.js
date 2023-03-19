import * as React from 'react'

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
}

const CONTEXT_ERROR =
  'Login context not found. Have you wrapped your components with LoginContext.Consumer?'

  const LoginStateContext = React.createContext(
    undefined,
  )

  const LoginDispatchContext = React.createContext({
    login: () => {
      throw new Error(CONTEXT_ERROR)
    },
    logout: () => {
        throw new Error(CONTEXT_ERROR)
      },
})

function reducer(prevState, action) {
    switch (action.type) {
     case 'SET_DATA':
      return {...prevState, ...action.data}
     case 'LOG_OUT':
      return initialState
     default:
      return prevState
    }
}

function LoginProvider({children}) {
    const [state, dispatch] = React.useReducer(reducer, initialState)
  
    React.useEffect(() => {
      SharedPref.storeProfileData(state)
    },[state])
  
    // actions
    const LoginDispatch = React.useMemo(
      () => ({
      }),[state]
    )

    return (
        <LoginStateContext.Provider value={state}>
          <LoginDispatchContext.Provider value={LoginDispatch}>
            {children}
          </LoginDispatchContext.Provider>
        </LoginStateContext.Provider>
      )
}

function useLoginState() {
    const context = React.useContext(LoginStateContext)
    if (context === undefined) {
      throw new Error('useLoginState must be used with a LoginProvider')
    }
    return context
  }
  
  function useLoginDispatch() {
    const context = React.useContext(LoginDispatchContext)
    if (context === undefined) {
      throw new Error('useLoginDispatch must be used with a LoginProvider')
    }
    return context
  }
  
  export {useLoginDispatch, useLoginState, LoginProvider}