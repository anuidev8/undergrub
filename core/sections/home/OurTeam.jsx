
//components
import OurTeamCard from "@/components/ourteam/OurTeamCard"
import Carousel from 'react-multi-carousel';
import { CustomDot, responsive } from '@/components/shared/Carousel/Tools'

const OurTeamSection = () => {

    const responsiveConfig = responsive()

    return (
        /*  <section className="pb-28 flex flex-col items-center justify-center overflow-hidden">
             <div className="max-w-screen-2xl ">
                 <div className="px-wrapper w-full">
                     <h2 className={`text-4xl font-semibold text-center`}>Nuestro equipo de <br /> profesionales</h2>
                     <div className="grid grid-cols-12 place-content-center place-items-center">
                         <p className="mt-11 text-center text-dark col-start-5 col-end-9">
                             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.
                         </p>
                     </div>
 
                 </div>
 
                 <div className="mt-20 px-16 px-xl-0">
                     <Carousel customDot={<CustomDot dotInactiveColor="bg-grey-lighter text-grey-lighter" carouselItems={Array(10).fill(4)} />} showDots={true} arrows={false} className="h-96 " itemClass="p-3" styles responsive={responsiveConfig}>
                         {
                             Array(10).fill(4).map((project, index) => (
                                 <OurTeamCard key={index} />
                             ))
 
                         }
                     </Carousel>
 
                 </div>
 
 
             </div>
         </section> */

        <div >
            <div className="mt-24 max-w-screen-2xl">
                <h2 className={`text-4xl font-semibold text-center`}>Nuestro equipo de <br /> profesionales</h2>
                <div className="grid grid-cols-12 place-content-center place-items-center">
                    <p className="mt-11 text-center text-dark col-start-5 col-end-9">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.
                    </p>
                </div>

            </div>

            <div className="mt-14 px-16 px-xl-0">
                <Carousel customDot={<CustomDot dotInactiveColor="bg-grey-lighter text-grey-lighter" carouselItems={Array(10).fill(4)} />} showDots={true} arrows={false} className="h-96 " itemClass="p-3" styles responsive={responsiveConfig}>
                    {
                        Array(10).fill(4).map((project, index) => (
                            <OurTeamCard key={index} />
                        ))

                    }
                </Carousel>

            </div>


        </div>

    )

}

export default OurTeamSection