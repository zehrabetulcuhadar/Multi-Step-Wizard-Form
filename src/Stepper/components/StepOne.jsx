import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './../CSS/StepOne.css';

const StepOne = ({ onNext, values }) => {
  return (
    <div className="container">
      <div id="logo"> {/* Sol kısım */}
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
      </div>
      <div className="middle-section"> {/* Orta kısım */}
        <div className="form-group">
          <label htmlFor="firstName">Ad</label>
          <Field type="text" name="firstName" 
              id="firstName" placeholder="First Name" 
              value={values.firstName} />
          <ErrorMessage name="firstName" component="div" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Soyad</label>
          <Field type="text" name="lastName" 
              id="lastName" placeholder="Last Name" 
              value={values.lastName} />
          <ErrorMessage name="lastName" component="div" />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <Field type="email" name="email" 
              id="email" placeholder="Email" 
              value={values.email} />
          <ErrorMessage name="email" component="div" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Şifre</label>
          <Field type="password" name="password" 
              id="password" placeholder="Password" 
              value={values.password} />
          <ErrorMessage name="password" component="div" />
        </div>
      </div>
      <div className="right-section"> {/* Sağ kısım */}
        <button type="button" className="next-button" onClick={onNext}>
          İleri
        </button>
      </div>
    </div>
  )
}

export default StepOne


