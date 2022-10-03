import Banner from '../components/banner';
import Header from '../components/header';
import CardList from '../components/cardList';

const cardData = [{
  title: "ReferralCandy",
  cat:"SaaS",
  country:"Singapore",
  desc:"ReferralCandy helps ecommerce stores increase sales by getting shoppers to refer their friends. Our SaaS app accelerates word-of-mouth referrals for online stores around the world.",
  logo:"https://global-uploads.webflow.com/617f60f9be2ba89e9ecc60ca/6195b374af37e437be9f7262_referralcandy-webclip.png"  
},
  {
  title: "Mobbin",
  cat:"SaaS",
  country:"Singapore",
  desc:"Mobbin is a hand-picked collection of the latest design patterns from mobile apps that reflect the best in design.",
  logo:"https://www.saashub.com/images/app/service_logos/37/b791481ee8a5/large.png?1639299814"
  },
  {
  title: "Staffany",
  cat:"SaaS",
  country:"Singapore",
  desc:"StaffAny is a workforce management solution for companies who engage hourly workers.",
  logo:"https://play-lh.googleusercontent.com/yrFUS-7Ktd_otdPPS8QbmWrYHiGGIPdkdNPEGWNGEj6o3PQ5KwIrDaCW40eBdfvYIQ"
  },
  {
  title: "Saleswhale",
  cat:"SaaS",
  country:"Singapore",
  desc:"Saleswhale's mission is to automate drudgery for revenue teams, and provide a better experience for their customers.",
  logo:"https://www.saleswhale.com/hubfs/humpback/web/assets/img/sw/logos/sw-logo-mark.png"
  }
]

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Header></Header>
      <CardList cards={cardData}></CardList>

    </>

  )
}
