import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './../CSS/StepTwo.css';

const StepTwo = ({ onPrev, onNext, values }) => {
  return (
    <div className="container">
      <div className="left-section"> {/* Sol kısım */}
        <button type="button" className="next-button" onClick={onPrev}>
          Geri
        </button>
      </div>
      <div className="middle-section"> {/* Orta kısım */}
        <div className="form-group">
          <label htmlFor="city">İl</label>
          <Field type="text" name="city" id="city" placeholder="City" value={values.city} />
          <ErrorMessage name="city" component="div" />
        </div>
        <div className="form-group">
          <label htmlFor="district">İlçe</label>
          <Field type="text" name="district" id="district" placeholder="District" value={values.district} />
          <ErrorMessage name="district" component="div" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Adres</label>
          <Field type="text" name="address" id="address" placeholder="Address" value={values.address}/>
          <ErrorMessage name="address" component="div" />
        </div>
        <div className="form-group">
          <label htmlFor="apartmentNumber">Apartman Numarası</label>
          <Field type="text" name="apartmentNumber" id="apartmentNumber" placeholder="Apartment Number" value={values.apartmentNumber} />
          <ErrorMessage name="apartmentNumber" component="div" />
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

export default StepTwo