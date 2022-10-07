import Banner from '../components/banner';
import Header from '../components/header';
import CardList from '../components/cardList';
import { table, minifyRecords } from './api/utils';

const value =[
  {
    title:"ReferralCandy",
    logo:"https://global-uploads.webflow.com/617f60f9be2ba89e9ecc60ca/6195b374af37e437be9f7262_referralcandy-webclip.png",
    cat:"SaaS",
    country:"Singapore",
    desc:"ReferralCandy helps ecommerce stores increase sales by getting shoppers to refer their friends."
  },  
  {
    title:"Mobbin",
    logo:"https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/e8fdaa2fc8afcbc9dfa01549fad4abe1.png",
    cat:"SaaS",
    country:"Singapore",
    desc:"Mobbin is a hand-picked collection of the latest design patterns from mobile apps that reflect the best in design."
  },
  {
    title:"Saleswhale",
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtKrhMEUi2ukNgTQ6qFPqahEozdm9k_vRKb5aHVVBlxA&s",
    cat:"SaaS",
    country:"Singapore",
    desc:"Saleswhale's mission is to automate drudgery for revenue teams, and provide a better experience for their customers."
  },
  {
    title:"The Commerce Co (TCC)",
    logo:"https://media-exp1.licdn.com/dms/image/C4D0BAQHDfntwwjGU7A/company-logo_200_200/0/1644896406177?e=2147483647&v=beta&t=WYjsZNtaxn8Y_5X1BJJ4nwJ_YnU1XkssouojBhyI1_w",
    cat:"SaaS",
    country:"Singapore",
    desc:"AT TCC we empower eCommerce businesses to build amazing businesses. Building the infrastructure that powers the world of eCommerce"
  },
  {
    title:"HeadsUp",
    logo:"https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/bqbapilfjb3lbzgey4sy",
    cat:"SaaS",
    country:"Singapore",
    desc:"aWe're on a mission to help sales and revenue teams understand how customers use their products. Data analytics shouldn't be a specialized function, but a resource that's available to every team."
  },
  {
    title:"Zaapi",
    logo:"https://assets.greenbook.org/logos/New%20Zappi%20logo_pp9075488636649401294149996.png",
    cat:"SaaS",
    country:"Singapore",
    desc:"Zaapi enables small merchants in Southeast Asia to start selling online in just a few clicks."
  },
  {
    title:"Staffany",
    logo:"https://play-lh.googleusercontent.com/yrFUS-7Ktd_otdPPS8QbmWrYHiGGIPdkdNPEGWNGEj6o3PQ5KwIrDaCW40eBdfvYIQ",
    cat:"SaaS",
    country:"Singapore",
    desc:"StaffAny is a workforce management solution for companies who engage hourly workers."
  }
]

export default function Home(props) {
  return (
    <>
      <Banner></Banner>
      <Header></Header>
      {/* <CardList cards={value}></CardList> */}
      <CardList cards={props.load}></CardList>
    </>
  )
}

export async function getServerSideProps(context){
  try{
    const records = await table.select({
      //fields:['Company',"Website",'Description','Logo'],
      filterByFormula:"{Done?}!=FALSE()",
      view: "👀 Overview"
  }).firstPage();
  return{
    props:{
      load:minifyRecords(records)
    }
  }
  }
  catch(err){
    console.error(err)
    return{
      props:{load:value}
    }
  }
}