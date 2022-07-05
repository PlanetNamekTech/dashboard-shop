const Button = ({ bgColor, color, size, text, borderRadius}) => {
    return ( <div>
        <button
        type="button"
        style={{ backgroundColor: bgColor, color, borderRadius }}
        className={`text-${size} p-3 hover:dropshadow-xl`}>
            {text}

        </button>
    </div> );
}
 
export default Button;