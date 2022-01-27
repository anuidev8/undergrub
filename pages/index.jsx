
//layout 
import Wrapper from "core/layout/Wrapper"

//sections
import MainSection from "core/sections/home/MainSection"
import ServicesSection from "core/sections/home/ServicesSection"
import OurProjectsSection from "core/sections/home/OurProjectsSection"
import OurWay from "core/sections/home/OurWay"

import ContactSection from "core/sections/contact/contactSection"

export default function Home() {
  return (
    <Wrapper>
      <MainSection />
      <ServicesSection />
      <OurWay />
      <ContactSection />
    </Wrapper>
  )
}
