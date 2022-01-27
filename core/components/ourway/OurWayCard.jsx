
import { useEffect } from 'react'
//components
import styles from './OurWay.module.css'

const OurWayCard = ({ num = "1", description, className }) => {
    let instancesCount = 0
    useEffect(() => {
        instancesCount += 1
        console.log({ instancesCount })
        return () => {
            instancesCount -= 1
            console.log({ instancesCount })
        }
    }, [])

    return (

        <article className={`bg-white rounded_card_xl px-4 py-4 flex items-center justify-center ${styles.ourway_card} ${className}`}>
            <figure className='self-start mt-4'>
                <div className={`bg-primary rounded-circle text-lg font-bold flex items-center justify-center mr-3 text-white ${styles.ourway_card_circle}`}>{num}</div>

            </figure>
            <p>{description}</p>
        </article>
    )

}

export default OurWayCard