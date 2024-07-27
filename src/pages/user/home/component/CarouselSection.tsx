import {
  ActionIcon,
  BackgroundImage,
  Box,
  Grid,
  Text,
  Image,
  Flex,
} from "@mantine/core";
import bkg from "../../../../assets/bg-image.png";
import docImge from "../../../../assets/hero_img 1.png";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import BookAppointmentOnline from "./BookAppointmentOnline";

export default function CarouselSection() {
  return (
    <Box mx="auto" pos="relative">
      <BackgroundImage src={bkg}>
        <Grid justify="space-between" gutter={"0"}>
          <Grid.Col span={7} >
            <Box p="xl">
              <Text c="blue" fw="bolder" size="80px">
                Your Partner in Health and Wellness
              </Text>
              <Text c="blue" size="18px" pt="xl">
                We are committed to providing you with the best medical and
                healthcare services to help you live healthier and happier.
              </Text>
              <Flex align="center" pt="xl">
                <ActionIcon
                  variant="outline"
                  color="blue"
                  size="xl"
                  radius="xl"
                  aria-label="Settings">
                  <IconPlayerPlayFilled
                    style={{ width: "70%", height: "70%" }}
                  />
                </ActionIcon>
                <Text c="blue" pl="10px" fw="bold">
                  See how we work
                </Text>
              </Flex>
            </Box>
          </Grid.Col>
          <Grid.Col span={5}>
            <Image  w="100%" h="100%" src={docImge} />
          </Grid.Col>
        </Grid>
      </BackgroundImage>
      <Box pos="absolute" bottom="-60px" left="65px" w="80%" h="auto" p="lg">
        <BookAppointmentOnline />
      </Box>
    </Box>
  );
}
