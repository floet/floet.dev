import Head from 'next/head'
import { scroller } from "react-scroll";

//components
import BoxContent from "../components/Home/BoxContent";
import Customers from "../components/Home/Customers";
import FloatingActionButton from "../components/FloatingActionButton";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Floet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <BoxContent
          compName="comp-1"
          isFirstBox={true}
          title="Building beautiful solutions."
          description="Our goal is to provide simple, beautiful, and effective software solutions your team will enjoy using. From performance and uptime monitoring to large scale log management, we have a variety of solutions to help make your products the best they can be."
          image="templates/shell.png"
          marginTop="8rem"
        />

        <BoxContent
          compName="comp-2"
          title="Powerful uptime monitoring for websites, applications and APIs."
          description="Uptime and performance monitoring with detailed reporting, flexible alerting, public status pages, and more. Help keep your customers happy, reduce support, and improve SEO with a performant and highly available website, application, or API."
          image="templates/klabin.png"
          labelLink="View the product"
          linkTo="#"
          marginTop="12rem"
        />

        <BoxContent
          compName="comp-3"
          title="Structured logging at any scale."
          description="Apex Logs provides your team with powerful structured and plain-text log management, featuring a rich query language, flexible alerting integrations, unlimited log retention, and pricing unmatched in the industry."
          image="templates/3r.png"
          labelLink="View the product"
          linkTo="#"
          marginTop="12rem"
        />

        <BoxContent
          compName="comp-4"
          title="Serverless applications in seconds, in your own AWS account."
          description="Deploy infinitely scalable serverless applications, APIs, and sites in seconds with a single command. Bring a Heroku-style user experience to your own AWS account, save time, money, and get back to work on what makes your product unique."
          image="templates/novonor.png"
          labelLink="View the product"
          linkTo="#"
          marginTop="12rem"
          marginBottom="0"
        />
      </div>
      <Customers />

      {/* FAB ⬇️ */}
      <FloatingActionButton handleButton={() : void => scroller.scrollTo('navbar', {
          duration: 500,
          delay: 0,
          smooth: 'easeInOutQuart'
        })} 
      />
    </div>
  )
}
