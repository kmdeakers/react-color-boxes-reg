/** BoxList  contains all boxes
 * 
 * Props: none
 * 
 * State: none
 * 
 * App --> BoxList
 */

import Box from "./Box";
import React, { useState } from "react";

function BoxList() {
    console.log("in BoxList");
    const [ boxes, setBoxes ] = useState([]);
    console.log('boxes: ' ,boxes)
    return(
        <div>
            <Box/>
        </div>
    )
}

export default BoxList;
