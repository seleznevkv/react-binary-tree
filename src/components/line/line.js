import React from 'react'

function Line({nodes,nodesArr}) {

let newArr = [];

    const colorChilds = (key, arr, left, right , posx, posy) => {
        for (let i = key; i < arr.length; i++) {
            if (arr[i].value === right) {
                newArr.push(
                    <line key={arr[i].value} x1={posx + 15} y1={posy + 15} x2={arr[i].left + 15} y2={arr[i].top + 15} stroke="black"/>
                )
                colorChilds(i, arr, arr[i].leftChild, arr[i].rightChild, arr[i].left, arr[i].top);
            } else
            if (arr[i].value === left) {
                newArr.push(
                    <line key={arr[i].value} x1={posx + 15} y1={posy + 15} x2={arr[i].left + 15} y2={arr[i].top + 15} stroke="black"/>
                )
                colorChilds(i, arr, arr[i].leftChild, arr[i].rightChild, arr[i].left, arr[i].top);
            } else {
                continue;
            }
        }
    }
    

        
        colorChilds(0, nodesArr, 1, 2, 585, 60);




return (
    <>
    {newArr}
    </>
);

    // switch (nodes) { //very BAD lines realization code
    //     case 3:
            
    //         return (
    //             <>  
    //              <line x1={nodesArr[0].left + 15} y1={nodesArr[0].top + 15} x2={nodesArr[1].left + 15} y2={nodesArr[1].top + 15} stroke="black"/>
    //                 <line x1={nodesArr[0].left + 15} y1={nodesArr[0].top + 15} x2={nodesArr[2].left + 15} y2={nodesArr[2].top + 15} stroke="black"/>
    //                 {/* <line x1="600" y1="70" x2="300" y2="120" stroke="black"/>
    //                 <line x1="600" y1="70" x2="900" y2="120" stroke="black"/>    */}
    //             </>
    //          )
    //     case 7:
    //         return (
    //             <>  

    //             <line x1={nodesArr[0].left + 15} y1={nodesArr[0].top + 15} x2={nodesArr[1].left + 15} y2={nodesArr[1].top + 15} stroke="black"/>
    //             <line x1={nodesArr[0].left + 15} y1={nodesArr[0].top + 15} x2={nodesArr[2].left + 15} y2={nodesArr[2].top + 15} stroke="black"/>

    //             <line x1={nodesArr[1].left + 15} y1={nodesArr[1].top + 15} x2={nodesArr[3].left + 15} y2={nodesArr[3].top + 15} stroke="black"/>
    //             <line x1={nodesArr[1].left + 15} y1={nodesArr[1].top + 15} x2={nodesArr[4].left + 15} y2={nodesArr[4].top + 15} stroke="black"/>

    //             <line x1={nodesArr[2].left + 15} y1={nodesArr[1].top + 15} x2={nodesArr[5].left + 15} y2={nodesArr[5].top + 15} stroke="black"/>
    //             <line x1={nodesArr[2].left + 15} y1={nodesArr[1].top + 15} x2={nodesArr[6].left + 15} y2={nodesArr[6].top + 15} stroke="black"/>


    //                 {/* <line x1="600" y1="70" x2="300" y2="120" stroke="black"/>
    //                 <line x1="600" y1="70" x2="900" y2="120" stroke="black"/>   

    //                 <line x1="300" y1="120" x2="150" y2="170" stroke="black"/>
    //                 <line x1="300" y1="120" x2="450" y2="170" stroke="black"/>   
    //                 <line x1="900" y1="120" x2="750" y2="170" stroke="black"/>
    //                 <line x1="900" y1="120" x2="1050" y2="170" stroke="black"/>   */}
    //             </>
    //          )
        
    //     case 15:
    //         return (
    //             <>
    //             <line x1={nodesArr[0].left + 15} y1={nodesArr[0].top + 15} x2={nodesArr[1].left + 15} y2={nodesArr[1].top + 15} stroke="black"/>
    //             <line x1={nodesArr[0].left + 15} y1={nodesArr[0].top + 15} x2={nodesArr[2].left + 15} y2={nodesArr[2].top + 15} stroke="black"/>

    //             <line x1={nodesArr[1].left + 15} y1={nodesArr[1].top + 15} x2={nodesArr[3].left + 15} y2={nodesArr[3].top + 15} stroke="black"/>
    //             <line x1={nodesArr[1].left + 15} y1={nodesArr[1].top + 15} x2={nodesArr[4].left + 15} y2={nodesArr[4].top + 15} stroke="black"/>

    //             <line x1={nodesArr[2].left + 15} y1={nodesArr[1].top + 15} x2={nodesArr[5].left + 15} y2={nodesArr[5].top + 15} stroke="black"/>
    //             <line x1={nodesArr[2].left + 15} y1={nodesArr[1].top + 15} x2={nodesArr[6].left + 15} y2={nodesArr[6].top + 15} stroke="black"/>

                    
    //                 {/* <line x1="600" y1="70" x2="300" y2="120" stroke="black"/>
    //                 <line x1="600" y1="70" x2="900" y2="120" stroke="black"/>   

    //                 <line x1="300" y1="120" x2="150" y2="170" stroke="black"/>
    //                 <line x1="300" y1="120" x2="450" y2="170" stroke="black"/>   
    //                 <line x1="900" y1="120" x2="750" y2="170" stroke="black"/>
    //                 <line x1="900" y1="120" x2="1050" y2="170" stroke="black"/> 

    //                 <line x1="150" y1="170" x2="75" y2="220" stroke="black"/>
    //                 <line x1="150" y1="170" x2="225" y2="220" stroke="black"/>   
    //                 <line x1="450" y1="170" x2="525" y2="220" stroke="black"/>
    //                 <line x1="450" y1="170" x2="375" y2="220" stroke="black"/> 
                    
    //                 <line x1="750" y1="170" x2="675" y2="220" stroke="black"/>
    //                 <line x1="750" y1="170" x2="825" y2="220" stroke="black"/>   
    //                 <line x1="1050" y1="170" x2="1125" y2="220" stroke="black"/>
    //                 <line x1="1050" y1="170" x2="975" y2="220" stroke="black"/>  */}


    //             </>
    //          )
            
        
    //     case 31:
    //         return (
    //             <>
    //                 <line x1="600" y1="70" x2="300" y2="120" stroke="black"/>
    //                 <line x1="600" y1="70" x2="900" y2="120" stroke="black"/>   
    
    //                 <line x1="300" y1="120" x2="150" y2="170" stroke="black"/>
    //                 <line x1="300" y1="120" x2="450" y2="170" stroke="black"/>   
    //                 <line x1="900" y1="120" x2="750" y2="170" stroke="black"/>
    //                 <line x1="900" y1="120" x2="1050" y2="170" stroke="black"/> 
    
    //                 <line x1="150" y1="170" x2="75" y2="220" stroke="black"/>
    //                 <line x1="150" y1="170" x2="225" y2="220" stroke="black"/>   
    //                 <line x1="450" y1="170" x2="525" y2="220" stroke="black"/>
    //                 <line x1="450" y1="170" x2="375" y2="220" stroke="black"/> 
                        
    //                 <line x1="750" y1="170" x2="675" y2="220" stroke="black"/>
    //                 <line x1="750" y1="170" x2="825" y2="220" stroke="black"/>   
    //                 <line x1="1050" y1="170" x2="1125" y2="220" stroke="black"/>
    //                 <line x1="1050" y1="170" x2="975" y2="220" stroke="black"/> 

    //                 <line x1="75" y1="220" x2="38" y2="270" stroke="black"/>
    //                 <line x1="75" y1="220" x2="113" y2="270" stroke="black"/>

    //                 <line x1="225" y1="220" x2="187" y2="270" stroke="black"/>   
    //                 <line x1="225" y1="220" x2="263" y2="270" stroke="black"/>  

    //                 <line x1="525" y1="220" x2="487" y2="270" stroke="black"/> 
    //                 <line x1="525" y1="220" x2="563" y2="270" stroke="black"/> 

    //                 <line x1="375" y1="220" x2="337" y2="270" stroke="black"/> 
    //                 <line x1="375" y1="220" x2="413" y2="270" stroke="black"/> 

    //                 <line x1="675" y1="220" x2="637" y2="270" stroke="black"/>
    //                     <line x1="675" y1="220" x2="713" y2="270" stroke="black"/>

    //                 <line x1="825" y1="220" x2="787" y2="270" stroke="black"/>
    //                 <line x1="825" y1="220" x2="863" y2="270" stroke="black"/>

    //                 <line x1="975" y1="220" x2="937" y2="270" stroke="black"/>
    //                 <line x1="975" y1="220" x2="1013" y2="270" stroke="black"/>
                        
    //                 <line x1="1125" y1="220" x2="1087" y2="270" stroke="black"/>
    //                 <line x1="1125" y1="220" x2="1163" y2="270" stroke="black"/>
    
    
    //                 </>
    //     )
        
    //     case 63:
    //         return (
    //             <>
    //                 <line x1="600" y1="70" x2="300" y2="120" stroke="black"/>
    //                 <line x1="600" y1="70" x2="900" y2="120" stroke="black"/>   
    
    //                 <line x1="300" y1="120" x2="150" y2="170" stroke="black"/>
    //                 <line x1="300" y1="120" x2="450" y2="170" stroke="black"/>   
    //                 <line x1="900" y1="120" x2="750" y2="170" stroke="black"/>
    //                 <line x1="900" y1="120" x2="1050" y2="170" stroke="black"/> 
    
    //                 <line x1="150" y1="170" x2="75" y2="220" stroke="black"/>
    //                 <line x1="150" y1="170" x2="225" y2="220" stroke="black"/>   
    //                 <line x1="450" y1="170" x2="525" y2="220" stroke="black"/>
    //                 <line x1="450" y1="170" x2="375" y2="220" stroke="black"/> 
                        
    //                 <line x1="750" y1="170" x2="675" y2="220" stroke="black"/>
    //                 <line x1="750" y1="170" x2="825" y2="220" stroke="black"/>   
    //                 <line x1="1050" y1="170" x2="1125" y2="220" stroke="black"/>
    //                 <line x1="1050" y1="170" x2="975" y2="220" stroke="black"/> 

    //                 <line x1="75" y1="220" x2="38" y2="270" stroke="black"/>
    //                 <line x1="75" y1="220" x2="113" y2="270" stroke="black"/>

    //                 <line x1="225" y1="220" x2="187" y2="270" stroke="black"/>   
    //                 <line x1="225" y1="220" x2="263" y2="270" stroke="black"/>  

    //                 <line x1="525" y1="220" x2="487" y2="270" stroke="black"/> 
    //                 <line x1="525" y1="220" x2="563" y2="270" stroke="black"/> 

    //                 <line x1="375" y1="220" x2="337" y2="270" stroke="black"/> 
    //                 <line x1="375" y1="220" x2="413" y2="270" stroke="black"/> 

    //                 <line x1="675" y1="220" x2="637" y2="270" stroke="black"/>
    //                     <line x1="675" y1="220" x2="713" y2="270" stroke="black"/>

    //                 <line x1="825" y1="220" x2="787" y2="270" stroke="black"/>
    //                 <line x1="825" y1="220" x2="863" y2="270" stroke="black"/>

    //                 <line x1="975" y1="220" x2="937" y2="270" stroke="black"/>
    //                 <line x1="975" y1="220" x2="1013" y2="270" stroke="black"/>
                        
    //                 <line x1="1125" y1="220" x2="1087" y2="270" stroke="black"/>
    //                 <line x1="1125" y1="220" x2="1163" y2="270" stroke="black"/>
    
    
    //                 </>
    //     )
    
    //     default:  return (
    //         <>  
    //         </>
    //      )      
    // }
}

export default Line
