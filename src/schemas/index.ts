import * as yup from 'yup';

export const contactUsSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  name: yup
    .string()
    .min(3, 'Minimun 3 characters')
    .max(16, 'Maximum 16 characters')
    .required('Name is required'),
  theme: yup
    .string()
    .min(3, 'Minimun 3 characters')
    .max(16, 'Maximum 20 characters')
    .required('Theme is required'),
  message: yup
    .string()
    .min(3, 'Minimun 3 characters')
    .max(16, 'Maximum 94 characters')
    .required('Message is required'),
});
