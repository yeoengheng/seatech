import { Input, Flex, Spacer, Select, HStack} from "@chakra-ui/react";

const Toolbar = ()=>{
    return(
        <HStack spacing={1}>
                <Input  size={'sm'} w={300}  placeholder="Search"/>
                <Spacer/>
                <Select size={'sm'} maxW={130} placeholder='Category'>
                    <option value="SaaS">SaaS</option>
                    <option value="AI/ML">AgriTech</option>
                </Select>
                <Spacer/>
                <Select size={'sm'} maxW={130} placeholder='Country'>
                    <option value="sg">Singapore</option>
                    <option value="msia">Malaysia</option>
                </Select>
        </HStack>
    )
}

export default Toolbar