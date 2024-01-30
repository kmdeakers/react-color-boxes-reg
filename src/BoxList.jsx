/** BoxList  contains all boxes
 * 
 * Props: none
 * 
 * State: none
 * 
 * App --> BoxList
 */

import Box from "./Box";
import BoxForm from "./BoxForm";
import React, { useState } from "react";

function BoxList() {
    console.log("in BoxList");
    const [ boxes, setBoxes ] = useState([]);
    console.log('boxes: ' ,boxes)

    /** Add new box */
    function addBox(newBox) {
        setBoxes(boxes => [...boxes, newBox]);
    }

    /** remove box */
    function remove(id) {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    return(
        <div>
            <BoxForm createBox={addBox} />
            {boxes.map(({id, width, height, backgroundColor}) =>(
                <Box
                    key={id}
                    id={id}
                    width={width}
                    height={height}
                    remove={remove}
                    backgroundColor={backgroundColor}
                />    

            ))}
        </div>
    )
}

export default BoxList;
