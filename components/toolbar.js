import { Input, Spacer, Select, HStack} from "@chakra-ui/react";

const Toolbar = (props)=>{
    const uniqueCat = props.cards?.map(cat => cat.cat).filter((value, index, self)=>self.indexOf(value)===index)
    const uniqueCountry = props.cards?.map(country => country.country).filter((value, index, self)=>self.indexOf(value)===index)

    
    return(
        <HStack w="auto" spacing={1} pl={2} pr={2}>
                <Input size={'sm'} w="auto"placeholder="Search" value={props.searchPhrase} onChange={props.search}/>
                <Spacer/>
                <Select size={'sm'} maxW={130} placeholder='Category'onChange={props.filterCat}>
                    {uniqueCat?.map((cat)=>(
                        <option value ={cat}>{cat}</option>
                    ))}
                </Select>
                <Spacer/>
                <Select size={'sm'} maxW={130} placeholder='Country'onChange={props.filterCountry}>
                    {uniqueCountry?.map((country)=>(
                        <option value ={country}>{country}</option>
                    ))}
                </Select>
        </HStack>
    )
}

export default Toolbar