import { Formik, Field, Form } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/auth/options';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import { RegFormStyled } from './Registration.styled';

export const Registration = ({ closeModal }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts', { replace: true });
      closeModal();
    }
  }, [closeModal, isLoggedIn, navigate]);

  const handleSubmit = credentials => {
    dispatch(register(credentials));
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
