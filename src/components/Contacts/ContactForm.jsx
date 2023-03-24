import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  Input,
  FormStyled,
  Label,
  ErrorMessageStyled,
  FormBtn,
} from 'components/Contacts/';
import {
  useAddContactsMutation,
  useGetContactsQuery,
} from 'redux/contactSlice';

export const ContactForm = () => {
  const { data } = useGetContactsQuery();

  const initialValues = { name: '', phone: '' };
  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required('It is required'),
    phone: yup
      .number()
      .required('It is required')
      .positive()
      .integer()
      .typeError(
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      ),
  });

  const checkingContacts = name => {
    return data.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const [addContacts, { isLoading }] = useAddContactsMutation();

  const handleSubmit = (values, { resetForm }) => {
    const isContactsInclude = checkingContacts(values.name);

    if (isContactsInclude) {
      alert(`${values.name} is alredy in contacts.`);
      return;
    }

    addContacts(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <Label>
          Name
          <Input type="text" name="name" />
          <ErrorMessage name="name" component={ErrorMessageStyled} />
        </Label>
        <Label>
          Number
          <Input type="tel" name="phone" />
          <ErrorMessage name="phone" component={ErrorMessageStyled} />
        </Label>

        {
          <FormBtn type="submit" disabled={isLoading}>
            {isLoading ? 'adding...' : 'Add contact'}
          </FormBtn>
        }
      </FormStyled>
    </Formik>
  );
};
