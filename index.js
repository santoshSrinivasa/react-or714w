import React, { Component } from 'react';
import { render } from 'react-dom';
import Welcome from './Welcome';
import Guest from './Welcome';
import './style.css';

function Login(){
  return (<div>
    <h3>two ways of destructuring props</h3>
    <h3>parameterzied</h3>
    <Welcome name="santosh" />
    <h3>inside function body</h3>
    <Guest name="abc" />
    </div>
  )
}

render(<Login />, document.getElementById('root'));
