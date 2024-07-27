import { useForm } from "@mantine/form";
import { IconLock, IconMail } from "@tabler/icons-react";
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
} from "@mantine/core";
import bkg from "../../../assets/bg-image.png";
import docImge from "../../../assets/hero_img 1.png";
import { NavLink } from "react-router-dom";
function Login() {
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
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
       <Paper w={"400px"}  bg={"#b9d8f4"}>
          <Image
            width="100%"
            height="100%"
            src={docImge}
          />
        </Paper>
        <Paper radius="md" p="xl" >
          <Text size="lg" fw={700}>
            Sign In
          </Text>
          <form onSubmit={form.onSubmit(() => {})}>
            <Stack>
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
            </Stack>
            <Group justify="space-between" mt="xl">
              <Button type="submit" w="100% " radius="sm">
                SIGN IN
              </Button>
              <Anchor component="button" type="button" c="dimmed" size="xs" >
                Already have an account?  <NavLink to={"/signup"}  >Signup'</NavLink>
              </Anchor>
            </Group>
          </form>
        </Paper>
       </SimpleGrid>
      </Flex>
    </BackgroundImage>
  );
}

export { Login };
