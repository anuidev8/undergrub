
// data
import { projects } from "@/models/Projects";

//components
import SectionTitle from "@/components/shared/SectionTitle"
import ProjectCard from "@/components/projects/ProyectCard"
import Carousel from 'react-multi-carousel';
import { CustomDot, responsive } from '@/components/shared/Carousel/Tools'

const OurProjectsSection = () => {
    const superLargeDesktop = { items: 1 }
    const desktop = { items: 1 }
    const responsiveConfig = responsive(desktop, superLargeDesktop)
    return (
        /*    <section className="flex flex-col justify-center items-center "> */
        /*  <div className="w-full max-w-screen-2xl px-wrapper"> */
        <div className="w-full max-w-screen-2xl px-wrapper ">

            <SectionTitle title="Nuestros proyectos" className="text-left self-start text-dark" />
            <p className='mt-2 w-4/12 break-all  text-dark-light'>Lorem ipsum dolor sit amet, coectetur adipiscing elit.  Suspendisse varius enim in eros .</p>



            <Carousel customDot={<CustomDot dotInactiveColor="bg-grey-lighter text-grey-lighter" carouselItems={Object.keys(projects)} />} showDots={true} arrows={false} className="h-full pb-10" responsive={responsiveConfig}>
                {
                    projects.map((item, key) => (
                        <div key={key} className="grid grid-cols-4 gap-7 mt-12">
                            {
                                item.projects.map((project, index) => (
                                    <ProjectCard key={index} />
                                ))
                            }
                        </div>

                    ))
                }
            </Carousel>
        </div>

    )

}

export default OurProjectsSection