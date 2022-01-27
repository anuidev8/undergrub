
import styles from './OurTeamCard.module.css'

const OurTeamCard = () => {

    return (
        <article className={`cursor-pointer group relative  flex flex-col items-center  pt-5 ${styles.ourteam_card}`}>
            <figure className="absolute w-40 h-40 p-1.5 flex justify-center items-center shadow-md rounded-circle transform -translate-y-16 bg-white">
                <img loading="lazy" alt="profile" className="w-full h-full object-cover object-center rounded-circle" src="/assets/images/home/profile.jpg" />
            </figure>
            <div className={`px-2 bg-white  pt-28 flex flex-col items-center border h-full w-full rounded-card ${styles.ourteam_card_wrapper} `}>
                <h3 className="font-semibold  text-center text-xl">Eduardo Vega</h3>
                <h3 className=" text-center text-lg font-light text-primary mt-1">Diseñador Gráfico.</h3>

                <ul className='flex mt-4 items-center'>
                    <li className=' transition text-dark hover:text-primary mr-2'>
                        <a href='/'>
                            <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.2em" width="1.2em" ><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1={17.5} y1={6.5} x2={17.5} y2={6.5} /></svg>
                        </a>
                    </li>

                    <li className='transition text-dark hover:text-primary mr-2'>
                        <a href='/'>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1.4em" width="1.4em" ><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" /></svg>
                        </a>
                    </li>
                    <li className='transition text-dark hover:text-primary mr-2'>
                        <a href='/'>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1.4em" width="1.4em" ><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" /></svg>
                        </a>
                    </li>
                    <li className='transition text-dark hover:text-primary '>
                        <a href='/'>
                            <svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1.4em" width="1.4em" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </a>
                    </li>
                </ul>

                <button className='text-primary mt-2 transition-300 transform transition-opacity transition-transform opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0'>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1.8em" width="1.8em" ><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" /></svg>
                </button>

            </div>

        </article>
    )

}

export default OurTeamCard