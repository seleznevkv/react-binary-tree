import React from 'react'
import './binary-node.css'

function BinaryNode(props) {

    
        const {value, top, left, bgcolor, onChangeColor} = props;

        let styles = {
            top: `${top}px`,
            left: `${left}px`,
            background: `${bgcolor}`
        }

        let classNames = "node";
 
        return (
            <div 
                onClick={onChangeColor} 
                className={classNames} 
                style={styles} 
            >
                <span>{value}</span>
            </div>
        )    
}

export default BinaryNode

