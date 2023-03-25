import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/options';
import { AuthFormStyled } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = credentials => {
    dispatch(logIn(credentials));
  };
  return (
    <AuthFormStyled>
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
