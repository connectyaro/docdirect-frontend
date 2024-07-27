import {  Box, Flex, Group } from "@mantine/core";
import { Outlet } from "react-router";
import { Header } from "./Header";

function Master() {
  return (
     <Flex direction="column" style={{height:"100%",}} styles={{root:{overflow:"hidden"}}} >
      <Box >
      <Header/>
      </Box>
        <Group grow   styles={{root:{overflow:"auto"}}}>
          <Outlet  />
        </Group>
    </Flex>
  );
}
export { Master };
