//data
import { services, othersLink } from "@/utils/routes"

//components
import Icons from "../icons/Index"
import FooterLinks from './FooterLinks'


const Footer = () => {

    return (
        <footer className="flex flex-col justify-center items-center  footer-section bg-cover bg-top bg-no-repeat">
            <div className="px-wrapper max-w-screen-2xl pt-32 pb-20">
                <div className="grid grid-cols-12">
                    <div className="col-span-4">
                        <Icons.Logo />
                        <p className="text-dark-light pr-10 mt-12">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.
                        </p>
                        <ul className="flex mt-8">
                            <li className="mr-4">
                                <a href="/" className="transition-colors text-white hover:text-primary">
                                    <Icons.Ins size="1.4rem" />
                                </a>
                            </li>
                            <li className="mr-4">
                                <a href="/" className="transition-colors text-white hover:text-primary">
                                    <Icons.GitHub size="1.4rem" />
                                </a>
                            </li>
                            <li className="mr-4">
                                <a href="/" className="transition-colors text-white hover:text-primary">
                                    <Icons.GitHub size="1.4rem" />
                                </a>
                            </li>
                            <li >
                                <a href="/" className="transition-colors text-white hover:text-primary">
                                    <Icons.Mail size="1.5rem" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <FooterLinks title="Servicios" items={services} className="col-span-3" />
                    <FooterLinks title="Otros enlaces" items={othersLink} className="col-span-3" />
                    <FooterLinks title="Contacto" className="col-span-2 h-full">
                        <>
                            <p className="text-sm text-dark-light mt-10 mb-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                            <a href="mailto:info@undergrub.com" target="_blank" className="text-primary ">info@undergrub.com</a>
                        </>
                    </FooterLinks>
                </div>
            </div>
            <div className="text-white text-center max-w-screen-2xl text-sm py-5   border-t-middle border-dark-light w-full">
                <p>Copyright © 2021. Under<span className="text-primary">G</span>rub</p>
            </div>
        </footer>
    )

}

export default Footer