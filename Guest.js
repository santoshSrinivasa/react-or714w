import React from 'react';

function Guest(props){
  const {name} = props;
  return (
    <div>
    <h2>{name}</h2>
    </div>
  )
}

export default Guest
