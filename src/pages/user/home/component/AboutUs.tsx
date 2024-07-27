import { Container, Paper, Image, Box, Text, Grid, Flex } from "@mantine/core";

import aboutImage from "../../../../assets/AboutUS.png";
import { IconArrowRight } from "@tabler/icons-react";
export default function AboutUs() {
  return (
    <Container size="xl" mt={"xl"}>
      <Grid>
        <Grid.Col span={8}>
          <Paper p={"xl"}>
            <Image src={aboutImage} />
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Flex direction="column" justify="center" h="100%">
            <Box mb={"xl"}>
              <Text c={"blue"} size="26px" fw={"bold"}>
                About Us
              </Text>
              <Text c={"blue"}>PRO HEALTH</Text>
            </Box>
            <Flex align={"inherit"}>
              <IconArrowRight
                stroke={2}
                color="#1971c2"
                style={{ width: "25%", height: "18%" }}
              />
              <Paper ms={"md"}>
                <Text c={"blue"}>
                  ProHealth is a team of experienced medical professionals
                </Text>
                <Text mt={"lg"} c={"blue"}>
                  Dedicated to providing top-quality healthcare services. We
                  believe in a holistic approach to healthcare that focuses on
                  treating the whole person, not just the illness or symptoms.
                </Text>
              </Paper>
            </Flex>
          </Flex>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
