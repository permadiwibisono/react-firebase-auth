import React from 'react';
import Button, { ButtonGoogleSignin } from '../Button';
import withAuthorization from '../hocs/withAuthorization';

function Profile(props){
  const { firebaseApi, dataUser, setDataUser } = props;
  return(
    <div className="App-container">
      {dataUser.isLogged? (
        <div>
          <h1>Hellow, { dataUser.name }</h1>
          <h4>Logged as <span style={{textDecoration: 'underline'}}>{ dataUser.email }</span></h4>
          <Button onClick={e=>{
            e.preventDefault();
            firebaseApi.doSignOut().then(r => {
              setDataUser(state=> ({
                ...state,
                isLogged: false
              }))
            })
          }}>
            Sign out
          </Button>
        </div>
      ):(
        <div className="App-container">
          <ButtonGoogleSignin>Login with Google</ButtonGoogleSignin>
        </div>
      )}
    </div>
  )
}

export default withAuthorization(Profile);