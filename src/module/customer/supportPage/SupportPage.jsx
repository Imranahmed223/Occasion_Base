import React from "react";
import "./SupportPage.scss";
// Library
import { Formik, Form } from "formik";
import * as Yup from "yup";
//Components
import {
  Button,
  Container,
  FormInput,
  FormText,
  Heading,
} from "../../../components";

const SupportPage = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Required"),
    subject: Yup.string()
      .min(2, "Name must be 2 character")
      .max(20, "Must be 35 characters or less")
      .required("Required"),
    message: Yup.string()
      .min(6, "Message have at least 6 charaters")
      .max(100, "Message must be 100 character or less.")
      .required("Required"),
  });
  return (
    <>
      <div className="support">
        <Container className="extra-small">
          <Heading className="center secondry">Occasion Base Support</Heading>
          <div className="support-form">
            <Formik
              initialValues={{
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={validate}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {(formik) => (
                <Form>
                  <FormInput label="Email" name="email" type="email" />
                  <FormInput label="Subject" name="subject" type="text" />
                  <FormText
                    label={"Message"}
                    name="message"
                    cols="50"
                    rows="15"
                  />

                  <div className="support-form-btn">
                    <Button className="uppercase rounded center m-3">
                      Submit
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SupportPage;
