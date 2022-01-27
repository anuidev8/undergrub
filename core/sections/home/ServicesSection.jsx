
import ServicesCard from "@/components/services/ServicesCard"
import { services } from "@/models/Services"

const ServicesSection = () => {

    return (
        <section className="transform -translate-y-40 flex flex-col justify-center items-center relative z-20">
            <div className="px-wrapper max-w-screen-2xl ">
                <div className="grid grid-cols-4 gap-8 w-full">
                    {
                        Array(8).fill(4).map((item, key) => (
                            <ServicesCard key={key} {...services} />
                        ))
                    }
                </div>
            </div>
        </section>
    )

}

export default ServicesSection