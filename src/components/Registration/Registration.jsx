import { Formik, Field, Form } from 'formik';

export const Registration = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          password: '',
        }}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label>
            Full Name
            <Field name="fullName" placeholder="Jane Doe" />
          </label>

          <label>
            Email
            <Field name="email" placeholder="jane@acme.com" type="email" />
          </label>

          <label>
            Password
            <Field
              name="password"
              placeholder="some password"
              type="password"
            />
          </label>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
