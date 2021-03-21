import React, { useState } from 'react'
import BinaryTree from '../binary-tree/binary-tree'
import InputPanel from '../input-panel/input-panel'
import { HuePicker } from 'react-color'

import './app.css'

function App(props) {
    const [nodesArray, setnodesArray] = useState([]);
    const [currentNode, setCurrentNode] = useState(null);
    const [color, setcolor] = useState("#ff0000");

    const infoText = [
        `1 - Укажите количество уровней дерева N (При N > 5 линии отключены);`, 
        `2 - Выберите цвет и выполните клик по одному из узлов дерева для изменения цвета;`,
        `3 - Вы можете менять узлы дерева местами зажатием ЛКМ.`
    ];

    const infoTextShow = infoText.map((item, key) => {
        return (
                <p key={key}>{item}</p>
        );
    })
 
    function dragStartHandler (node)  {
        setCurrentNode(node);
        console.log('drag', node);
    }

    function dragOverHandler(e)  {
        e.preventDefault();
    }

    function dropHandler (e, node)  {
        e.preventDefault();
        console.log('drop', node);
        setnodesArray(nodesArray.map(item => {
            if (item.value === node.value ) {
                return {...item, value:currentNode.value, id:currentNode.id, 
                        bgcolor:currentNode.bgcolor}
            }
            if (item.value === currentNode.value) {
                return {...item, value:node.value, id:node.id, 
                        bgcolor:node.bgcolor}
            }
            return item;
        }))
        
    }

    const changeNodeColor = (id) => {
        setnodesArray(() => {
            const index = nodesArray.findIndex(elem => elem.id === id);
            let newArr = [...nodesArray];
            newArr[index].bgcolor = color;
            return newArr;
        })
    }

    const createNodeTree = (nodes) => {
        setnodesArray(() => {

            let newArr =    [],
                top =       60, 
                left =      585,
                b =         left,
                k =         1,
                rightNode = left,
                value =     0;
            
            for (let i = 0; i < nodes; i++) {
                for (let y = 1; y <= k; y++) {
                    if (y === 1) {
                        newArr.push({value, top, left:rightNode,  bgcolor: '#fff', id: value});
                        b = rightNode;
                    } else { 
                        b += left/k*2;
                        newArr.push({value, top, left:b,  bgcolor: '#fff', id: value});
                    }
                    value++;
                }
                rightNode -= left/k/2;
                k*=2;
                top += 50;
            }
             
            return newArr;
        })  
        
    }


    return (
            <>
            <div className="wrapper">
                <div className="control-panel">
                    <InputPanel onInput={createNodeTree} />
                    <HuePicker   
                        className="color-picker"
                        color={color}
                        onChange={(updateColor) => setcolor(updateColor.hex)}
                    /> 
                </div>
                <div className="info-panel">
                    {infoTextShow}
                </div>
                

                <BinaryTree 
                    nodes={nodesArray}  
                    onChangeColor={changeNodeColor}
                    onDragStart={dragStartHandler}
                    onDragOver={dragOverHandler}
                    onDragDrop={dropHandler}
                />
            </div>
            </>
            
    )  
}

export default App

