import { Container, Flex, Text } from "@chakra-ui/react";

const Banner = ()=>{
return(
    <Flex bg="blue.300" py={1} w="auto" justifyContent='center'>
        <Text color="white" fontWeight="bold">
            South East Asia's very own Tech Directory 😋
        </Text>
    </Flex>
)
}
export default Banner