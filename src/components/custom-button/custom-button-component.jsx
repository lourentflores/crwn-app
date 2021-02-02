import React from 'react';

import { CustomButtonContainer } from './custom-button-style';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;

// without styled-components
// import './custom-button-style.css';

// const CustomButton = ({
//   children,
//   isGoogleSignIn,
//   inverted,
//   ...otherProps
// }) => (
//   <button
//     className={`${inverted ? 'inverted' : ''}${
//       isGoogleSignIn ? 'google-sign-in' : ''
//     } custom-button`}
//     {...otherProps}>
//     {children}
//   </button>
// );


