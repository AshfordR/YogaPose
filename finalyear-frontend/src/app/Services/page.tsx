'use client'

import Navbar from '@/components/navbar/Navbar';
import { Flex, Box, SimpleGrid, Card, CardHeader, Heading, ChakraProvider, CardBody, Text, CardFooter, Button, Center, useBreakpointValue, Image } from '@chakra-ui/react';

import { extendTheme } from "@chakra-ui/react";

export default function Services() {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "gray.100", // Adjust the background color based on your design
          margin: 0, // Set margin to 0
          padding: 0, // Set padding to 0
        },
      },
    },
  });
  const centerHeading = useBreakpointValue({ base: true, md: false });

  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" height="100vh" margin="0" padding="0">
        <Box bg="#CECABE" margin="0" padding="0" backgroundImage="url('Images/common-background.jpg')" backgroundSize="cover">
          <Navbar/>
          <Box>
            <Heading
              position="absolute"
              top={{ base: "4rem", md: "6rem" }}
              left="1rem"
              color="black"
            >
              Our Services
            </Heading>
          </Box>
          <Center mt={{ base: "2rem", md: "6rem" }}>
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} maxW="1200px">
            <CardFlex
  heading="Pose Detection"
  description="View a summary of all your customers over the last month."
  imageUrl="Images/pose_detection.jpg"
/>
<CardFlex
  heading="Pose Correction"
  description="View a summary of all your customers over the last month."
  imageUrl="Images/pose_correction.jpg"
/>
<CardFlex
  heading="Free Lessons"
  description="View a summary of all your customers over the last month."
  imageUrl="Images/free_lessons.jpg"
/>
<CardFlex
  heading="Customer dashboard"
  description="View a summary of all your customers over the last month."
  imageUrl="Images/pattern-bg.jpg"
/>

            </SimpleGrid>
          </Center>
        </Box>
        {/* New Box for "Create an Account" */}
        <Box bg="#4D8376" p="4" flex="1" >
          <Center>
            <Card p={4} m={4} boxShadow="md" borderRadius="md" borderWidth="1px" mt="2rem" maxW="500px">
              <CardHeader>
                <Heading size='md'>Create an Account</Heading>
              </CardHeader>
              <CardBody>
                <Text>Create a new account to access additional features.</Text>
              </CardBody>
              <CardFooter>
                <Button>Sign Up</Button>
              </CardFooter>
            </Card>
          </Center>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}


function CardFlex({ heading, description, imageUrl }: { heading: string, description: string, imageUrl: string }) {
  return (
    <Box
      p={4}
      m={4}
      boxShadow="md"
      borderRadius="md"
      borderWidth="1px"
      position="relative"
      overflow="hidden"
      backgroundImage={`url(${imageUrl})`}
      backgroundSize="cover"
    >
      <Card borderRadius="md" borderWidth="1px" position="relative" bg="rgba(255, 255, 255, 0.8)">
        <Center>
          <Image src={imageUrl} alt={heading} />
        </Center>
        <CardHeader>
          <Heading size='md'>{heading}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{description}</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
    </Box>
  );
}

