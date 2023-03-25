import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/options';

import { AuthFormStyled } from './Authorization.styled';

export const Authorization = () => {
  const dispatch = useDispatch();

  const handleSubmit = credentials => {
    dispatch(logIn(credentials));
  };
  return (
    <AuthFormStyled>
      <h2>LogIn</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
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
    </AuthFormStyled>
  );
};
