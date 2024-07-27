import { ActionIcon, Container, Flex, Paper, Text } from "@mantine/core";
import { IconPhone } from "@tabler/icons-react";
import CustomeButton from "../../../../components/CustomeButton";

export default function BookAppointmentOnline() {
  return (
    <Container size="xl">
      <Paper shadow="lg" radius="lg" p="xl">
        <Flex justify="space-between">
          {/* Hotline */}
          <Flex align={"center"}>
            <ActionIcon
              variant="blue"
              color="blue"
              size="xl"
              radius="xl"
              aria-label="Settings">
              <IconPhone stroke={2} style={{ width: "70%", height: "70%" }} />
            </ActionIcon>
            <Flex direction="column" ps="lg">
              <Text>Hotline</Text>
              <Text>123-456-7890</Text>
            </Flex>
          </Flex>
          {/* Abulance */}
          <Flex align={"center"}>
            <ActionIcon
              variant="blue"
              color="blue"
              size="xl"
              radius="xl"
              aria-label="Settings">
              <IconPhone stroke={2} style={{ width: "70%", height: "70%" }} />
            </ActionIcon>
            <Flex direction="column" ps="lg">
              <Text>Ambulance</Text>
              <Text>876-256-876</Text>
            </Flex>
          </Flex>
          {/* Location */}
          <Flex align={"center"}>
            <ActionIcon
              variant="blue"
              color="blue"
              size="xl"
              radius="xl"
              aria-label="Settings">
              <IconPhone stroke={2} style={{ width: "70%", height: "70%" }} />
            </ActionIcon>
            <Flex direction="column" ps="lg">
              <Text>Location</Text>
              <Text>New York, US</Text>
            </Flex>
          </Flex>
          <CustomeButton label={"Book Now"} url="bookAppoitnment" />
        </Flex>
      </Paper>
    </Container>
  );
}
