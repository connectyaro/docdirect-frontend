import {
  Group,
  SimpleGrid,
  Paper,
  Flex,
  Text,
  Container,
  ActionIcon,
} from "@mantine/core";
import { IconPhone } from "@tabler/icons-react";
export default function SubDepartments() {
  return (
    <Container size="xl" my={"xl"} mt={"150px"}>
      <Group>
        <Text fw={"bold"} size="30px" c={"blue"}>
          Departments
        </Text>
      </Group>
      <SimpleGrid cols={4} mt={"lg"}>
        <Paper w={"260px"} radius={"lg"} withBorder p={"md"}>
          <Flex direction="column">
            <Flex align="center">
              <ActionIcon
                variant="blue"
                color="blue"
                size="xl"
                radius="sm"
                aria-label="Settings">
                <IconPhone stroke={2} style={{ width: "70%", height: "70%" }} />
              </ActionIcon>
              <Text c={"blue"} ms={"lg"}>
                Malcolm Baldrige National Quality Award
              </Text>
            </Flex>
            <Text mt="md" size="16px">
              This award recognizes healthcare organizations that have
              demonstrated excellence in leadership, strategic planning,
              customer and employee satisfaction, and operational efficiency.
            </Text>
          </Flex>
        </Paper>
        <Paper w={"260px"} radius={"lg"} withBorder p={"md"}>
          <Flex direction="column">
            <Flex align="center">
              <ActionIcon
                variant="blue"
                color="blue"
                size="xl"
                radius="sm"
                aria-label="Settings">
                <IconPhone stroke={2} style={{ width: "70%", height: "70%" }} />
              </ActionIcon>
              <Text c={"blue"} ms={"lg"}>
                HIMSS Davies Award
              </Text>
            </Flex>
            <Text mt="md" size="16px">
              This award recognizes healthcare organizations that have used
              health information technology to improve patient outcomes and
              reduce costs.
            </Text>
          </Flex>
        </Paper>
        <Paper w={"260px"} radius={"lg"} withBorder p={"md"}>
          <Flex direction="column">
            <Flex align="center">
              <ActionIcon
                variant="blue"
                color="blue"
                size="xl"
                radius="sm"
                aria-label="Settings">
                <IconPhone stroke={2} style={{ width: "70%", height: "70%" }} />
              </ActionIcon>
              <Text c={"blue"} ms={"lg"}>
                Healthgrades National’s Best Hospital
              </Text>
            </Flex>
            <Text mt="md" size="16px">
              This recognition is given to hospitals that have achieved high
              ratings for clinical quality and patient safety across multiple
              specialties and procedures.
            </Text>
          </Flex>
        </Paper>
        <Paper w={"260px"} radius={"lg"} withBorder p={"md"}>
          <Flex direction="column">
            <Flex align="center">
              <ActionIcon
                variant="blue"
                color="blue"
                size="xl"
                radius="sm"
                aria-label="Settings">
                <IconPhone stroke={2} style={{ width: "70%", height: "70%" }} />
              </ActionIcon>
              <Text c={"blue"} ms={"lg"}>
                Joint Commission Gold Seal of Approval
              </Text>
            </Flex>
            <Text mt="md" size="16px">
              This recognition is given to hospitals that have met rigorous
              standards for patient safety and quality of care.
            </Text>
          </Flex>
        </Paper>
      </SimpleGrid>
    </Container>
  );
}
