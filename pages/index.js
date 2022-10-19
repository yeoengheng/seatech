import Banner from '../components/banner';
import Header from '../components/header';
import CardList from '../components/cardList';
import { table, minifyRecords } from './api/utils/airtable';
import Toolbar from '../components/toolbar';
import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export default function Home(props) {
  const loadData = props.load 
  const [card, setCard] = useState(loadData)
  const [searchPhrase, setSearchPhrase] = useState("")
  const [catSet, setCat] = useState([])
  const [countrySet, setCountry] = useState([])
  const search = (event)=>{
    const matchedUsers = loadData.filter((card)=>{
      return card.title.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setCard(matchedUsers)
    setSearchPhrase(event.target.value)
  }

  const filterCountry = (event)=>{
    return setCountry(event.target.value)
  }  
  const filterCat = (event)=>{
    console.log(event.target.value)
    return setCat(event.target.value)
  }  
  const filterAll = ()=>{
    const countryFilter = loadData.filter((card)=>{
      return card.country.includes(countrySet)
    })
    const catFilter = countryFilter.filter((card)=>{
      return card.cat.includes(catSet)
    })
    setCard(catFilter)
  }

  useEffect(()=>{
    filterAll()
  },[catSet,countrySet])


  return (
    <>
      <Banner></Banner>
      <Header></Header>
      <Flex direction={"column"} pt={7} align={"center"}>
        <Toolbar 
          searchPhrase={searchPhrase} 
          search={search} 
          filterCountry = {filterCountry} 
          filterCat = {filterCat} 
          cards= {loadData}>
        </Toolbar>
        <CardList cards={card}></CardList>
      </Flex>
    </>
  )
}

export async function getServerSideProps(context){
  try{
    const records = await table.select({
      filterByFormula:"{Done?}!=FALSE()",
      view: "👀 Overview"
  }).all();
  return{
    props:{
      load:minifyRecords(records)
    }
  }
  }
  catch(err){
    console.error(err)
    return{
      props:{load:"error"}
    }
  }
}