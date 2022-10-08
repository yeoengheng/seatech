import { Flex,Box, Button, Image, Text } from "@chakra-ui/react"
import Header from "../components/header"
import Banner from '../components/banner';


export default function Deals(){
    return(
        <>
        <Banner></Banner>
        <Header></Header>
        <Flex direction={"column"} pt={7} align={"center"}>
            <Flex w={250} m={3} p={5}  outline="solid" outlineColor="gray.100" alignItems="center" direction="column">
                <Image w={200} src="https://seeklogo.com/images/N/notion-logo-4CE8FBF5C5-seeklogo.com.png">
                </Image>
                <Text align="center" mt={5}>Notion 20% off for the first twelve months</Text>
                <Button mt={5} size="md" color={"white"} bg={"#16426E"}>Get Deal</Button>
            </Flex>
        </Flex>
        </>
    )
}
    