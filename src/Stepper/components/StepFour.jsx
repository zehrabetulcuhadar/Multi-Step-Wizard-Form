import React from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import './../CSS/StepFour.css';

const StepFour = ({ onPrev }) => {
  const formik = useFormikContext();

  return (
    <div className="container">
      <div className="left-section"> {/* Sol kısım */}
        <button type="button" className="next-button" onClick={onPrev}>
          Geri
        </button>
      </div>
      <div className="middle-section"> {/* Orta kısım */}
        <div className="form-group">
          <label className="custom-checkbox-label">
            <Field type="checkbox" 
                name="acceptTerms" className="custom-checkbox" />
            <span className="checkmark"></span>
            Şartları ve koşulları okudum. Kabul ediyorum.
          </label>
          <ErrorMessage name="acceptTerms" component="div" />
        </div>
      </div>
      <div className="right-section"> {/* Sağ kısım */}
        <button
          type="button"
          className="next-button"
          onClick={() => formik.submitForm()}
        >
          Gönder
        </button>
      </div>
    </div>
  )
}

export default StepFour



