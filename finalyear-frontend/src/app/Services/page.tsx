'use client'

import Navbar from '@/components/navbar/Navbar';
import { Flex, Box, SimpleGrid, Card, CardHeader, Heading, ChakraProvider, CardBody, Text, CardFooter, Button, Center, useBreakpointValue } from '@chakra-ui/react';

import { extendTheme } from "@chakra-ui/react";
import { FaUser, FaChartBar, FaListUl, FaCog } from 'react-icons/fa'; // Import your desired icons


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
        <Box bg="#CECABE" margin="0" padding="0">
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
        <Card p={4} m={4} boxShadow="md" borderRadius="md" borderWidth="1px">
          <CardHeader>
            <Heading size='md' >Pose Detection</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card p={4} m={4} boxShadow="md" borderRadius="md" borderWidth="1px">
          <CardHeader>
            <Heading size='md'>Pose Correction</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card p={4} m={4} boxShadow="md" borderRadius="md" borderWidth="1px">
          <CardHeader>
            <Heading size='md'>Free Lessons</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card p={4} m={4} boxShadow="md" borderRadius="md" borderWidth="1px">
          <CardHeader>
            <Heading size='md'>Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
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