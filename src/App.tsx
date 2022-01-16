import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from './router';
import { FormProvider } from './contexts/FormContext';

function App() {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
}

export default App;
