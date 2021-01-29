import React from 'react';
import SignIn from '../../components/sign-in/signin-component';
import SignUp from '../../components/sign-up/signup-component';
import './signin-and-signup-style.css';

const SignInAndSignUpPage = () => (
  <div className="signin-and-signup">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
