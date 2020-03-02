import React from 'react';
import './App.css';
// import { SignupForm } from './SignupForm';
// import { SignupFormWithYup } from './SignupFormWithYup';
// import { SignupFormWithFormikComponent } from './SignupFormWithFormikComponent';
import { SignupFormWithCustomComponents } from './SignUpFormWithCustomComponents';

function App() {
  return (
    <div className="App">
      {/* Form with formik and custom validation 
      <h2 style={{textAlign:"center"}}>Signup Form With Custom Validation</h2>
      <SignupForm /> 
      */}

      {/* Form with formik and yup for validation
      <h2 style={{textAlign:"center"}}>Signup Form With Yup</h2>
      <SignupFormWithYup />
      */}

      {/* Form with formik and formik component
      <h2 style={{textAlign:"center"}}>Signup Form With Formik Component</h2>
      <SignupFormWithFormikComponent />
      */}

      {/* Form with formik and custom input components */}
      <h2 style={{ textAlign: "center" }}>Signup Form With Custom Components</h2>
      <SignupFormWithCustomComponents />
    </div>
  );
}

export default App;
