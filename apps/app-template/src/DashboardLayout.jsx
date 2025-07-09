// src/DashboardLayout.jsx
import { Box, Flex, Text, VStack, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const navItems = [{ label: "Manage API Config", to: "/dashboard" }];

const Sidebar = () => (
  <Box
    width="240px"
    bg="gray.100"
    p={5}
    minHeight="100vh"
    borderRight="1px solid #ddd"
  >
    <Text fontSize="lg" fontWeight="bold" mb={6}>
      Natural AI Console
    </Text>
    <VStack align="stretch" spacing={4}>
      {navItems.map((item) => (
        <Link
          as={NavLink}
          key={item.to}
          to={item.to}
          px={2}
          py={1}
          borderRadius="md"
          _hover={{ bg: "brand.100" }}
          _activeLink={{ bg: "brand.900", color: "white" }}
        >
          {item.label}
        </Link>
      ))}
    </VStack>
  </Box>
);

const DashboardLayout = ({ children }) => (
  <Flex minHeight="100vh">
    <Sidebar />
    <Box flex="1" p={6}>
      {children}
    </Box>
  </Flex>
);

export default DashboardLayout;
