import React from "react";
import { Formik, Form } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";

function PortalForm() {
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ usurname: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {() => (
          <Form>
            <CustomInput
              label="Kullanıcı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı Adınızı Giriniz"
            />
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
