import React from 'react';

function Line({ nodes, nodesArr }) {
  let newArr = [];

  const colorChilds = (key, arr, left, right, posx, posy) => {
    for (let i = key; i < arr.length; i++) {
      if (arr[i].value === right) {
        newArr.push(
          <line
            key={arr[i].value}
            x1={posx + 15}
            y1={posy + 15}
            x2={arr[i].left + 15}
            y2={arr[i].top + 15}
            stroke='black'
          />
        );
        colorChilds(
          i,
          arr,
          arr[i].leftChild,
          arr[i].rightChild,
          arr[i].left,
          arr[i].top
        );
      } else if (arr[i].value === left) {
        newArr.push(
          <line
            key={arr[i].value}
            x1={posx + 15}
            y1={posy + 15}
            x2={arr[i].left + 15}
            y2={arr[i].top + 15}
            stroke='black'
          />
        );
        colorChilds(
          i,
          arr,
          arr[i].leftChild,
          arr[i].rightChild,
          arr[i].left,
          arr[i].top
        );
      } else {
        continue;
      }
    }
  };

  if (nodesArr.length !== 0)
    colorChilds(
      0,
      nodesArr,
      nodesArr[0].leftChild,
      nodesArr[0].rightChild,
      nodesArr[0].left,
      nodesArr[0].top
    );

  return <>{newArr}</>;
}

export default Line;
