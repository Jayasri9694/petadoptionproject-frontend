// React import removed as it's not used in this component
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import "./ApplicationForm.css";

const ApplicationForm = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Handle form submission (replace with API call)
      alert("Application submitted successfully!");
      resetForm();
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting your application.");
    }
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    petName: Yup.string().required("Pet Name is required"),
    reason: Yup.string().required("Reason is required"),
  });

  return (
    <div className="application-form-container">
      <h1>Adoption Application</h1>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          phone: "",
          petName: "",
          reason: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="application-form">
            <div>
              <label htmlFor="fullName">Full Name</label>
              <Field name="fullName" placeholder="Your Full Name" />
              {errors.fullName && touched.fullName && <div className="error">{errors.fullName}</div>}
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" placeholder="Your Email" />
              {errors.email && touched.email && <div className="error">{errors.email}</div>}
            </div>

            <div>
              <label htmlFor="phone">Phone</label>
              <Field name="phone" placeholder="Your Phone Number" />
              {errors.phone && touched.phone && <div className="error">{errors.phone}</div>}
            </div>

            <div>
              <label htmlFor="petName">Pet Name</label>
              <Field name="petName" placeholder="Pet You Want to Adopt" />
              {errors.petName && touched.petName && <div className="error">{errors.petName}</div>}
            </div>

            <div>
              <label htmlFor="reason">Why do you want to adopt?</label>
              <Field name="reason" as="textarea" placeholder="Explain your reasons" />
              {errors.reason && touched.reason && <div className="error">{errors.reason}</div>}
            </div>

            <button type="submit">Submit Application</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ApplicationForm;