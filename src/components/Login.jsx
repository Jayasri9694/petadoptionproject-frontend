import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import custom CSS for styling

const apibaseurl = "https://fsd-backend-ilvh.onrender.com";

const Login = () => {
  const navigate = useNavigate();

  // Check if the user is authenticated (token in localStorage)
  const isAuthenticated = localStorage.getItem("authToken");

  // Redirect if the user is already authenticated
  if (isAuthenticated) {
    navigate("/"); // Redirect to the home if already logged in
  }

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(`${apibaseurl}/api/users/login`, values);
      // Store token and user data in localStorage
      localStorage.setItem("authToken", response.data.token); // Assuming the backend returns a token
      console.log(response.data); // Handle successful login response
      navigate("/"); // Redirect to dashboard after login
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleLogout = () => {
    // Clear token and redirect to login
    localStorage.removeItem("authToken");
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="login-container">
      <div className="login-form">
        {!isAuthenticated ? (
          <>
            <h1>Login</h1>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={Yup.object({
                email: Yup.string().email("Invalid email").required("Required"),
                password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
              })}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="form-group">
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="form-control"
                    />
                    {errors.email && touched.email && (
                      <div className="error-text">{errors.email}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <Field
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="form-control"
                    />
                    {errors.password && touched.password && (
                      <div className="error-text">{errors.password}</div>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                  <p>
                    Don't have an account? <a href="/register">Register here</a>
                  </p>
                </Form>
              )}
            </Formik>
          </>
        ) : (
          <div>
            <h1>Welcome to the Pet Adoption Platform!</h1>
            <button onClick={handleLogout} className="btn btn-danger">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
