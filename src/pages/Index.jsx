import { Box, Container, Heading, Text, Flex, Link, Stack, VStack, Divider } from "@chakra-ui/react";
import { FaPenNib, FaTags, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="2xl" py={{ base: "6", md: "10" }} fontFamily="serif">
      <VStack spacing={8}>
        <Heading as="h1" size="xl" fontWeight="normal">
          My Blog
        </Heading>

        <Flex as="nav" justify="center" wrap="wrap" gap={6}>
          <Link href="#home" fontWeight="semibold">
            Home
          </Link>
          <Link href="#about" fontWeight="semibold">
            About
          </Link>
          <Link href="#contact" fontWeight="semibold">
            Contact
          </Link>
        </Flex>

        <Divider />

        <Box as="article">
          <Stack spacing={3}>
            <Heading as="h2" size="md">
              Post Title
            </Heading>
            <Text color="gray.600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <Flex alignItems="center" color="gray.500">
              <FaPenNib />
              <Text ml={2} fontSize="sm">
                John Doe
              </Text>
              <FaTags ml={4} />
              <Text ml={2} fontSize="sm">
                Lifestyle
              </Text>
              <FaUserCircle ml={4} />
              <Text ml={2} fontSize="sm">
                12 Comments
              </Text>
            </Flex>
          </Stack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
