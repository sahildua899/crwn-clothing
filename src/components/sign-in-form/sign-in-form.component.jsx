import {React, useState} from 'react';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import { SignInContainer, Heading, ButtonsContainer } from './sign-in-form.styles';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'



const defaultFormFields = {
    email:'',
    password:'',
}
const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;  
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
             await signInAuthUserWithEmailAndPassword(email,password);
            resetFormFields();
        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password': alert('email and password doesn\'t match');
                break;
                case 'auth/user-not-found': alert('No user Associated with this email');
                break;
                default:console.log(error)
            }
        }

    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value})

    }
    const signInWithGoogle = async () => {
    await signInWithGooglePopup();
         
      }

  return (
    <SignInContainer>
        <Heading>Already have an Account?</Heading>
        <span>Sign In with your Email and Password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label="Email" required type='email' onChange={handleChange} name='email' value={email} />
            <FormInput label="Password" required type='password' onChange={handleChange} name='password' value={password} />
            <ButtonsContainer>  
            <Button type='submit'>Sign In</Button>
            <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
            </ButtonsContainer>
        </form>
    </SignInContainer>
  )
}

export default SignIn;