import React from 'react'
import BinaryNode from '../binary-node/binary-node'
import Line from '../line/line'
import './binary-tree.css'

function BinaryTree({nodes, onChangeColor, onDragStart, onDragOver, onDragDrop}) {
        
    const elements = nodes.map((item) => {
        return (
            <div key={item.id}
                onDragStart={ () => onDragStart(item)}
                onDragOver={ (e) => onDragOver(e)}
                onDrop={ (e) =>  onDragDrop(e, item)}
                draggable={true}
            >   
                    <BinaryNode 
                        {...item}  
                        onChangeColor={() => onChangeColor(item.id)}
                    />
           </div>       
        )
    });

    return (
        <div className="binary-tree">
            <svg height="400" width="1200" className="svg-container">
            <Line nodes={nodes.length} nodesArr={nodes}/>

            </svg>
            {elements}

        </div>
        
    )
}

export default BinaryTree