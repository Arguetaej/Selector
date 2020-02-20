import React from 'react';

const Shape = (props) =>{
  const shape = props.shape;
  const selectedShape = props.selectShape;


  return (
    <div className={shape} onClick={() => selectedShape(shape)}/>
  )
};

export default Shape
