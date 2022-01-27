
//data
import { example } from '@/models/TestimonialClients'
//components
import Carousel from 'react-multi-carousel';
import { CustomRightArrow, CustomLeftArrow, CustomDot, responsive } from '@/components/shared/Carousel/Tools'
import Button from "@/components/shared/Button"
import Client from "@/components/shared/Client"
import SectionTitle from '@/components/shared/SectionTitle';
import Shape from '@/components/Graphics/Shape';

//styles
import styles from '../../../styles/Home.module.css'

const MainSection = () => {
    const responsiveConfig = responsive()
    return (

        <section className=" overflow-hidden ">
            <div className={`h-auto w-full px-wrapper flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center ${styles.main_section}`}>
                <div className="grid grid-cols-2 max-w-screen-2xl relative z-20 ">
                    <div className="w-full text-white pt-20">
                        <h1 className="text-primary font-bold text-5xl leading-tight">I M P U L S A <br /> <span className="mr-2">T U</span>   N E G O C I O . . .</h1>

                        <p style={{ fontSize: "19px" }} className="mt-6 pr-20">somos una empresa especializada en brindar las mejores soluciones tic, y de comunicación.</p>
                        <Button title="Ver proyectos" className="h-btn w-btn bg-primary mt-12" />
                    </div>
                    <div className="w-full pt-7 relative">
                        <figure className="w-11/12 absolute transform scale-110">
                            <img src="/assets/images/home/people.png" alt="undergrub" loading='lazy' className="w-full h-full " />
                        </figure>
                    </div>
                    <div>

                    </div>
                </div>
                {/*  <div className='w-full max-w-screen-2xl mt-8'>
                    <Carousel customDot={<CustomDot carouselItems={Array(10).fill(4)} />} showDots={true} arrows={false} className="h-full pb-8" responsive={responsiveConfig}>
                        {
                            Array(10).fill(4).map((c, i) => (
                                <Client key={i} {...example} />
                            ))
                        }
                    </Carousel>
                </div> */}
                <div className='mt-32 max-w-screen-2xl w-full text-white h-servicesSection relative z-20'>
                    <SectionTitle title="Nuestros servicios" className="text-left self-start" />
                    <p className='mt-2 w-4/12 break-all '>Lorem ipsum dolor sit amet, coectetur adipiscing elit.  Suspendisse varius enim in eros .</p>

                </div>
            </div>
            <Shape />
        </section>
    )

}

export default MainSection