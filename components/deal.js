import { Flex,Box, Image, chakra, Spacer, Button, Link } from "@chakra-ui/react"
const Deal = (props)=>{
	const title = props.title
	const desc = props.desc 
	const img = props.img 
	const link = props.link 
	return(
		<>
		<Flex direction={"row"} pt={7} px={3} align={"center"}>
            <Box
                maxW="md"
                mx="auto"
                bg="white"
                _dark={{
                bg: "gray.800",
                }}
                shadow="lg"
                rounded="lg"
            >
                <Image
                h={40}
                w="full"
                fit="cover"
                mt={2}
                src={img}
                alt="logo"
                />
                <Box px={4} py={2}>
                    <chakra.h1
                        color="gray.800"
                        _dark={{
                        color: "white",
                        }}
                        fontWeight="bold"
                        fontSize="xl"
                    >
                        {title}
                    </chakra.h1>
                    <chakra.p
                        mt={1}
                        fontSize="sm"
                        color="gray.600"
                        _dark={{
                        color: "gray.400",
                        }}
                    >
						{desc}
                    </chakra.p>

                </Box>
                <Flex
                    px={4}
                    py={2}
                    roundedBottom="lg"
                    justifyItems="end"
                >
                    <Spacer></Spacer>
                    <Button
                        px={5}
                        py={1}
                        mb={2}
                        bg="#1e0b47"
                        fontSize="md"
                        color="white"
                        fontWeight="bold"
                        rounded="lg"
                        _hover={{
                        bg: "gray.200",
                        }}
                        _focus={{
                        bg: "gray.400",
                        }}
                    >
						<Link href={link} target="_blank">Get Deal</Link>
                    </Button>    
                    <Spacer></Spacer>
                </Flex>
            </Box>
        </Flex>
		</>
	)
}

export default Deal