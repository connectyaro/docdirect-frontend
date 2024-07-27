import {
  BackgroundImage,
  Text,
  Flex,
  ActionIcon,
  SimpleGrid,
  List,
  ThemeIcon,
  Box,
  Group,
  TextInput,
} from "@mantine/core";
import footerBG from "../../assets/FooterImage.png";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import { useField } from "@mantine/form";
import CustomeButton from "../../components/CustomeButton";

function Footer() {
  const field = useField({
    initialValue: "",
    validate: (value) =>
      value.trim().length < 2 ? "Value is too short" : null,
  });
  return (
    <Flex direction={"column"}>
      <BackgroundImage src={footerBG} h={"700px"}>
        <Flex direction="column" justify="space-around" h="100%">
          <Box></Box>
          <SimpleGrid cols={3} p="md" c={"blue"}>
            <Flex direction="column" justify="center" align={"center"} h="100%">
              <List>
                <List.Item
                  mt={"lg"}
                  icon={
                    <ThemeIcon color="blue" size={24} radius="xl">
                      <IconMapPin
                        stroke={2}
                        style={{ width: "70%", height: "70%" }}
                      />
                    </ThemeIcon>
                  }>
                  123 Anywhere St., Any City 12345
                </List.Item>
                <List.Item
                  mt={"md"}
                  icon={
                    <ThemeIcon color="blue" size={24} radius="xl">
                      <IconPhone
                        stroke={2}
                        style={{ width: "70%", height: "70%" }}
                      />
                    </ThemeIcon>
                  }>
                  123-456-7890
                </List.Item>
                <List.Item
                  mt={"md"}
                  icon={
                    <ThemeIcon color="blue" size={24} radius="xl">
                      <IconMail
                        stroke={2}
                        style={{ width: "70%", height: "70%" }}
                      />
                    </ThemeIcon>
                  }>
                  docdirect@gmail.com
                </List.Item>
              </List>
            </Flex>
            <Flex justify="space-evenly" align={"center"} h="100%">
              <List
                listStyleType="none"
                styles={{
                    itemLabel: {
                    cursor: "pointer",
                    '&:hover': {
                      color: "red", // Change this to the color you want on hover
                      textDecoration: "underline", // Add underline on hover
                    },
                  },
                }}>
                <List.Item fw={"bold"} mt={"lg"}>
                  Home
                </List.Item>
                <List.Item fw={"bold"} mt={"lg"}>
                  Clients
                </List.Item>
                <List.Item fw={"bold"} mt={"lg"}>
                  AboutUS
                </List.Item>
              </List>
              <List
                listStyleType="none"
                styles={{
                  item: {
                    cursor: "pointer",
                  },
                }}>
                <List.Item fw={"bold"} mt={"lg"}>
                  ContactUS
                </List.Item>
                <List.Item fw={"bold"} mt={"lg"}>
                  Department
                </List.Item>
                <List.Item fw={"bold"} mt={"lg"}>
                  Reviews
                </List.Item>
              </List>
            </Flex>
            <Flex justify="center" align={"center"} h="100%">
              <Group>
                <Text size="30px" fw={"bold"}>Be Our Subscribers</Text>
                <Text>
                  To get the latest news about health from our experts
                </Text>
                <Flex align="center">
                  <TextInput
                    {...field.getInputProps()}
                    placeholder="example@email.com"
                    me={"xs"}
                  />
                  <CustomeButton label="Submit" url=""></CustomeButton>
                </Flex>
              </Group>
            </Flex>
          </SimpleGrid>
        </Flex>
      </BackgroundImage>
      <Flex bg={"blue"} p={"lg"} align={"center"} justify={"space-between"}>
        <Flex align={"center"}>
          <Text c={"white"} size="xl">
            Follow Us
          </Text>
          <ActionIcon
            variant="white"
            color="blue"
            size="sm"
            radius="xl"
            ms={"sm"}
            aria-label="Settings">
            <IconBrandFacebookFilled
              stroke={2}
              style={{ width: "70%", height: "70%" }}
            />
          </ActionIcon>
          <ActionIcon
            variant="white"
            color="blue"
            size="sm"
            radius="xl"
            ms={"sm"}
            aria-label="Settings">
            <IconBrandInstagram
              stroke={2}
              style={{ width: "70%", height: "70%" }}
            />
          </ActionIcon>
          <ActionIcon
            variant="white"
            color="blue"
            size="sm"
            radius="xl"
            ms={"sm"}
            aria-label="Settings">
            <IconBrandFacebookFilled
              stroke={2}
              style={{ width: "70%", height: "70%" }}
            />
          </ActionIcon>
        </Flex>
        <Text c={"white"}>Copyright © 2024 All rights reserved.</Text>
      </Flex>
    </Flex>
  );
}

export { Footer };
