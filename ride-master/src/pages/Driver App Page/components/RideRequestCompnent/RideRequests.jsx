import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  List,
  ListItem,
  Avatar,
  Spacer,
  useColorModeValue,
  VStack,
  HStack,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";

const RideRequests = ({ requests }) => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const [filters, setFilters] = useState({
    pickupLocation: "",
    Destination: "",
    EstimatedFare: "",
    numPassengers: "",
  });

  const handleAccept = (requestId) => {
    // handle accepting the request
  };

  const handleDecline = (requestId) => {
    // handle declining the request
  };
  const handleFilterChange = (filter, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filter]: value }));
  };

  const filteredRideRequest = requests.filter((request) => {
  if (filters.numPassengers && request.numPassengers < filters.numPassengers) return false;
  if (filters.pickupLocation && request.pickupLocation !== filters.pickupLocation) return false;
  if (filters.Destination && request.destination !== filters.Destination) return false;
  if (filters.EstimatedFare && request.estimatedFare < filters.EstimatedFare) return false;
  return true;
});

  return (
    <Box
      p={4}
      bg={bgColor}
      borderRadius="lg"
      boxShadow="md"
      backgroundColor={"goldenrod"}
      textAlign={"center"}
      m={10}
    >
      <Heading
        as="h2"
        size="lg"
        mb={4}
        w={"100%"}
        backgroundColor={"blue.200"}
        p={2}
        borderRadius={10}
      >
        Ride Requests
      </Heading>

      {/* filter section  */}

      <Box p={10} >
        <VStack spacing={4}>
          <Text fontSize={'large'} color={"dark"} textAlign={"center"} backgroundColor={'blue.200'} borderRadius={'50%'} p={5} fontWeight={'bolder'}>
            Filter by
          </Text>
          <HStack spacing={6}>
            <Select
              value={filters.numPassengers}
              onChange={(e) =>
                handleFilterChange("numPassengers", e.target.value)
              }
              placeholder="Number of Passengers"
              backgroundColor={"blue.300"}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>
            <Select
              value={filters.pickupLocation}
              onChange={(e) =>
                handleFilterChange("pickupLocation", e.target.value)
              }
              placeholder="pick up location"
              backgroundColor={"blue.300"}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>

            <Select
              value={filters.Destination}
              onChange={(e) =>
                handleFilterChange("Destination", e.target.value)
              }
              placeholder="Destination"
              backgroundColor={"blue.300"}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>

            <Select
              value={filters.EstimatedFare}
              onChange={(e) =>
                handleFilterChange("EstimatedFare", e.target.value)
              }
              placeholder="Fare"
              backgroundColor={"blue.300"}
            >
              <option value="1">100 ብር</option>
              <option value="2">200 ብር</option>
              <option value="3 ">300 ብር</option>
              <option value="4">400 ብር</option>
              <option value="5">500 ብር</option>
            </Select>
          </HStack>
        </VStack>
      </Box>

      {filteredRideRequest && (
        <List spacing={4}>
          {filteredRideRequest.map((request) => (
            <ListItem
              key={request.id}
              border={"dotted"}
              borderColor={"black"}
              p={2}
            >
              <Flex alignItems="center">
                <Avatar
                  size="sm"
                  name={request.passengerName}
                  src={request.passengerPhoto}
                />
                <Spacer />
                <Box>
                  <Text fontWeight="bold">{request.passengerName}</Text>
                  <Text>
                    {request.pickupLocation} - {request.destination}
                  </Text>
                  <Text>Estimated fare: ${request.estimatedFare}</Text>
                  <Text>
                    {request.numPassengers}{" "}
                    {request.numPassengers > 1 ? "passengers" : "passenger"}
                  </Text>
                </Box>
                <Spacer />
                <Box>
                  <Button
                    colorScheme="green"
                    variant="solid"
                    size="sm"
                    mr={2}
                    onClick={() => handleAccept(request.id)}
                  >
                    Accept
                  </Button>
                  <Button
                    colorScheme="red"
                    variant="solid"
                    size="sm"
                    onClick={() => handleDecline(request.id)}
                  >
                    Decline
                  </Button>
                </Box>
              </Flex>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default RideRequests;
