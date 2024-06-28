
import { useForm } from '@mantine/form';
import { IconLock, IconMail } from '@tabler/icons-react';
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
} from '@mantine/core';

 function Login() {
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  return (
<Flex align="center" justify="center" h="100%">
    <Paper h="400PX" w="400PX"  >
    <Image
     width="100%" height="100%"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
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
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
            radius="md"
            leftSection={<IconMail stroke={1} />}
          />
          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
            radius="md"
            leftSection={<IconLock stroke={1} />}
          />
        </Stack>
        <Group justify="space-between" mt="xl">
          <Button type="submit" w="100% "radius="sm"  >
           SIGN IN
          </Button>
          <Anchor component="button" type="button" c="dimmed" size="xs">
              Already have an account? Login'
          </Anchor>
        </Group>
      </form>
    </Paper>
  </Flex>
  );
}

export {Login}