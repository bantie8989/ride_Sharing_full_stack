import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Select,
  Checkbox,
  CheckboxGroup,
  VStack,
  HStack,
  Avatar,
  Badge,
  grid,
  SimpleGrid,
  useBreakpointValue,
  Img,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  FaCampground,
  FaCar,
  FaChair,
  FaClock,
  FaDollarSign,
  FaLandmark,
  FaRoad,
  FaTimes,
  FaUserTimes,
} from "react-icons/fa";
import Confirmation from "../Confirmation Component/Confirmation";

const RideListing = () => {
  const [select, setSelect] = useState(false);
  const [filters, setFilters] = useState({
    numSeats: "",
    carType: "",
    driverPrefs: [],
  });

  const [rideListings, setRideListings] = useState([
    // sample ride listing data
    {
      id: 1,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carPhoto:
        "https://github.com/bantie8989/ride/blob/d69b20ed9bd4ae6d7eb43518e340498d7e4a00fc/src/assets/bacground.jpg",
      carType: "Fuel-efficient",

      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 2,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carPhoto:
        "https://github.com/bantie8989/ride/blob/d69b20ed9bd4ae6d7eb43518e340498d7e4a00fc/src/assets/bacground.jpg",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 3,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carPhoto:
        "https://github.com/bantie8989/ride/blob/d69b20ed9bd4ae6d7eb43518e340498d7e4a00fc/src/assets/bacground.jpg",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 4,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carPhoto:
        "https://github.com/bantie8989/ride/blob/d69b20ed9bd4ae6d7eb43518e340498d7e4a00fc/src/assets/bacground.jpg",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 5,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carPhoto:
        "https://github.com/bantie8989/ride/blob/d69b20ed9bd4ae6d7eb43518e340498d7e4a00fc/src/assets/bacground.jpg",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 6,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carPhoto:
        "https://github.com/bantie8989/ride/blob/d69b20ed9bd4ae6d7eb43518e340498d7e4a00fc/src/assets/bacground.jpg",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 7,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carPhoto:
        "https://github.com/bantie8989/ride/blob/d69b20ed9bd4ae6d7eb43518e340498d7e4a00fc/src/assets/bacground.jpg",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 8,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carPhoto:
        "https://github.com/bantie8989/ride/blob/d69b20ed9bd4ae6d7eb43518e340498d7e4a00fc/src/assets/bacground.jpg",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 9,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carPhoto:
        "https://github.com/bantie8989/ride/blob/d69b20ed9bd4ae6d7eb43518e340498d7e4a00fc/src/assets/bacground.jpg",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 10,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carPhoto:
        "https://github.com/bantie8989/ride/blob/d69b20ed9bd4ae6d7eb43518e340498d7e4a00fc/src/assets/bacground.jpg",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 11,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carPhoto:
        "https://github.com/bantie8989/ride/blob/d69b20ed9bd4ae6d7eb43518e340498d7e4a00fc/src/assets/bacground.jpg",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    {
      id: 12,
      driver: {
        name: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        rating: 4.5,
      },
      origin: "New York",
      destination: "Los Angeles",
      travelTime: "4 hours",
      cost: " $50.00",
      numSeats: 4,
      vehicle: "Toyota Camry",
      carPhoto:
        "https://github.com/bantie8989/ride/blob/d69b20ed9bd4ae6d7eb43518e340498d7e4a00fc/src/assets/bacground.jpg",
      carType: "Fuel-efficient",
      driverPrefs: ["Non-smoking", "No music"],
    },
    // ...
  ]);

  const handleclick = () => {
    setSelect(!select);
  };

  const handleFilterChange = (filter, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filter]: value }));
  };

  const filteredRideListings = rideListings.filter((ride) => {
    if (filters.numSeats && ride.numSeats < filters.numSeats) return false;
    if (filters.carType && ride.carType !== filters.carType) return false;
    if (filters.driverPrefs.length > 0) {
      const matchingPrefs = ride.driverPrefs.filter((pref) =>
        filters.driverPrefs.includes(pref)
      );
      if (matchingPrefs.length !== filters.driverPrefs.length) return false;
    }
    return true;
  });

  const columnCount = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Box w={"100%"} p={10}>
      {/* Filter section */}
      <VStack mb={4}>
        <Text
          fontSize={20}
          mb={12}
          p={5}
          color={"black"}
          backgroundColor={"goldenrod"}
          w={"100%"}
          fontWeight={"bold"}
          textAlign={"center"}
          fontStyle={"initial"}
          borderRadius={10}
        >
          Filter by
        </Text>
        <Spacer />
        <HStack spacing={24}>
          <Select
            value={filters.numSeats}
            onChange={(e) => handleFilterChange("numSeats", e.target.value)}
            placeholder="Number of seats"
            backgroundColor={"blue.300"}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Select>
          <Select
            value={filters.carType}
            onChange={(e) => handleFilterChange("carType", e.target.value)}
            placeholder="Car type"
            backgroundColor={"blue.300"}
          >
            <option value="Fuel-efficient">Fuel-efficient</option>
            <option value="Luxury">Luxury</option>
            <option value="Eco-friendly">Eco-friendly</option>
          </Select>
          <CheckboxGroup
            value={filters.driverPrefs}
            onChange={(values) => handleFilterChange("driverPrefs", values)}
          >
            <HStack spacing={8}>
              <Checkbox value="Non-smoking">Non-smoking</Checkbox>
              <Checkbox value="No music">No music</Checkbox>
              <Checkbox value="Pet-friendly">Pet-friendly</Checkbox>
            </HStack>
          </CheckboxGroup>
        </HStack>
      </VStack>

      {/* Ride listings section */}
      {select && <Confirmation />}

      <SimpleGrid columns={columnCount} spacing={18} mt={10}>
        {filteredRideListings.map((ride, index) => (
          <Grid templateColumns="repeat(1, 1fr)" gap={14} key={index}>
            <GridItem key={ride.id} p={10}>
              <Flex
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={2}
              >
                <Avatar src={ride.driver.profilePicture} size="sm" />
                <Text fontSize="lg" fontWeight="bold" ml={2}>
                  {ride.driver.name}
                </Text>
                <Badge
                  variant="outline"
                  colorScheme="green"
                  fontSize="sm"
                  ml={2}
                >
                  {ride.driver.rating} stars
                </Badge>
              </Flex>
              <Box color={"goldenrod"} fontWeight={"bolder"}>
                <Box display={"flex"} alignItems={"center"}>
                  <FaRoad />
                  <Text fontSize="md" mb={2} ml={2}>
                    {ride.origin} → {ride.destination}
                  </Text>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <FaClock />
                  <Text fontSize="md" mb={2} ml={2}>
                    Estimated travel time: {ride.travelTime}
                  </Text>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <FaDollarSign />
                  <Text fontSize="md" mb={2} ml={2}>
                    Estimated cost: {ride.cost}
                  </Text>
                </Box>

                <Box display={"flex"} alignItems={"center"}>
                  <FaCar />
                  {ride.vehicle && (
                    <Text fontSize="md" mb={2} ml={2}>
                      Vehicle: {ride.vehicle}
                    </Text>
                  )}
                </Box>

                <Box display={"flex"} alignItems={"center"}>
                  <FaChair />
                  <Text fontSize="md" mb={2} ml={2}>
                    Number of seats available: {ride.numSeats}
                  </Text>
                </Box>
                {/* imgae of car */}
                <Box display={"flex"} alignItems={"center"}>
                  <FaCar />
                  <Img src={ride.carPhoto} placeholder="car picture" />
                </Box>
              </Box>

              <Text
                fontSize="md"
                mb={2}
                color={"goldenrod"}
                fontWeight={"bolder"}
              >
                Driver preferences:{" "}
                {ride.driverPrefs.map((pref, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    colorScheme="gray"
                    mr={1}
                  >
                    {pref}
                  </Badge>
                ))}
              </Text>
              <Button
                colorScheme="blue"
                variant="solid"
                size="sm"
                w="100%"
                mb={4}
                onClick={handleclick}
              >
                Select
              </Button>
            </GridItem>
          </Grid>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default RideListing;
