import React, { useContext, useState } from 'react';

export const FirebaseContext = React.createContext([{}, () => {}]);

export const FirebaseProvider = ({ firebase, ...props }) =>{
  const [user, setUserState] = useState({})
  return (
    <FirebaseContext.Provider value={[firebase, user, setUserState]}>
      {props.children}
    </FirebaseContext.Provider>
  )
}

export const withFirebase = Component => props =>{
  const [ firebaseApi, user, setUserState ] = useContext(FirebaseContext);
  return (
    <Component
      {...props}
      firebaseApi={firebaseApi}
      dataUser={user}
      setDataUser={setUserState}
    />
  )
}