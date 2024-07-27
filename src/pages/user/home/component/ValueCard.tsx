import { ActionIcon, Box, Center, Flex, Text } from "@mantine/core";
import { IValueCardProps } from "../utility/models/global.model";

export default function ValueCard({
  title,
  description,
  icon: Icon,
}: IValueCardProps) {
  return (
    <>
      <Box  p="xl" w="400px" >
        <Center>
          <Flex align={"center"}>
            <ActionIcon
              variant="blue"
              color="blue"
              size="xl"
              radius="xl"
              aria-label="Settings">
              <Icon stroke={2} style={{ width: "70%", height: "70%" }} />
            </ActionIcon>
            <Text ms="lg" size="20px" fw="bold" c="blue">
              {title}
            </Text>
          </Flex>
        </Center>
        <Text
          pt="lg"
          style={{
            textAlign: "center",
          }}>
          {description}
        </Text>
      </Box>
    </>
  );
}
