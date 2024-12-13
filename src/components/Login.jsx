import { useContext } from "react";
import { Formik, Form, Field } from "formik";
import { AuthContext } from "/context/AuthContext";
import * as Yup from "yup";
import axios from "axios";
import "./Login.css"; // Custom CSS for styling
const Login = () => {
  const { login } = useContext(AuthContext);

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', values);
      login(response.data.user); // Call the context function to set the logged-in user
      alert("Logged in successfully");
    } catch (error) {
      console.error(error);
      setErrors({ server: error.response?.data?.message || "Something went wrong" });
    } finally {
      setSubmitting(false);
    }
  };  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string().email("Invalid email address").required("Required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              {errors.server && <div className="error-text">{errors.server}</div>}
              
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

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
