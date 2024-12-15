import { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";


const PetForm = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("breed", values.breed);
    formData.append("age", values.age);
    formData.append("temperament", values.temperament);
    formData.append("needs", values.needs);
    if (image) formData.append("image", image);

    try {
      const response = await axios.post('http://localhost:5000/api/pets', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        breed: "",
        age: "",
        temperament: "",
        needs: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Pet name is required"),
        breed: Yup.string().required("Breed is required"),
        age: Yup.number().required("Age is required"),
        temperament: Yup.string().required("Temperament is required"),
        needs: Yup.string(),
      })}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" placeholder="Pet Name" />
          {errors.name && touched.name && <div>{errors.name}</div>}

          <Field name="breed" placeholder="Breed" />
          {errors.breed && touched.breed && <div>{errors.breed}</div>}

          <Field name="age" placeholder="Age" />
          {errors.age && touched.age && <div>{errors.age}</div>}

          <Field name="temperament" placeholder="Temperament" />
          {errors.temperament && touched.temperament && (
            <div>{errors.temperament}</div>
          )}

          <Field name="needs" placeholder="Special Needs (Optional)" />

          <input type="file" onChange={handleImageUpload} />

          <button type="submit">Add Pet</button>
        </Form>
      )}
    </Formik>
  );
};

export default PetForm;
