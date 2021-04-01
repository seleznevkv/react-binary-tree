import React from 'react';
import BinaryNode from '../binary-node/binary-node';
import Line from '../line/line';
import './binary-tree.css';

function BinaryTree({
  nodes,
  onChangeColor,
  onDragStart,
  onDragOver,
  onDragDrop,
  onDragEnd,
  onDrag,
  top,
  left,
}) {
  const elements = nodes.map(item => {
    //creating a node component for each row in node array
    return (
      <div
        key={item.id}
        onDragStart={e => onDragStart(e, item)}
        onDragOver={e => onDragOver(e)}
        onDragEnd={e => onDragEnd(e, item)}
        onDrag={e => onDrag(e, item)}
        onDrop={e => onDragDrop(e, item)}
        draggable={true}
      >
        <BinaryNode {...item} onChangeColor={() => onChangeColor(item.id)} />
      </div>
    );
  });

  return (
    <div className='binary-tree'>
      <svg height='400' width='1200' className='svg-container'>
        <Line
          nodes={nodes.length}
          nodesArr={nodes}
          postop={top}
          posleft={left}
        />
      </svg>
      {elements}
    </div>
  );
}

export default BinaryTree;
