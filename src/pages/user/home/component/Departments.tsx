import {
  Container,
  SimpleGrid,
  Image,
  Paper,
  Flex,
  Text,
  BackgroundImage,
  Group,
} from "@mantine/core";

import bkg from "../../../../assets/bg-image.png";
import departmentImge from "../../../../assets/department_icon_1.svg.png";
export default function Departments() {
  return (
    <Container size="xl" my={"xl"}>
      <BackgroundImage src={bkg} h={"300px"} pos={"relative"}>
        <Group justify="center" align="center" h={"100%"}>
          <Text fw={"bold"} size="30px" c={"blue"}>
            Departments
          </Text>
        </Group>
        <SimpleGrid cols={5} pos={"absolute"} left={"40px"} bottom={"-90px"}>
          <Paper w={"230px"} radius={"lg"} c={"white"} withBorder p={"xl"}>
            <Flex direction="column" align="center" justify="center">
              <Image src={departmentImge} w={"40px"} />
              <Text c={"blue"} mt="md" style={{ textAlign: "center" }}>
                Emergency Department
              </Text>
            </Flex>
          </Paper>
          <Paper w={"230px"} radius={"lg"} c={"white"} withBorder p={"xl"}>
            <Flex direction="column" align="center" justify="center">
              <Image src={departmentImge} w={"40px"} />
              <Text c={"blue"} mt="md" style={{ textAlign: "center" }}>
                Emergency Department
              </Text>
            </Flex>
          </Paper>
          <Paper w={"230px"} radius={"lg"} c={"white"} withBorder p={"xl"}>
            <Flex direction="column" align="center" justify="center">
              <Image src={departmentImge} w={"40px"} />
              <Text c={"blue"} mt="md" style={{ textAlign: "center" }}>
                Emergency Department
              </Text>
            </Flex>
          </Paper>
          <Paper w={"230px"} radius={"lg"} c={"white"} withBorder p={"xl"}>
            <Flex direction="column" align="center" justify="center">
              <Image src={departmentImge} w={"40px"} />
              <Text c={"blue"} mt="md" style={{ textAlign: "center" }}>
                Emergency Department
              </Text>
            </Flex>
          </Paper>
          <Paper w={"230px"} radius={"lg"} c={"white"} withBorder p={"xl"}>
            <Flex direction="column" align="center" justify="center">
              <Image src={departmentImge} w={"40px"} />
              <Text c={"blue"} mt="md" style={{ textAlign: "center" }}>
                Emergency Department
              </Text>
            </Flex>
          </Paper>
        </SimpleGrid>
      </BackgroundImage>
    
    </Container>
  );
}
