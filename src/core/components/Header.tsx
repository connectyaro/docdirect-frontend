import {
  Group,
  Text,
  Anchor,
  Divider,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import CustomeButton from "../../components/CustomeButton";
import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
export function Header() {
  const [activeLink, setActiveLink] = useState("Home");
  const anchorStyles = (isActive: boolean) => ({
    textDecoration: "none",
    fontSize: "1.35rem",
    fontWeight: "bold",
    transition: "color 0.3s ease",
    color: isActive ? "#1c7ed6" : "#6cace0",
  });
  const handleLinkClick = (link: SetStateAction<string>) => {
    setActiveLink(link);
  };
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <>
      <Group justify="space-between" align="center" p="lg">
        <Group h="100%" gap={0} visibleFrom="sm">
          <Text size="20px" c="#1c7ed6" fw="bold">
            DOCDIRECT
          </Text>
        </Group>
        <Group h="100%" gap="40px" visibleFrom="sm">
          {["Home", "Clinic", "About", "Contact"].map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              style={anchorStyles(activeLink === link)}
              onClick={() => handleLinkClick(link)}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1c7ed6")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  activeLink === link ? "#065290" : "#6cace0")
              }>
              {link}
            </Link>
          ))}
        </Group>
        <Group>
          <CustomeButton label={"Sign In"} url={"/login"} />
        </Group>
        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          hiddenFrom="sm"
          size="sm"
        />
      </Group>
      <Divider />
      {/* mobile */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        fw="bold"
        color="blue"
        title="DOCDIRECT"
        hiddenFrom="sm"
        zIndex={1000000}>
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          <Group justify="space-between" align="center" h="100%" p="sm">
            <Group h="100%" gap="xs">
              <Anchor fz="xl" fw="bold" style={{ textDecoration: "none" }}>
                Home
              </Anchor>
              <Anchor fz="xl" fw="bold" style={{ textDecoration: "none" }}>
                Clients
              </Anchor>
              <Anchor fz="xl" fw="bold" style={{ textDecoration: "none" }}>
                About
              </Anchor>
              <Anchor fz="xl" fw="bold" style={{ textDecoration: "none" }}>
                Contact
              </Anchor>
            </Group>
          </Group>
        </ScrollArea>
      </Drawer>
    </>
  );
}
