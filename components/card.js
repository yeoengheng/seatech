import { Text, Flex, Box, Badge, Image, Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react"
import { MoonIcon } from "@chakra-ui/icons"

const Card = (props)=>{
    const title = props.title
    const desc = props.desc 
    const country = props.country
    const cat = props.cat
    const logo = props.logo
    return(
    <>
    <Flex 
        p={1} w="full" 
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
                    <Tag size="md" mr={2} mt={2} variant="subtle">
                        <TagLeftIcon as={MoonIcon}></TagLeftIcon>
                        <TagLabel>{cat}</TagLabel>
                    </Tag>
                    <Tag size="md" mr={2} mt={2} variant="subtle">
                        <TagLeftIcon as={MoonIcon}></TagLeftIcon>
                        <TagLabel>{country}</TagLabel>
                    </Tag>
                </Box>

            </Flex>  

    </Flex>;
    </>

    )
}

export default Card