import SignUp from '../../components/sign-up-form/sign-up-form.component';
import SignIn from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss'
import React from 'react';


const Authentication = () => {
 
  return (
    <div className='authentication-container'>
        <SignIn />
        <SignUp />
    </div>
  )
}

export default Authentication;