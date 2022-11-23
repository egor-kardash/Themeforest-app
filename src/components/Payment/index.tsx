import { paymentSchema } from '@/schemas';
import { useFormik } from 'formik';
import { useRef, useState } from 'react';
import Card from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { PaymentForm } from './styled';

export const Payment = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [focus, SetFocus] = useState('');

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        cardNumber: '',
        cardOwner: '',
        expiryDate: '',
        cvc: '',
      },
      validationSchema: paymentSchema,
      onSubmit,
    });

  function onSubmit(values: any, { resetForm }: any) {}

  return (
    <>
      <Card
        number={values.cardNumber}
        name={values.cardOwner}
        expiry={values.expiryDate}
        cvc={values.cvc}
        focused={focus as any}
      />
      <PaymentForm ref={formRef} onSubmit={handleSubmit} autoComplete='off'>
        <input
          value={values.cardNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          type='text'
          name='cardNumber'
          placeholder='Card number'
          className={errors.cardNumber && touched.cardNumber ? 'error' : ''}
          onFocus={(e) => SetFocus(e.target.name)}
        />
        <input
          value={values.cardOwner}
          onChange={handleChange}
          onBlur={handleBlur}
          type='text'
          name='cardOwner'
          placeholder='Card owner'
          className={errors.cardOwner && touched.cardOwner ? 'error' : ''}
          onFocus={(e) => SetFocus(e.target.name)}
        />
        <input
          value={values.expiryDate}
          onChange={handleChange}
          onBlur={handleBlur}
          type='text'
          name='expiryDate'
          placeholder='Expiry date'
          className={errors.expiryDate && touched.expiryDate ? 'error' : ''}
          onFocus={(e) => SetFocus(e.target.name)}
        />
        <input
          value={values.cvc}
          onChange={handleChange}
          onBlur={handleBlur}
          type='text'
          name='cvc'
          placeholder='CVC'
          className={errors.cvc && touched.cvc ? 'error' : ''}
          onFocus={(e) => SetFocus(e.target.name)}
        />
      </PaymentForm>
    </>
  );
};
