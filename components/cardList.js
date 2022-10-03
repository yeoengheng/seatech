import {Flex, List, ListItem } from "@chakra-ui/react"
import Card from "./card"

const CardList = (props)=>{
    console.log(props)
    return(
            <List>
                {props.cards?.map((card)=> (
                    <Card key={card.title} title={card.title} cat={card.cat} country={card.country} desc={card.desc} logo={card.logo}/>
                ))}   
            </List>
    )
}

export default CardList