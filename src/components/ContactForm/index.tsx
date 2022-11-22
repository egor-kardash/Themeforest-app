import React, { FormEvent, useRef } from 'react';

import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import { useMediaQuery } from 'react-responsive';

import { contactUsSchema } from '@/schemas';

import {
  EmailField,
  EmailNameWrapper,
  FormContainer,
  MessageField,
  NameField,
  SendButton,
  SubjectField,
} from './styled';

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const isTalbetOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        name: '',
        theme: '',
        message: '',
      },
      validationSchema: contactUsSchema,
      onSubmit,
    });

  function onSubmit(values: any, { resetForm }: any) {
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID as string,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID as string,
        formRef.current as HTMLFormElement,
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY,
      )
      .then(
        () => resetForm(),
        (error) => {
          console.log(error.text);
          resetForm();
        },
      );
  }

  return (
    <FormContainer ref={formRef} onSubmit={handleSubmit} autoComplete='off'>
      <EmailField
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        type='email'
        name='email'
        placeholder='Your Email'
        className={errors.email && touched.email ? 'error' : ''}
      />

      <NameField
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        type='text'
        name='name'
        placeholder='Your Name'
        className={errors.name && touched.name ? 'error' : ''}
      />
      <SubjectField
        value={values.theme}
        onChange={handleChange}
        onBlur={handleBlur}
        type='text'
        name='theme'
        placeholder='Theme'
        className={errors.theme && touched.theme ? 'error' : ''}
      />
      <MessageField
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        name='message'
        placeholder='Your message'
        className={errors.message && touched.message ? 'error' : ''}
      />
      <SendButton type='submit'>
        {isTalbetOrMobile ? 'Send Message' : 'Send'}
      </SendButton>
    </FormContainer>
  );
};
