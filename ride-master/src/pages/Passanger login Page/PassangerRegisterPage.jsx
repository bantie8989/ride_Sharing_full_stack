import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Topbar from "../HomePage/components/TopbarComponent/Topbar";
import Footer from "../HomePage/components/FooterComponent/Footer";
import { Link } from "react-router-dom";

function PassangerRegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

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
      <Box mb={70}>
        <Topbar />
      </Box>

      <Box>
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
              passanger Register
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
              <InputGroup size="md">
                <Input
                  color={"blue.200"}
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                />

                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                confirm you password
              </FormLabel>{" "}
              <InputGroup size="md">
                <Input
                  color={"blue.200"}
                  type={show ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Re-Enter your password"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                />

                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                your driver license number
              </FormLabel>{" "}
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
            <Link to={"/account"}>
              <Button type="submit" colorScheme="teal" w={"full"} mt={4}>
                sign up
              </Button>
            </Link>
          </form>
        </Box>
      </Box>

      <Box mb={10} mt={10}>
        <Footer />
      </Box>
    </Box>
  );
}

export default PassangerRegisterPage;
