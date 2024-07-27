import { useForm } from "@mantine/form";
import {
  IconLock,
  IconMail,
  IconPhone,
  IconUserCircle,
} from "@tabler/icons-react";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Anchor,
  Stack,
  Flex,
  Image,
  BackgroundImage,
  SimpleGrid,
  Center,
} from "@mantine/core";
import bkg from "../../../assets/bg-image.png";
import docImge from "../../../assets/hero_img 1.png";
import { Link } from "react-router-dom";

function Register() {
  const form = useForm({
    initialValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      password: "",
      confirmPassowrd: "",
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
  <BackgroundImage src={bkg} h={"100%"}>
      <Flex align="center" justify="center" h="100%">
      <SimpleGrid cols={2} bg={"white"} >
      <Paper w={"500px"} bg={"#b9d8f4"}>
        <Image mt={"40px"}
          src={docImge} alt="Image"
        />
      </Paper>
      <Paper radius="md" pt={"lg"} pb={"lg"} pr={"lg"}>
        <Text size="lg" fw={700}>
          Sign Up
        </Text>
        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            <Flex>
              <TextInput
                required
                label="Firstname"
                placeholder="Your Firstname"
                value={form.values.firstname}
                onChange={(event) =>
                  form.setFieldValue("email", event.currentTarget.value)
                }
                error={form.errors.email && "Invalid email"}
                radius="md"
                leftSection={<IconUserCircle stroke={1} />}
              />
              <TextInput
                required
                label="Lastname"
                placeholder=" Your Lastname"
                value={form.values.lastname}
                onChange={(event) =>
                  form.setFieldValue("email", event.currentTarget.value)
                }
                error={form.errors.email && "Invalid email"}
                radius="md"
                ms={20}
                leftSection={<IconUserCircle stroke={1} />}
              />
            </Flex>
            <TextInput
              required
              label="Phone"
              placeholder="Your Phone number"
              value={form.values.phone}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
              radius="md"
              leftSection={<IconPhone stroke={1} />}
            />
            <TextInput
              required
              label="Email"
              placeholder="Eg:nike@gmail.com"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
              radius="md"
              leftSection={<IconMail stroke={1} />}
            />
            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
              radius="md"
              leftSection={<IconLock stroke={1} />}
            />

            <PasswordInput
              required
              label="Confirm Password"
              placeholder="Your password"
              value={form.values.confirmPassowrd}
              onChange={(event) =>
                form.setFieldValue("confirmPassowrd", event.currentTarget.value)
              }
              error={
                form.errors.confirmPassowrd &&
                "Password should include at least 6 characters"
              }
              radius="md"
              leftSection={<IconLock stroke={1} />}
            />
          </Stack>
          <Group  mt="xl">
            <Button type="submit" w="100% " radius="sm">
              SIGN IN
            </Button>
          <Center>
          <Anchor component="button" type="button" c="dimmed" size="xs">
              Already have an account? <Link to={"/login"}>Sign in here</Link>
            </Anchor>
          </Center>
          </Group>
        </form>
      </Paper>
        </SimpleGrid>
     
    </Flex>
  </BackgroundImage>
  );
}

export { Register };
