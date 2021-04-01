import React from 'react';
import './binary-node.css';

function BinaryNode(props) {
  const { value, top, left, bgcolor, onChangeColor } = props;

  let styles = {
    top: `${top}px`, //apply top position of selected node
    left: `${left}px`, //apply left position of selected node//
    background: `${bgcolor}`, //apply color on selected node
  };

  return (
    <div onClick={onChangeColor} className='node' style={styles}>
      <span>{value}</span>
    </div>
  );
}

export default BinaryNode;
