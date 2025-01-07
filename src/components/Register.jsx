import { Formik, Form, Field } from "formik"; 
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Import custom CSS for styling

const apibaseurl = "https://adopt-backend-1.onrender.com";

const Register = () => {
  const navigate = useNavigate();

  // Form submission handler
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(`${apibaseurl}/api/users/register`, values);
      console.log("Registration successful:", response.data); // Log success
      navigate("/login"); // Redirect to login after registration
    } catch (error) {
      // Error handling
      if (error.response) {
        console.error("Error registering user:", error.response.data);
        alert(error.response.data.message || "Registration failed. Please try again.");
      } else {
        console.error("Network error:", error);
        alert("An error occurred. Please check your connection and try again.");
      }
    }
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
  });

  return (
    <div className="register-container">
      <div className="register-form">
        <h1>Register</h1>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              {/* Username Field */}
              <div className="form-group">
                <Field
                  name="username"
                  placeholder="Username"
                  className={`form-control ${errors.username && touched.username ? "is-invalid" : ""}`}
                />
                {errors.username && touched.username && (
                  <div className="error-text">{errors.username}</div>
                )}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={`form-control ${errors.email && touched.email ? "is-invalid" : ""}`}
                />
                {errors.email && touched.email && (
                  <div className="error-text">{errors.email}</div>
                )}
              </div>

              {/* Password Field */}
              <div className="form-group">
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className={`form-control ${errors.password && touched.password ? "is-invalid" : ""}`}
                />
                {errors.password && touched.password && (
                  <div className="error-text">{errors.password}</div>
                )}
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary">
                Register
              </button>

              {/* Login Link */}
              <p className="login-link">
                Already have an account? <a href="/login">Login here</a>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
