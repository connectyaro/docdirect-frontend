import { Box, } from "@mantine/core"
import CarouselSection from "./component/CarouselSection"
import OurValues from "./component/OurValues"
import AboutUs from "./component/AboutUs"
import Departments from "./component/Departments"
import SubDepartments from "./component/SubDepartments"
import Reviews from "./component/Reviews"
import { Footer } from "../../../core/components/Footer"

function Home() {
  return (
    <Box>
        <CarouselSection/>
        <OurValues/>
        <AboutUs/>
        <Departments/>
        <SubDepartments/>
        <Reviews/>
        <Footer/>
     
    </Box>
  )
}

export default Home