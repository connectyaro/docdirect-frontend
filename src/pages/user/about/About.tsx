import { BackgroundImage, Box, Flex, Grid,Text,Image } from "@mantine/core";
import bkg from "../../../assets/bg-image.png";
import docImge from "../../../assets/about.png";
import { Footer } from "../../../core/components/Footer";
export default function About() {
  return (
     <Box>
         <BackgroundImage src={bkg}>
          <Grid gutter={"0"}>
            <Grid.Col span={7}>
              <Flex justify={"space-around"} align={"center"} h={"100%"}>
                <Box p="xl">
                  <Text c="blue" fw="bolder" size="80px">
                    About Us
                  </Text>
                  <Text c="blue" size="18px" pt="xl">
                  Your Partner in Health and Wellness
                  </Text>
                </Box>
              </Flex>
            </Grid.Col>
            <Grid.Col span={5}>
              <Image w="80%" h="100%" src={docImge} />
            </Grid.Col>
          </Grid>
        </BackgroundImage> 
        <Footer/>
     </Box>
  )
}
