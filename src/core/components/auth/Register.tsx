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
} from "@mantine/core";
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
    <Flex align="center" justify="center" h="100%">
      <Paper h="500PX" w="400" style={{ overflow: 'auto' }}>
        <Image
          width="100%"
          height="100%"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
        />
      </Paper>
      <Paper radius="md" p="xl">
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
          <Group justify="space-between" mt="xl">
            <Button type="submit" w="100% " radius="sm">
              SIGN IN
            </Button>
            <Anchor component="button" type="button" c="dimmed" size="xs">
              Already have an account? <Link  to={"/login"}>Sign in here</Link>
            </Anchor>
          </Group>
        </form>
      </Paper>
    </Flex>
  );
}

export { Register };
