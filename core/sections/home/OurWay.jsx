
//components
import OurWayCard from "@/components/ourway/OurWayCard"
import ShapeOur from "@/components/Graphics/ShapeOur"
import OurTeamSection from "./OurTeam"
import OurProjectsSection from "./OurProjectsSection"

const OurWay = () => {

    return (
        <section className="pb-32 pt-0  flex flex-col justify-center items-center relative ">
            <div className="max-w-screen-2xl w-full relative z-10">
                <OurProjectsSection />
                <div className="grid grid-cols-2 mt-32">
                    <div className="pl-20">
                        <figure className="w-10/12">
                            <img loading="lazy" alt="undergrub" src="/assets/images/home/our.png" width={"100%"} height={"100%"} />
                        </figure>
                    </div>
                    <div className="pr-48">
                        <h2 style={{ fontSize: "2.9rem" }} className="font-semibold">Nuestro recorrido</h2>
                        <p className="mt-2">Se reúne un grupo de jóvenes emprendedores con el objetivo de crear una empresa que brindara una alternativa económica a los pequeños y medianos negocios, <span className="font-medium"> TECCNINOVATION.</span></p>
                        <div className="mt-12">
                            <OurWayCard className="mb-6" description="En pro de progresar ambos fundadores Ing. Tyronne mendoza, y Lic. Josue Sanchez, deciden restructurar la empresa dando nacimiento al nuevo UNDERGRUB." />

                            <OurWayCard num="2" className="mb-6" description="Fue un excelente año para la empresa, preparado totalmente con un equipo calificado y la mejor tecnología consolidandose UnderGrub." />
                            <OurWayCard num="3" className="mb-6" description="En medio de una pandemia, UnderGrub se adapta y se reinventa para responder de forma efectiva a las necesidades de los clientes." />
                        </div>
                    </div>
                </div>


                <OurTeamSection />

            </div>
            <ShapeOur />
        </section>
    )

}

export default OurWay