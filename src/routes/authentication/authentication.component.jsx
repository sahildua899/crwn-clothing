import SignUp from '../../components/sign-up-form/sign-up-form.component';
import SignIn from '../../components/sign-in-form/sign-in-form.component';
import { AuthenticationContainer } from './authentication.styles';
import React from 'react';


const Authentication = () => {
 
  return (
    <AuthenticationContainer>
        <SignIn />
        <SignUp />
    </AuthenticationContainer>
  )
}

export default Authentication;