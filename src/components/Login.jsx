// Login.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Ensure the correct path
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const apibaseurl = "https://backend-petadoption-4.onrender.com";

const Login = () => {
  const { setIsAuthenticated } = useAuth(); // Access setIsAuthenticated from context
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (values) => {
    try {
      // Send login request to backend
      const response = await axios.post(`${apibaseurl}/api/users/login`, values);
      console.log(response.data); // For debugging

      // If token is received in response
      if (response.data.token) {
        // Save token in localStorage
        localStorage.setItem("authToken", response.data.token);

        // Update authentication state
        setIsAuthenticated(true);

        // Redirect to home page
        navigate("/home");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <div className="error">{error}</div>}  {/* Display error message if login fails */}
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid email address").required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <Field name="email" type="email" placeholder="Email" className="form-control" />
              {errors.email && touched.email && (
                <div className="error-text">{errors.email}</div>
              )}
            </div>

            <div className="form-group">
              <Field name="password" type="password" placeholder="Password" className="form-control" />
              {errors.password && touched.password && (
                <div className="error-text">{errors.password}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
