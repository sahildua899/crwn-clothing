import {React, useState} from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import { SignUpContainer, Heading } from './sign-up-form.styles';
import Button from '../button/button.component';


const defaultFormFields = {
    displayName: '',
    email:'',
    password:'',
    confirmPassword: ''
}



const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('email already in use')
            }else {
                console.log('User Creation encountered an Error', error.message)
            }
            
        }

    }
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]:value})

    }

  return (
    <SignUpContainer>
        <Heading>Don't have an Account?</Heading>
        <span>Sign Up with your Email and Password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label="Display Name" required type='text' onChange={handleChange} name='displayName' value={displayName} />
            <FormInput label="Email" required type='email' onChange={handleChange} name='email' value={email} />
            <FormInput label="Password" required type='password' onChange={handleChange} name='password' value={password} />
            <FormInput label="Confirm Password" required type='password' onChange={handleChange} name='confirmPassword' value={confirmPassword} />
            <Button type='submit'>Sign Up</Button>
        </form>
    </SignUpContainer>
  )
}

export default SignUp