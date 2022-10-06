import { Divider, chakra, Flex, VisuallyHidden, HStack,Image, Button, Box, IconButton, CloseButton, VStack, useDisclosure, useColorModeValue, Icon } from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Submit from "./submit";

const Header = () => {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();
  
    return (
      <>
        <chakra.header
          bg={bg}
          w="full"
          px={{
            base: 2,
            sm: 4,
          }}
          py={4}
          //shadow="md"
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <chakra.a
                href="/"
                title="Tech in SEA Directory"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image w= "14" src="https://i.ibb.co/MSQ2GCG/asd.png" alt="logo"/>
                <VisuallyHidden>Tech in SEA</VisuallyHidden>
              </chakra.a>
              <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                Tech in SEA
              </chakra.h1>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                display={{
                  base: "none",
                  md: "inline-flex",
                }}
              >
                <Button variant="ghost">About</Button>
                <Button variant="ghost">Resources</Button>
              </HStack>
              <Submit></Submit>

              <Box
                display={{
                  base: "inline-flex",
                  md: "none",
                }}
              >
                <IconButton
                  display={{
                    base: "flex",
                    md: "none",
                  }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{
                    color: "inherit",
                  }}
                  variant="ghost"
                  icon={<HamburgerIcon/>}
                  onClick={mobileNav.onOpen}
                />
  
                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />
  
                  <Button w="full" variant="ghost">
                    About
                  </Button>
                  <Button w="full" variant="ghost">
                    Resources
                  </Button>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
        <Divider/>
      </>
    );
  };

  export default Header