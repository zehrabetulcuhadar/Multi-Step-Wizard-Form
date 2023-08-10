import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './../CSS/StepThree.css';

const StepThree = ({ onPrev, onNext }) => {
  return (
    <div className="container">
      <div className="left-section"> {/* Sol kısım */}
        <button type="button" className="next-button" onClick={onPrev}>
          Geri
        </button>
      </div>
      <div className="middle-section"> {/* Orta kısım */}
        <div className="form-group">
          <label htmlFor="cardNumber">Kart Numarası</label>
          <Field type="text" name="cardNumber" id="cardNumber" placeholder="Card Number" />
          <ErrorMessage name="cardNumber" component="div" />
        </div>
        <div className="form-group">
          <label htmlFor="cardHolderName">Kart Sahibinin Adı</label>
          <Field type="text" name="cardHolderName" id="cardHolderName" placeholder="Card Holder Name" />
          <ErrorMessage name="cardHolderName" component="div" />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Son Kullanma Tarihi <br />(MM/YY)</label>
          <Field type="text" name="expiryDate" id="expiryDate" placeholder="Expiry Date (MM/YY)" />
          <ErrorMessage name="expiryDate" component="div" />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <Field type="text" name="cvv" id="cvv" placeholder="CVV" />
          <ErrorMessage name="cvv" component="div" />
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

export default StepThree