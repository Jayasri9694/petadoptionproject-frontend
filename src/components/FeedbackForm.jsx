import { useContext } from "react";import { Formik, Form, Field } from "formik";
import { AuthContext } from "/context/AuthContext";  // Adjust the path if needed
import * as Yup from "yup";
import axios from "axios";
import "./FeedbackForm.css";  // Custom CSS for styling

const FeedbackForm = () => {
  const { auth } = useContext(AuthContext); // Accessing user data from AuthContext
  
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post("/api/feedback", {
        userId: auth?.id,  // If user is logged in, send their user ID
        name: values.name,
        feedback: values.feedback,
      });
      alert("Feedback submitted successfully!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setErrors({ server: error.response?.data?.message || "Something went wrong" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="feedback-container">
      <div className="feedback-form">
        <h1>Feedback Form</h1>
        <Formik
          initialValues={{ name: "", feedback: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            feedback: Yup.string().required("Feedback is required").min(10, "Feedback must be at least 10 characters long"),
          })}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              {errors.server && <div className="error-text">{errors.server}</div>}
              
              <div className="form-group">
                <Field
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="form-control"
                />
                {errors.name && touched.name && (
                  <div className="error-text">{errors.name}</div>
                )}
              </div>

              <div className="form-group">
                <Field
                  name="feedback"
                  as="textarea"
                  placeholder="Your Feedback"
                  className="form-control"
                />
                {errors.feedback && touched.feedback && (
                  <div className="error-text">{errors.feedback}</div>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FeedbackForm;
