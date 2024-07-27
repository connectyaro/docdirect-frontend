import {
  Box,
  BackgroundImage,
  Grid,
  Text,
  Image,
  Flex,
  Paper,
  Container,
  TextInput,
  SimpleGrid,
  Textarea,
  ActionIcon,
  AspectRatio,
} from "@mantine/core";
import bkg from "../../../assets/bg-image.png";
import docImge from "../../../assets/contactImage.png";
import { Footer } from "../../../core/components/Footer";
import { hasLength, isEmail, useForm } from "@mantine/form";
import { useState } from "react";
import { Form } from "react-router-dom";
import CustomeButton from "../../../components/CustomeButton";
import { IconPhone } from "@tabler/icons-react";
export default function Conatct() {
  const form = useForm({
    mode: "controlled",
    initialValues: { name: "", email: "" },
    validate: {
      name: hasLength({ min: 3 }, "Must be at least 3 characters"),
      email: isEmail("Invalid email"),
    },
  });

  const [submittedValues, setSubmittedValues] = useState<
    typeof form.values | null
  >(null);
  return (
    <>
      <Box mx="auto" pos="relative">
        <BackgroundImage src={bkg}>
          <Grid gutter={"0"}>
            <Grid.Col span={7}>
              <Flex justify={"space-around"} align={"center"} h={"100%"}>
                <Box p="xl">
                  <Text c="blue" fw="bolder" size="80px">
                    Contact Us
                  </Text>
                  <Text c="blue" size="18px" pt="xl">
                    Kindly reach us to get the fastest response and treatment
                  </Text>
                </Box>
              </Flex>
            </Grid.Col>
            <Grid.Col span={5}>
              <Image w="100%" h="100%" src={docImge} />
            </Grid.Col>
          </Grid>
        </BackgroundImage>
        <Box pos="absolute" top="300px" left="150px" w="70%" h="auto" p="xl">
          <Container size="xl">
            <Paper shadow="lg" radius="lg" p="50px">
              <Form onSubmit={form.onSubmit(setSubmittedValues)}>
                <SimpleGrid cols={2}>
                  <TextInput
                    {...form.getInputProps("name")}
                    label="Name"
                    placeholder="Name"
                  />
                  <TextInput
                    {...form.getInputProps("email")}
                    label="Email"
                    placeholder="Email"
                  />
                </SimpleGrid>
                <TextInput
                  {...form.getInputProps("name")}
                  label="Subject"
                  placeholder="Name"
                />
                <Textarea
                  size="xl"
                  label="Description"
                  placeholder="Input placeholder"
                />
                <Box mt={"lg"}>
                  <CustomeButton label={"Submit"} />
                </Box>
              </Form>
            </Paper>
          </Container>
        </Box>
        <Container size={"xl"} mt={"400px"} mb={"xl"}>
          <Text c={"blue"} fw={"bold"} size="25px" mb={"xl"}>
            Find Us Here
          </Text>

          <SimpleGrid cols={3}>         
           <Paper bg={"#D2EAEF"}  p={"md"}> 
           <Flex align={"center"}>
              <ActionIcon bg={"#D2EAEF"}
                size="xl"
                c={"blue"}>
                <IconPhone stroke={2} style={{ width: "90%", height: "90%" }} />
              </ActionIcon>
              <Flex direction="column" ps="lg">
                <Text fw={"bold"} size="xl">Hotline</Text>
                <Text>123-456-7890</Text>
              </Flex>
            </Flex>
           </Paper>                     
           <Paper bg={"#D2EAEF"}  p={"md"}> 
           <Flex align={"center"}>
              <ActionIcon bg={"#D2EAEF"}
                size="xl"
                c={"blue"}>
                <IconPhone stroke={2} style={{ width: "90%", height: "90%" }} />
              </ActionIcon>
              <Flex direction="column" ps="lg">
                <Text fw={"bold"} size="xl">Hotline</Text>
                <Text>123-456-7890</Text>
              </Flex>
            </Flex>
           </Paper>                     
           <Paper bg={"#D2EAEF"}  p={"md"}> 
           <Flex align={"center"}>
              <ActionIcon bg={"#D2EAEF"}
                size="xl"
                c={"blue"}>
                <IconPhone stroke={2} style={{ width: "90%", height: "90%" }} />
              </ActionIcon>
              <Flex direction="column" ps="lg">
                <Text fw={"bold"} size="xl">Hotline</Text>
                <Text>123-456-7890</Text>
              </Flex>
            </Flex>
           </Paper>                     
          </SimpleGrid>
          <AspectRatio ratio={16 / 9} mt={"xl"}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59836.583727903184!2d72.80266157465078!3d20.391691612073284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0da75935e4811%3A0x6339b54f4106b826!2sDaman%2C%20Dadra%20and%20Nagar%20Haveli%20and%20Daman%20and%20Diu!5e0!3m2!1sen!2sin!4v1722049518308!5m2!1sen!2sin"
                width="100%"
                height="450"
                loading="lazy"
                title="Google map"
                style={{ border: 0 }}
              />
            </AspectRatio>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
