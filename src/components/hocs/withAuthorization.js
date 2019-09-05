import React, { useContext } from 'react';
import { FirebaseContext } from '../Firebase';

const withAuthorization = Component => props => {
  const [ firebaseApi, dataUser, setDataUser ] = useContext(FirebaseContext);
  return(
    <Component
      {...props}
      firebaseApi={firebaseApi}
      dataUser={dataUser}
      setDataUser={setDataUser}
    />
  )
}
export default withAuthorization;