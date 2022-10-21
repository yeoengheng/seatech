import { Container, Flex, Text } from "@chakra-ui/react";

const Banner = ()=>{
return(
    <Flex bg="brand.primary" py={1} w="auto" justifyContent='center'>
        <Text color="white" fontWeight="bold">
            Get to know the SEA Startup Space 👀
        </Text>
    </Flex>
)
}
export default Banner