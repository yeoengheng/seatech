import {Flex, VStack, List} from "@chakra-ui/react"
import Card from "./card"
import Toolbar from "./toolbar"

const CardList = (props)=>{
    return(
        <>
        <Flex direction={"column"} pt={7} align={"center"}>
        <Toolbar></Toolbar>
        <List>
            {props.cards?.map((card)=> (
                <Card key={card.title} title={card.title} cat={card.cat} country={card.country} desc={card.desc} logo={card.logo}/>
            ))}   
        </List>
        </Flex>
        </>
    )
}

export default CardList