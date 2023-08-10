/* eslint-disable no-undef */
import React, { useState, useRef } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { StepOne, StepTwo, StepThree, StepFour } from '../src/Stepper';
import './App.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([false, false, false, false]);
  const formikRef = useRef(null);

  const handleNext = async () => {
    Object.keys(formikRef.current.values).forEach((field) => {
      formikRef.current.setFieldTouched(field, true);
    });

    const errors = await formikRef.current.validateForm();
    if (Object.keys(errors).length === 0) {
      const newStep = step + 1;
      setStep(newStep);
      setCompletedSteps((prevCompletedSteps) => {
        const updatedSteps = [...prevCompletedSteps];
        updatedSteps[step - 1] = true;
        return updatedSteps;
      });
    }
  };

  const handlePrev = () => {
    const newStep = step - 1;
    setStep(newStep);
    setCompletedSteps((prevCompletedSteps) => {
      const updatedSteps = [...prevCompletedSteps];
      updatedSteps[step - 1] = false; 
      return updatedSteps;
    });
  };
  
  
  const handleSubmit = 
  (values, { setSubmitting, resetForm }) => {
    formikRef.current.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        console.log(values);
        alert('Başarıyla gönderildi.');
        resetForm();
        setStep(1);
        setCompletedSteps([false, false, false, false]);
      } else {
        alert('Lütfen zorunlu alanları doldurun!');
      }
      setSubmitting(false);
    });
  };
  
  const getCurrentStepValidationSchema = () => {
    if (step === 1) {
      return Yup.object({
        firstName: Yup.string().required('Lütfen adınızı giriniz.'),
        lastName: Yup.string().required('Lütfen soyadınızı giriniz.'),
        email: Yup.string().email('Geçersiz email adresi.').required('Email adresi zorunludur.'),
        password: Yup.string().required('Şifre zorunludur.').min(8, 'Şifre en az 8 karakter olmalıdır.'),
      });
    } else if (step === 2) {
      return Yup.object({
        city: Yup.string().required('Lütfen yaşadığınız şehri belirtin.'),
        district: Yup.string().required('Bölge zorunludur.'),
        address: Yup.string().required('Adres zorunludur.'),
        apartmentNumber: Yup.string().required('Daire numarası zorunludur.'),
      });
    } else if (step === 3) {
      return Yup.object({
        cardNumber: Yup.string()
          .required('Kart numarası zorunludur.')
          .matches(/^\d{16}$/,
          'Kart numarası 16 basamaklı olmalıdır ve sadece rakamlardan oluşmalıdır.'),
        cardHolderName: Yup.string().required('Kart sahibi adı zorunludur.'),
        expiryDate: Yup.string()
          .required('Son kullanma tarihi zorunludur.')
          .matches(/^(0[1-9]|1[0-2])\/\d{2}$/,
           'Lütfen MM/YY formatında giriniz.'),
        cvv: Yup.string().required('CVV zorunludur.')
        .matches(/^\d{3}$/, 'CVV 3 basamaklı olmalıdır.'),
      });
    } else {
      return Yup.object({
        acceptTerms: Yup.boolean().oneOf([true], 'Şartları kabul etmelisiniz.'),
      });
    }
  };

  const steps = [
    <StepOne />,
    <StepTwo />,
    <StepThree />,
    <StepFour />,
  ];

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    city: '',
    district: '',
    address: '',
    apartmentNumber: '',
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: '',
    acceptTerms: false,
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {steps.map((_, index) => (
          <div
            key={index}
            style={{
              width: '40px',
              height: '80px',
              background: completedSteps[index] ? '#6b78d8' : '#3c4a88',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: index + 1 === step ? '#a4aaff' : 'black',
              fontSize: '20px',
              fontWeight: 'bold',
              margin: '0 20px',
            }}
          >
            {completedSteps[index] ? '✔' : index + 1 }
          </div>
        ))}
      </div>
      
      <Formik
      initialValues={initialValues}
      validationSchema={getCurrentStepValidationSchema()}
      onSubmit={handleSubmit}
      innerRef={formikRef}
    >
      {({ values, errors, isSubmitting }) => (
          <Form>
            {/* <div style={{color: '#fff'}}>
              {JSON.stringify(values, 2, null)}
              <br/>
              {JSON.stringify(errors, 2, null)}
            </div> */}
            {step === 1 && (
              <StepOne
                onNext={handleNext}
                values={values}
                step={step}
              />
            )}
            {step === 2 && (
              <StepTwo
                onPrev={handlePrev}
                onNext={handleNext}
                values={values}
                step={step}
              />
            )}
            {step === 3 && (
              <StepThree
                onPrev={handlePrev}
                onNext={handleNext}
                values={values}
                step={step}
              />
            )}
            {step === 4 && (
              <StepFour
                onPrev={handlePrev}
                values={values}
                step={step}
              />
            )}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default App
