import React, { Component } from 'react';
import { render } from 'react-dom';
import Welcome from './Welcome';
import './style.css';

function Login(){
  return (
    <Welcome name="santosh" />
  )
}

render(<Login />, document.getElementById('root'));
