
//styles
import styles from './InputBase.module.css'

const InputBase = ({ id, type = "text", placeholder, icon, className, inputClassName }) => {

    return (
        <div className={`relative w-full ${className}`}>
            <input type={type} id={id} name={id} placeholder={placeholder} className={`w-full bg-transparent text-white text-xl transition transition-300 px-9 font-light pb-3 ${inputClassName} ${styles.input_base}`} />
            {
                icon &&
                <figure className={`absolute ${styles.input_icon} transition transition-300  top-1 lef-0`}>
                    {icon}
                </figure>
            }
        </div>
    )

}

export default InputBase