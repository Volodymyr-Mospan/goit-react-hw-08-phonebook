import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { RegFormStyled } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = credentials => {
    dispatch(register(credentials));
  };

  return (
    <RegFormStyled>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
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
