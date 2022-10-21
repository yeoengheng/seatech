import Airtable from "airtable";
import { table, minifyRecords } from "./utils/airtable";
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('app3CEjm4eyYVZwaR');


export default async (req, res) => {
  try{
  const records = await table.select({
      fields:['Company',"Website",'Description','Logo'],
      filterByFormula:"{Done?}!=FALSE()",
      view: "👀 Overview"
  }).all()
  const minifiedRecords = minifyRecords(records)
  res.status(200).json(minifiedRecords)
  }
  catch(err){
  res.status(500).json({msg:'Something went wrong'})
  }
}