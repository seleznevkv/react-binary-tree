import React, { useState } from 'react'
import BinaryTree from '../binary-tree/binary-tree'
import InputPanel from '../input-panel/input-panel'
import { HuePicker } from 'react-color'

import './app.css'

function App(props) {
    const [nodesArray, setnodesArray] = useState([]);   //array of tree nodes
    const [currentNode, setCurrentNode] = useState(null); //current tree node(used for d&d)
    const [posX, setposX] = useState(0); //current tree node(used for d&d)
    const [posY, setposY] = useState(0); //current tree node(used for d&d)
    const [posTop, setposTop] = useState(0); //current tree node(used for d&d)
    const [posLeft, setposLeft] = useState(0); //current tree node(used for d&d)
    const [leftStyle, setleftStyle] = useState(0); //current tree node(used for d&d)
    const [topStyle, settopStyle] = useState(0); //current tree node(used for d&d)
    const [dragging, setdragging] = useState(false); //current tree node(used for d&d)
    const [currentPos, setCurrentPos] = useState({
        x: 0,
        y: 0,
        dragging: false,
        left: 0,
        top: 0
    }); //current tree node(used for d&d)
    const [color, setcolor] = useState("#ff0000"); //state for changing color

    const infoText = [
        `1 - Укажите количество уровней дерева N (При N > 5 линии отключены);`, 
        `2 - Для изменения цвета узла и его потомков выберите цвет и выполните клик по одному из узлов дерева;`,
        `3 - Вы можете менять узлы дерева местами зажатием ЛКМ.`
    ]; //info arr on page

    const infoTextShow = infoText.map((item, key) => { // creating info p tags
        return (
                <p key={key}>{item}</p>
        );
    })
 
    

    function dragStartHandler (e, node)  { //getting current node on start d&d
        setCurrentNode(node);
        
        // const x = node.left;
        // const y = node.top;
        const x = e.currentTarget.parentNode.getBoundingClientRect().left - e.currentTarget.getBoundingClientRect().left;
        const y = e.currentTarget.parentNode.getBoundingClientRect().top - e.currentTarget.getBoundingClientRect().top;
        
        const dragging = true;
        setposX(x);
        setposY(y);
        setdragging(dragging);
        
       
        console.log('drag', node);
       
    }

    function dragOverHandler(e)  { //canceling standard browser functionality
        e.preventDefault();
    }

    function dragHandler(e, node) {
        if (dragging) {
            let left =  e.pageX - e.currentTarget.getBoundingClientRect().left - 20;
            let top = e.pageY - e.currentTarget.getBoundingClientRect().top +398;
            setposTop(top);
            setposLeft(left);
            
        }
        setnodesArray(nodesArray.map(item => {
            if (item.value === node.value ) {
                return {...item, left:posLeft, top:posTop};
            } return item;
        }))
        
            // if (item.value === currentNode.value) {
            //     return {...item, value:node.value, id:node.id, 
            //             bgcolor:node.bgcolor, leftChild:currentNode.leftChild, rightChild:currentNode.rightChild}
            // }
            
        
       
    }



    function dragEndHandler(e, node) {
        setdragging(false);
        
        
    }

    function dropHandler (e, node)  { //swapping nodes parameters on drop
        e.preventDefault();
        console.log('drop', node);

        // setnodesArray(nodesArray.map(item => {
        //     if (item.value === node.value ) {
        //         return {...item, value:currentNode.value, id:currentNode.id, 
        //                 bgcolor:currentNode.bgcolor, leftChild:node.leftChild, rightChild:node.rightChild}
        //     }
        //     if (item.value === currentNode.value) {
        //         return {...item, value:node.value, id:node.id, 
        //                 bgcolor:node.bgcolor, leftChild:currentNode.leftChild, rightChild:currentNode.rightChild}
        //     }
        //     return item;
        // }))
        
        
    }

    const changeNodeColor = (id) => { //changing color of selected node
        
        const colorChilds = (key, arr, left, right) => {
            for (let i = key; i < arr.length; i++) {
                if (arr[i].value === right) {
                    arr[i].bgcolor = color;
                    colorChilds(i, arr, arr[i].leftChild, arr[i].rightChild);
                } else
                if (arr[i].value === left) {
                    arr[i].bgcolor = color;
                    colorChilds(i, arr, arr[i].leftChild, arr[i].rightChild);
                } else {
                    continue;
                }
            }
        }
        
        setnodesArray(() => {
            const index = nodesArray.findIndex(elem => elem.id === id);
            let newArr = [...nodesArray];
            let right =  newArr[index].rightChild;
            let left =  newArr[index].leftChild;
            newArr[index].bgcolor = color;
            colorChilds(index, newArr, left, right);
            return newArr;
        })
    }

    const createNodeTree = (nodes) => { //creating array of nodes using it's length value
        setnodesArray(() => {

            let newArr =    [],
                top =       60, 
                left =      585,
                b =         left,
                k =         1,
                rightNode = left,
                value =     0,
                parent = value;
            
            for (let i = 0; i < nodes; i++) {
                for (let y = 1; y <= k; y++) {
                    if (y === 1) {
                        newArr.push({value, top, left:rightNode,  bgcolor: '#fff', id: value, 
                        leftChild: value * 2 + 1, rightChild: value * 2 + 2});
                        b = rightNode;
                    } else { 
                        b += left/k*2;
                        newArr.push({value, top, left:b,  bgcolor: '#fff', id: value, 
                        leftChild: value * 2 + 1, rightChild: value * 2 + 2});
                    }
                    
                    value++;
                    parent++;
                }
                
                rightNode -= left/k/2;
                k*=2;
                top += 50;
            }
             
            return newArr;
        })  

        // setnodesArray(nodesArray.map((item) => {
        //     let value = item.value;
            
        //     return {...item, leftChild : value * 2 + 1, rightChild : value * 2 + 2};
        // }));
        
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
                    onDragEnd={dragEndHandler}
                    onDrag={dragHandler}
                    onDragDrop={dropHandler}
                    top={posTop}
                    left={posLeft}
                />
            </div>
            </>
            
    )  
}

export default App

