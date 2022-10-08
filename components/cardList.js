import {Flex, List} from "@chakra-ui/react"
import Card from "./card"

const CardList = (props)=>{
    return(
        <>
        <List>
            {props.cards?.map((card)=> (
                <Card key={card.id} title={card.title} cat={card.cat} country={card.country} desc={card.desc} logo={card.logo} linkedin={card.linkedin} site={card.site}/>
            ))}   
        </List>
        </>
    )
}

export default CardList