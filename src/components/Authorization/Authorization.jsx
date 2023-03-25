import { Formik, Field, Form } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/options';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { AuthFormStyled } from './Authorization.styled';

export const Authorization = ({ closeModal }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts', { replace: false });
      closeModal();
    }
  }, [closeModal, isLoggedIn, navigate]);

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
