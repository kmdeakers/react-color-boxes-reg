


function Box( { color, height, width } ) {
    const boxStyles = {
        backgroundColor: color,
        height: `${height}em`,
        width: `${width}em`
    }
    return(
        <div style={boxStyles}>

        </div>
    )
}

export default Box;