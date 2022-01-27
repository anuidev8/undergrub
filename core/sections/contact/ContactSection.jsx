
//components
import ContactForm from "@/components/contact/ContactForm"
import Footer from "@/components/shared/Footer/Index"
import Icons from "@/components/shared/icons/Index"
const ContactSection = () => {

    return (
        <section className="flex flex-col items-center justify-center text-white bg-dark-lightest">
            <div className="px-wrapper py-28 max-w-screen-2xl w-full">
                <div className="grid grid-cols-2">
                    <div className="col-span-2">
                        <h2 className="text-4xl font-semibold ">Lorem ipsum dolor sit <br /> amet,
                            <span className="text-primary"> consetetur.</span>
                        </h2>
                        <p className='mt-4 w-5/12 pr-20 text-lg leading-tight'>Lorem ipsum dolor sit amet, coectetur adipiscing elit.  Suspendisse varius enim in eros</p>
                    </div>

                    <div className="mt-16">
                        <ContactForm />
                    </div>

                    <div className="h-full flex items-end pl-32">
                        <aside className="flex py-10 px-6 bg-dark rounded-card relative mb-28 w-full">
                            <figure className="text-dark absolute top-0 transform -translate-y-5">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1.9rem" width="1.9rem" ><path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 011.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z" clipRule="evenodd" /></svg>

                            </figure>
                            <ul className="w-full">
                                <li className="flex ">
                                    <figure className="text-primary mr-8">
                                        <Icons.Location size="2.7rem" />
                                    </figure>
                                    <div>
                                        <h3 className="text-white text-xl">Tangamandapio</h3>
                                        <h3 className="text-white text-xl">Lorem ipsum dolor sit amet.</h3>
                                    </div>
                                </li>
                                <li className="flex items-center mt-12 text-primary">
                                    <figure className="text-primary mr-8">
                                        <Icons.Phone size="2.7rem" />
                                    </figure>
                                    <div>
                                        <a className=" text-xl">+ (505) 8276-4774</a>

                                    </div>
                                </li>

                                <li className="flex items-center mt-12 text-primary">
                                    <figure className="text-primary mr-8">
                                        <Icons.Mail size="2.7rem" />
                                    </figure>
                                    <div>
                                        <a className=" text-xl">info@undergrub.com</a>

                                    </div>
                                </li>
                            </ul>

                        </aside>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
            <Footer />
        </section>
    )

}

export default ContactSection