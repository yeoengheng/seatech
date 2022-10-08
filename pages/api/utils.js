import Airtable from "airtable";
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('app3CEjm4eyYVZwaR');
const table = base('Competitors')

const minifyRecords=(records)=>{
  return records.map((record)=>getMinifiedRecord(record))
}
const getMinifiedRecord=(record)=>{
  if(!record.fields.completed){
    record.fields.completed= false
  }
  return{
    id: record.id,
    title:record.fields.Company,
    site:record.fields.Website,
    logo:record.fields.Logo,
    desc:record.fields.Description,
    country:record.fields.Country,
    cat:record.fields.Category,
    linkedin:record.fields.LinkedIn

  }
}

export {table, minifyRecords, getMinifiedRecord}