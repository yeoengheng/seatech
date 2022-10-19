import Header from "../components/header"
import Banner from '../components/banner';
import Deal from "../components/deal";
import {SimpleGrid } from "@chakra-ui/react";

const deals =[
    {
        name:"Startup Discount",
        link:"https://www.deel.com/register-your-startup#:~:text=Register%20your%20startup%20to%20get,verify%20and%20apply%20your%20discount.",
        img:"https://squeezegrowth.com/wp-content/uploads/2021/12/deel-payroll-exclusive-discount-offer-featured.png",
        discount:"Hire contractors for 3 months free, then 50% off your first year."
    },
    {
        name:"93% off original price",
        link:"https://www.drift.com/solutions/startups/",
        img:"https://cdn.worldvectorlogo.com/logos/drift-logo.svg",
        discount:"Drift's Conversation Cloud helps businesses connect with customers in the moments that matter most."
    },
    {
        name:"15% off annual subscription",
        link:"https://www.masterclass.com/?utm_medium=POD&utm_term=Aq-Prospecting&utm_content=STARTUPS&utm_campaign=AAP&utm_source=Paid&promo_id=startups",
        img:"https://bestreviews.net/wp-content/uploads/masterclass-logo.png",
        discount:"MasterClass is the streaming platform where anyone can learn from the world's best."
    }
]

export default function Deals(){
    return(
        <>
        <Banner></Banner>
        <Header></Header>
        <SimpleGrid minChildWidth='200px' spacing='30px' px={5}>
        {deals?.map((deal)=> (
                <Deal key={deal.name} title={deal.name} desc={deal.discount} img={deal.img} link={deal.link}/>
            ))}   
        </SimpleGrid>


        </>
    )
}
    