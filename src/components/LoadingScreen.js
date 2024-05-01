import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const LoadingScreen = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark">
      <img src="/favicon.ico" alt="Favicon" className="m-auto" style={{ width: '200px', height: '200px', marginTop: '250px' }} />
      <div className="spinner-border text-light m-auto" style={{marginLeft:'48%', marginTop:'10%'}}>
        <TailSpin height={80} width={80} color="#1E90FF" ariaLabel="loading" />
      </div>
    </div>
  );
};

export default LoadingScreen;
