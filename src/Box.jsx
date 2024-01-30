


function Box( { id, backgroundColor = "red", height = 5, width = 5, remove } ) {
    const boxStyles = {
        backgroundColor: backgroundColor,
        height: `${height}em`,
        width: `${width}em`
    }

    function handleRemove() {
        remove(id);
    }
    return(
        <div >
            <div className="Box-box"
                style={boxStyles}
            />
            <button
                className="Box-removeBtn"
                onClick={handleRemove}>
            Remove The Box!
            </button>    
        </div>
    )
}

export default Box;