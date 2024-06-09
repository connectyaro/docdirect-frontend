import { AppShell as ShellLayout, Burger, Group, Skeleton, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';


export function AppShell() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <ShellLayout
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <ShellLayout.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Button >Button</Button>
        </Group>
      </ShellLayout.Header>
      <ShellLayout.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </ShellLayout.Navbar>
      <ShellLayout.Main>Main</ShellLayout.Main>
    </ShellLayout>
  );
}

export  default AppShell