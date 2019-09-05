import React from 'react';
import Button from './Button';
import { withFirebase } from '../Firebase';

function ButtonGoogleSignin({ children, ...props }) {
  // console.log(props)
  const { firebaseApi, setDataUser } = props;
  // console.log(props, props.firebaseApi.auth.currentUser)
  return(
    <Button
      className="App-button--google"
      onClick={()=>{
        setDataUser(state => ({ ...state, isFetch: true }))
        firebaseApi.doSignInWithGoogle()
        .then(result => {
          const { accessToken, idToken } = result.credential
          console.log("accessToken: ", accessToken)
          console.log("idToken: ", idToken)
          console.log("result: ", result)
          const { additionalUserInfo: { profile } } = result;
          firebaseApi.auth.currentUser.getIdToken()
            .then(function(idToken2) {
              console.log("idToken2: ", idToken2)
              setDataUser(state => ({
                ...state,
                isFetch: false,
                isLogged: true,
                id: profile.id,
                email: profile.email,
                name: profile.name,
              }))
            }).catch(function(error) {
              console.log("error: ", error)
              setDataUser(state => ({ ...state, isFetch: false }))
            });

        }).catch(e =>{
          setDataUser(state => ({ ...state, isFetch: false }))
          alert("Error login with google")
        })
      }}
    >
      { children }
    </Button>
  )
}

export default withFirebase(ButtonGoogleSignin);