import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import Topbar from "../HomePage/components/TopbarComponent/Topbar";
import { Link } from "react-router-dom";
import Footer from "../HomePage/components/FooterComponent/Footer";

const PassangerLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Call API to login driver
    try {
      const response = await fetch("/api/drivers/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      // Handle login success
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box>
      <Topbar />
      <Box
        bg="goldenrod"
        minH="80vh"
        py={20}
        px={4}
        mx="auto"
        maxW="lg"
        borderRadius="lg"
        boxShadow="md"
        marginTop={50}
      >
        <Flex justify="center" mb={4}>
          <Heading as="h1" size="lg" color="gray.600">
            user Login
          </Heading>
        </Flex>
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={error}>
            <FormLabel color={"gray.500"} fontWeight={"bolder"}>
              Email
            </FormLabel>
            <Input
              color={"blue.200"}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              _placeholder={{ opacity: 1, color: "gray.500" }}
            />
            <FormErrorMessage>{error}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={error}>
            <FormLabel color={"gray.500"} fontWeight={"bolder"}>
              Password
            </FormLabel>
            <Input
              color={"blue.200"}
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              _placeholder={{ opacity: 1, color: "gray.500" }}
            />
            <FormErrorMessage>{error}</FormErrorMessage>
          </FormControl>
          <Link to={"/ride-request"}>
            {" "}
            <Button type="submit" colorScheme="teal" w={"full"} mt={4}>
              Login
            </Button>
          </Link>
        </form>
        <Text mt={4} fontSize="sm" color="gray.600">
          Don't have an account?{" "}
          <Link to={"/passanger-register"} color="teal.500">
            Register now
          </Link>
        </Text>
      </Box>

      <Box mt={70}>
        <Footer />
      </Box>
    </Box>
  );
};

export default PassangerLoginPage;
