import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Stack, Button, Text, useColorModeValue, Image } from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";

const Index = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission and payment processing
    console.log("Payment submitted");
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={8} bg={useColorModeValue("white", "gray.700")} borderRadius="lg" boxShadow="lg">
      <Image src="https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBwYXltZW50fGVufDB8fHx8MTcxMTg2NDM1OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Secure Payment" mb={8} mx="auto" />
      <Heading as="h2" size="xl" textAlign="center" mb={6}>
        Payment Details
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="cardNumber" isRequired>
            <FormLabel>Card Number</FormLabel>
            <Input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="1234 5678 9012 3456" />
          </FormControl>
          <FormControl id="cardName" isRequired>
            <FormLabel>Cardholder Name</FormLabel>
            <Input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} placeholder="John Doe" />
          </FormControl>
          <Stack direction={["column", "row"]} spacing={4}>
            <FormControl id="expiryDate" isRequired>
              <FormLabel>Expiry Date</FormLabel>
              <Input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} placeholder="MM/YY" />
            </FormControl>
            <FormControl id="cvv" isRequired>
              <FormLabel>CVV</FormLabel>
              <Input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder="123" />
            </FormControl>
          </Stack>
          <Button type="submit" colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaLock />} mt={8} w="100%">
            Pay Now
          </Button>
        </Stack>
      </form>
      <Text mt={4} textAlign="center" color="gray.500" fontSize="sm">
        Your payment is secure and encrypted.
      </Text>
    </Box>
  );
};

export default Index;
