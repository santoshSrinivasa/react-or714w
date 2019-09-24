import React, { Component } from 'react';
import { render } from 'react-dom';
import Welcome from './Welcome';
import Guest from './Welcome';
import './style.css';

function Login(){
  return (<div>
    <h3>two ways of destructuring props</h3>
    <p>parameterzied</p>
    <Welcome name="santosh" />
    <p>inside function body</p>
    <Guest name="abc" />
    </div>
  )
}

render(<Login />, document.getElementById('root'));
