import { Text, Flex, Box, Link, Tag, TagLeftIcon, Image, TagLabel, Icon } from "@chakra-ui/react"
import {BsLinkedin, BsGlobe} from 'react-icons/bs'
import {MdFlag, MdCategory} from 'react-icons/md'

const Card = (props)=>{
    const title = props.title
    const desc = props.desc 
    const country = props.country
    const cat = props.cat
    const logo = props.logo
    const site = props.site
    const linkedin = props.linkedin
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
                <Image height={100} width={100} mt={4} mr={8} src={logo} alt="logo"/>    
                <Box mt={2}>
                    <Flex flexDirection="row" alignItems='center'>
                        <Text
                        mr={2}
                        fontSize="20"
                        color="gray.700"
                        _dark={{
                            color: "white",
                        }}
                        fontWeight="700"
                    >
                        {title}
                        </Text>
                        <Link mt={2} mr={1} href={site} target="_blank">
                            <Icon as={BsGlobe}></Icon>
                        </Link>
                        <Link mt={2} href={linkedin} target="_blank">
                            <Icon as={BsLinkedin} color="blue.500" mr={1}></Icon>
                        </Link>
                    </Flex>
                    <Text
                        mt={1}
                        color="gray.600"
                        _dark={{
                            color: "gray.300",
                        }}
                        fontSize={14}
                    >
                        {desc}
                    </Text>
                    <Tag bg="teal.500" fontWeight="normal" color="white" size="md" mr={2} mt={2} variant="subtle">
                        <TagLeftIcon as={MdCategory}></TagLeftIcon>
                        <TagLabel>{cat}</TagLabel>
                    </Tag>
                    <Tag bg="red.600" fontWeight="normal" color="white" size="md" mr={2} mt={2} variant="subtle">
                        <TagLeftIcon as={MdFlag}></TagLeftIcon>
                        <TagLabel>{country}</TagLabel>
                    </Tag>
                </Box>

            </Flex>  

    </Flex>
    </>

    )
}

export default Card