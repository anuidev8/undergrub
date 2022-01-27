
//styles
import styles from './Project.module.css'

const ProjectCard = () => {

    return (

        <article className={`transition group rounded-card relative w-full overflow-hidden text-white cursor-pointer  ${styles.project_card}`}>
            <div className={`absolute  w-full h-full z-10 transition duration-300 opacity-100 group-hover:opacity-0 ${styles.project_card_cover}`}>

            </div>
            <img src="/assets/images/home/project.png" className={`absolute object-cover w-full h-full z-1`} />
            <blockquote className='absolute w-full h-full bg-primary bg-opacity-90 transition duration-300 opacity-0 group-hover:opacity-100 z-10 flex flex-col justify-center items-center px-5 '>
                <p className='text-xl text-center leading-tight font-extralight'>Lorem ipsum dolor sit amet, consetetur.</p>
                <h3 className='text-xl font-semibold mt-1'>Desarrollo web</h3>
            </blockquote>
            <blockquote className="h-full w-full relative bg-transparent z-20  flex justify-center items-end py-5 px-2 transition transform translate-y-0 group-hover:translate-y-20 font-extralight">
                <p className='text-xl text-center leading-tight'>Lorem ipsum dolor sit amet, consetetur.</p>
            </blockquote>
        </article>

    )

}

export default ProjectCard