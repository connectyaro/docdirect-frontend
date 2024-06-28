import { Flex } from "@mantine/core";
import { Outlet } from "react-router";

function Master() {
  return (
    <Flex  w="100%" h="100%" direction="column">
      <Outlet />
    </Flex>
  );
}
export { Master };
