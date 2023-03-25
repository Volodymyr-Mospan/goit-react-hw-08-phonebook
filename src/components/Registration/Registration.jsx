import { Formik, Field, Form } from 'formik';
// import { useRegisterMutation } from 'redux/auth/slice';
import { RegFormStyled } from './Registration.styled';

export const Registration = () => {
  // const [register] = useRegisterMutation();

  const handleSubmit = credentials => {
    console.log(credentials);
    // register(credentials);
  };
  return (
    <RegFormStyled>
      <h2>Sign Up</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        // async values => {
        //   await new Promise(r => setTimeout(r, 500));
        //   alert(JSON.stringify(values, null, 2));
        // }
      >
        <Form>
          <label>
            Full Name
            <Field name="name" placeholder="Jane Doe" />
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
    </RegFormStyled>
  );
};
