import Airtable from "airtable";
import { table, minifyRecords } from "./utils";
const base = new Airtable({apiKey: 'keydFfZB26XVZRPne'}).base('app3CEjm4eyYVZwaR');


export default async (req, res)=> {
  try{
  const records = await table.select({
      //fields:['Company',"Website",'Description','Logo'],
      filterByFormula:"{Done?}!=FALSE()",
      view: "👀 Overview"
  }).firstPage()
  const minifiedRecords = minifyRecords(records)
  res.status(200).json(minifiedRecords)
  }
  catch(err){
  res.status(500).json({msg:'Something went wrong'})
  }
}




// const data =[]
// export async function loadData(){
//     base('Competitors').select({
//         fields:['Company',"Website",'Description','Logo'],
//         filterByFormula:"{Done?}!=FALSE()",
//         view: "👀 Overview"
//       })
//       .eachPage(function page(records, fetchNextPage) {
//         records.forEach(function(record) {
//             const company={}
//             company['title']=record.get('Company')
//             company['logo']=record.get('Logo')
//             company['desc']=record.get('Description')
//             company['site']=record.get('Website')
//             data.push(company)
//         });
//         fetchNextPage();
//       }, function done(err) {
//             console.log(data)
//           if (err) { console.error(err); return; }
//       });
//     return (data)
// }

