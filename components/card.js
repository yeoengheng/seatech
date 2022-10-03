import { Text, Flex, Box, Badge, Image, HStack } from "@chakra-ui/react"

const Card = (props)=>{
    const title = props.title
    const desc = props.desc 
    const country = props.country
    const cat = props.cat
    const logo = props.logo
    return(
    <>
    <Flex 
        p={5} w="full" 
        alignItems="center"
        justifyContent="center"> 
            <Flex 
                mx="auto"
                px={8}py={4}
                rounded="lg"
                //shadow="lg"
                bg="white"
                _dark={{bg: "gray.800",}}
                maxW="2xl"
                flexDirection="row"
                >
                <Image h={100} w={100} mt={4} mr={8} src={logo} alt="logo"/>    
                <Box mt={2}>
                    <Text
                        fontSize="20"
                        color="gray.700"
                        _dark={{
                            color: "white",
                        }}
                        fontWeight="700"
                    >
                        {title}
                    </Text>
                    <Text
                        mt={2}
                        color="gray.600"
                        _dark={{
                            color: "gray.300",
                        }}
                    >
                        {desc}
                    </Text>
                    <Badge
                        mr={2}
                        mt={2}
                        fontSize="xs"
                        letterSpacing="wide"
                        colorScheme={"blue"}  
                        variant='solid'
                        fontWeight="medium"
                        rounded="full"
                        px={4}
                        py={1}
                        >
                        {cat}
                    </Badge>
                    <Badge
                        mr={2}
                        mt={2}
                        fontSize="xs"
                        letterSpacing="wide"
                        colorScheme={"green"}
                        variant="subtle"
                        fontWeight="medium"
                        rounded="full"
                        px={4}
                        py={1}
                        >
                        {country}
                    </Badge>
                </Box>

            </Flex>  

    </Flex>;
    </>

    )
}

export default Card