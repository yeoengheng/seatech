import { Input, Flex, Spacer, Select} from "@chakra-ui/react";

const Toolbar = ()=>{
    return(
        <Flex alignItems='center' flexDirection="row" minW={600} maxW={700}>
                <Input  size={'sm'} w={400} placeholder="Search"/>
                <Spacer/>
                <Select size={'sm'} w={280} placeholder='Category'>
                    <option value="SaaS">SaaS</option>
                    <option value="AI/ML">AgriTech</option>
                </Select>
                <Spacer/>
                <Select size={'sm'} w={280} placeholder='Country'>
                    <option value="sg">Singapore</option>
                    <option value="msia">Malaysia</option>
                </Select>
        </Flex>
    )
}

export default Toolbar