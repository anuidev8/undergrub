
import styles from '../../../styles/Decoration.module.css'

const Shape = () => {

    return (
        <figure className={` absolute z-10 ${styles.shape} top-60  w-full transform translate-y-32   -left-20 scale-110`}>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={"100%"} height={"100%"} viewBox="0 0 2177.201 1922.425">
                <defs>
                    <linearGradient id="linear-gradient" x1="-0.615" y1="0.348" x2="0.633" y2="0.58" gradientUnits="objectBoundingBox">
                        <stop offset={0} stopColor="#fff" stopOpacity="0.271" />
                        <stop offset={1} stopColor="#7c7c7f" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <rect id="Mask_Copy_2" data-name="Mask Copy 2" width="1990.53" height="953.064" rx="476.532" transform="translate(1630.546 1922.425) rotate(-145)" opacity="0.95" fill="url(#linear-gradient)" />
            </svg>
        </figure>

    )

}

export default Shape