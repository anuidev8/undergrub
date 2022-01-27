
//services 
import styles from './Services.module.css'

const ServicesCard = ({ icon, title, description }) => {

    return (
        <article className="transition bg-white group h-72 cursor-pointer rounded-card  py-6 text-dark border border-grey-light flex flex-col items-center justify-center px-4 hover:text-white hover:bg-primary  hover:shadow-lg hover:border-none transform hover:-translate-y-2 ">
            <figure className={`border border-primary group-hover:bg-white group-hover:border-none rounded-card text-primary flex justify-center items-center ${styles.service_card_icon}`} dangerouslySetInnerHTML={{ __html: icon }}>
            </figure>
            <h2 className={`mt-2 font-semibold ${styles.service_card_title}`}>{title}</h2>
            <p className='mt-2 text-center text-sm px-8 '>{description}</p>
        </article>
    )

}

export default ServicesCard