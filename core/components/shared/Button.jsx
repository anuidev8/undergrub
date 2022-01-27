

const Button = ({ title, style, className, type = "button", onClick }) => {

    return (
        <button onClick={onClick} type={type} style={style} className={`inline-flex font-medium text-white items-center justify-center rounded-sm hover:shadow-sm hover:shadow-inherit ${className}`}>
            {title}
        </button>
    )


}

export default Button
