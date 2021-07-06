import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { TextField } from "../../components";

const schema = yup.object({
  username: yup.string().required().min(3),
  email: yup.string().email().required("Please Enter your Email"),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

const Planets: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ width: 200, margin: "auto" }}>
        <Formik
          validationSchema={schema}
          initialValues={{ username: "", email: "", password: "" }}
          onSubmit={() => {}}
        >
          {() => (
            <Form>
              <div>
                <Field label="Username" name="username" component={TextField} />
              </div>
              <div>
                <Field label="Email" name="email" component={TextField} />
              </div>
              <div>
                <Field label="Password" name="password" component={TextField} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Planets;
