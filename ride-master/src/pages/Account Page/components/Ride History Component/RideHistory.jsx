import React, { useState } from "react";
import {
  Box,
  Text,
  Heading,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Select,
  HStack,
  Center,
} from "@chakra-ui/react";

const rideHistory = [
  {
    date: "2022-01-01",
    time: "12:00 PM",
    pickup: "123 Main St",
    dropoff: "456 Elm St",
    driver: "Jane Smith",
    car: "Toyota Camry",
    fare: "$20.00",
    paymentMethod: "Credit Card",
  },
  {
    date: "2022-01-05",
    time: "2:00 PM",
    pickup: "789 Oak St",
    dropoff: "321 Maple St",
    driver: "John Doe",
    car: "Honda Civic",
    fare: "$30.00",
    paymentMethod: "Debit Card",
  },
  // Add more rides as needed
];

const RideHistory = () => {
  const [filterDateRange, setFilterDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [filterPaymentMethod, setFilterPaymentMethod] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const filterRides = (rides) => {
    let filteredRides = rides;

    // Filter by date range
    if (filterDateRange.startDate || filterDateRange.endDate) {
      filteredRides = filteredRides.filter((ride) => {
        const rideDate = new Date(ride.date);
        const startDate = filterDateRange.startDate
          ? new Date(filterDateRange.startDate)
          : null;
        const endDate = filterDateRange.endDate
          ? new Date(filterDateRange.endDate)
          : null;

        if (startDate && rideDate < startDate) {
          return false;
        }

        if (endDate && rideDate > endDate) {
          return false;
        }

        return true;
      });
    }

    // Filter by payment method
    if (filterPaymentMethod) {
      filteredRides = filteredRides.filter(
        (ride) => ride.paymentMethod === filterPaymentMethod
      );
    }

    return filteredRides;
  };

  const sortRides = (rides) => {
    if (!sortBy) {
      return rides;
    }

    return [...rides].sort((a, b) => {
      if (sortBy === "date") {
        return new Date(a.date) - new Date(b.date);
      }

      if (sortBy === "fare") {
        return (
          parseFloat(a.fare.replace("$", "")) -
          parseFloat(b.fare.replace("$", ""))
        );
      }

      return 0;
    });
  };

  const filteredAndSortedRides = sortRides(filterRides(rideHistory));

  return (
    <Box p={14} borderBlock={'Background'}  mb={10} borderRadius={10}>
      <Center>
        <Heading as="h1" size="lg" mb={4} color={'goldenrod'} p={10}>
          Ride History
        </Heading>
      </Center>

      <HStack spacing={10} justifyContent={"space-between"} p={10}>
        <Box mb={4}>
          <Text fontWeight="bold">Filter by Date Range:</Text>
          <Box display="flex" mt={2}>
            <Input
              type="date"
              placeholder="Start Date"
              onChange={(e) =>
                setFilterDateRange({
                  ...filterDateRange,
                  startDate: e.target.value,
                })
              }
            />
            <Input
              type="date"
              placeholder="End Date"
              ml={2}
              onChange={(e) =>
                setFilterDateRange({
                  ...filterDateRange,
                  endDate: e.target.value,
                })
              }
            />
          </Box>
        </Box>

        <Box mb={4}>
          <Text fontWeight="bold">Filter by Payment Method:</Text>
          <Select
            placeholder="Select Payment Method"
            mt={2}
            onChange={(e) => setFilterPaymentMethod(e.target.value)}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Cash">Cash</option>
          </Select>
        </Box>
      </HStack>

      <Box mb={4}>
        <Text fontWeight="bold">Sort by:</Text>
        <Select
          placeholder="Select Sort Option"
          mt={2}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="date">Date</option>
          <option value="fare">Fare</option>
        </Select>
      </Box>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Time</Th>
              <Th>Pickup</Th>
              <Th>Dropoff</Th>
              <Th>Driver</Th>
              <Th>Car</Th>
              <Th>Fare</Th>
              <Th>Payment Method</Th>
              <Th>Receipt</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredAndSortedRides.map((ride, index) => (
              <Tr key={index}>
                <Td>{ride.date}</Td>
                <Td>{ride.time}</Td>
                <Td>{ride.pickup}</Td>
                <Td>{ride.dropoff}</Td>
                <Td>{ride.driver}</Td>
                <Td>{ride.car}</Td>
                <Td>{ride.fare}</Td>
                <Td>{ride.paymentMethod}</Td>
                <Td>
                  <Button size="sm" variant="outline">
                    Download Receipt
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RideHistory;
