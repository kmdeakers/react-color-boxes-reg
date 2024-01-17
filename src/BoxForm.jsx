import React, { useState } from "react";

function BoxForm () {
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

    return (

    )
}
