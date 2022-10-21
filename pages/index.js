import Banner from '../components/banner';
import Header from '../components/header';
import CardList from '../components/cardList';
import { table, minifyRecords } from './api/utils/airtable';
import Toolbar from '../components/toolbar';
import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import Head from 'next/head' 

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
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"></link>
        <title>SEA Startup Directory</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content='A simple directory of all South East Asia Tech Startups'/>
      </Head>
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
      // fields:['Company',"Website",'Description','Logo','LinkedIn','Country','Category'],
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