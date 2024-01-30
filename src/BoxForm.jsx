import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function BoxForm ({ createBox }) {
    const [formData, setFormData ] = useState({
        boxColor: "",
        boxWidth: "",
        boxHeight: ""
    });

    function handleChange(evt) {
        const fieldName = evt.target.name;
        const value = evt.target.value;

        setFormData(currData => {
            currData[fieldName] = value;
            return {...currData};
        });
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        createBox({...formData, id: uuid() });
        setFormData({boxColor: "", boxWidth: "", boxHeight: ""})
    }

    return (
        <div className="BoxForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxColor">Color</label>
                <input
                    id="boxColor"
                    name="boxColor"
                    value={formData.boxColor}
                    onChange={handleChange}
                />

                <label htmlFor="boxWidth">Width</label>
                <input
                    id="boxWidth"
                    name="boxWidth"
                    value={formData.boxWidth}
                    onChange={handleChange}
                />

                <label htmlFor="boxHeight">Height</label>
                <input
                    id="boxHeight"
                    name="boxHeight"
                    value={formData.boxHeight}
                    onChange={handleChange}
                />
                <button className="BoxForm-addBtn">Add new box!</button>
            </form>
        </div>
    )
}

export default BoxForm