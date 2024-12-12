import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Register.css"; // Import custom CSS for styling

const Register = () => {
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/register`, values);
      console.log(response.data); // Handle successful response
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h1>Register</h1>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email").required("Required"),
            password: Yup.string()
              .min(6, "Minimum 6 characters")
              .required("Required"),
          })}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form-group">
                <Field name="name" placeholder="Name" className="form-control" />
                {errors.name && touched.name && (
                  <div className="error-text">{errors.name}</div>
                )}
              </div>

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
                Register
              </button>
              <p>Already have an account? <a href="/login">Login here</a></p>
            </Form>
          )}
        </Formik>
      </div>
      
    </div>
  );
};

export default Register;
