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
import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks';
import { addContact } from 'redux/contacts/operations';

export const ContactForm = () => {
  const dispach = useDispatch();
  const { allContacts, isLoadingContacts } = useContacts();

  const initialValues = { name: '', number: '' };
  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required('It is required'),
    number: yup
      .number()
      .required('It is required')
      .positive()
      .integer()
      .typeError(
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      ),
  });

  const checkingContacts = name => {
    return allContacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const handleSubmit = (values, { resetForm }) => {
    const isContactsInclude = checkingContacts(values.name);

    if (isContactsInclude) {
      alert(`${values.name} is alredy in contacts.`);
      return;
    }

    dispach(addContact(values));

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
          <Input type="tel" name="number" />
          <ErrorMessage name="number" component={ErrorMessageStyled} />
        </Label>

        {
          <FormBtn type="submit" disabled={isLoadingContacts}>
            {isLoadingContacts ? 'adding...' : 'Add contact'}
          </FormBtn>
        }
      </FormStyled>
    </Formik>
  );
};
